// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {InflateLib} from "./InflateLib.sol";
import {GmDataInterface} from "./GmDataInterface.sol";
import {StringsUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";

interface ICorruptionsFont {
    function font() external view returns (string memory);
}

contract GmRenderer {
    ICorruptionsFont private immutable font;
    GmDataInterface private immutable gmData1;
    GmDataInterface private immutable gmData2;

    struct Hsl {
        uint32 h1;
        uint32 s1;
        uint32 l1;
        uint32 h2;
        uint32 s2;
        uint32 l2;
    }

    struct Color {
        bytes hexNum;
        bytes name;
    }

    constructor(
        ICorruptionsFont fontAddress,
        GmDataInterface gmData1Address,
        GmDataInterface gmData2Address
    ) {
        font = fontAddress;
        gmData1 = gmData1Address;
        gmData2 = gmData2Address;
    }

    function decompress(GmDataInterface.GmDataSet memory gmData)
        public
        pure
        returns (bytes memory, bytes memory)
    {
        (, bytes memory inflated) = InflateLib.puff(
            gmData.compressedImage,
            gmData.compressedSize
        );
        return (gmData.imageName, inflated);
    }

    function _getHsl(bytes32 seed) pure internal returns (Hsl memory) {
        uint32 hue1 = uint32(bytes4(seed)) % 360;
        uint32 hue2 = uint32(bytes4(seed << 32)) % 360;
        uint32 s1 = (uint32(bytes4(seed << 64)) % 88) + 22;
        uint32 s2 = (uint32(bytes4(seed << 96)) % 88) + 22;
        uint32 high = (uint32(bytes4(seed << 128))) % 2;
        uint32 lightnessAddend = ((uint32(bytes4(seed << 160))) % 20);

        uint32 lightness1;
        if (high == 0) {
            lightness1 = 20 + lightnessAddend;
        } else {
            lightness1 = 60 + lightnessAddend;
        }


        uint32 lightness2 = 100 - lightness1;
        return Hsl(hue1, s1, lightness1, hue2, s2, lightness2);
    }

    function _getFilter(uint index) pure internal returns (bytes memory) {
        if (index == 0) {
            return 'noise';
        }

        if (index == 1) {
            return 'lit';
        }

        if (index == 2) {
            return 'displacementFilter';
        }

        if (index == 3) {
            return 'fractal';
        }

        if (index == 4) {
            return 'glow';
        }

        if (index == 5) {
            return 'morph';
        }

        return 'none';
    }

    function svgRaw(uint256 tokenId, bytes32 seed)
        external
        view
        returns (bytes memory, bytes memory, bytes memory, bytes memory, bytes memory)
    {

        // first 24 bytes used to construct hsl
        //Hsl memory hsl = _getHsl(seed)
        uint32 bgRand = uint32(bytes4(seed << 32)) % 100;
        uint32 fontRand = uint32(bytes4(seed << 64)) % 100;
        uint32 filterRand = uint32(bytes4(seed << 96)) % 7;

        Color memory bgColor = _getColor(bgRand);
        Color memory fontColor = _getColor(fontRand);
        bytes memory filter = _getFilter(filterRand);

        uint32 style = uint32(bytes4(seed << 192)) % 69;

        bytes memory inner;
        bytes memory name;
        if (style < 50) {
            (name, inner) = decompress(gmData1.getSvg(style));
        } else {
            (name, inner) = decompress(gmData2.getSvg(style));
        }

        return (
            abi.encodePacked(
                svgPreambleString(bgColor.hexNum, fontColor.hexNum, filter),
                inner,
                "</svg>"
            ),
            name,
            bgColor.name,
            fontColor.name,
            filter
        );
    }

    function svgFilterDefs() private view returns (bytes memory) {
        return abi.encodePacked('<defs><filter id="fractal" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%" ><feTurbulence id="turbulence" type="fractalNoise" baseFrequency="0.03" numOctaves="1" ><animate attributeName="baseFrequency" values="0.01;0.4;0.01" dur="100s" repeatCount="indefinite" /></feTurbulence><feDisplacementMap in="SourceGraphic" scale="50"></feDisplacementMap></filter><filter id="morph"><feMorphology operator="dilate" radius="0"><animate attributeName="radius" values="0;5;0" dur="8s" repeatCount="indefinite" /></feMorphology></filter><filter id="glow" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%" ><feGaussianBlur stdDeviation="5" result="blur2" in="SourceGraphic" /><feMerge><feMergeNode in="blur2" /><feMergeNode in="SourceGraphic" /></feMerge></filter><filter id="noise"><feTurbulence baseFrequency="0.05"/><feColorMatrix type="hueRotate" values="0"><animate attributeName="values" from="0" to="360" dur="1s" repeatCount="indefinite"/></feColorMatrix><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0"/><feDisplacementMap in="SourceGraphic" scale="10"/></filter><filter id="none"><feOffset></feOffset></filter><filter id="displacementFilter"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/><feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" xChannelSelector="R" yChannelSelector="G"/></filter><filter id="tile" x="10" y="10" width="10%" height="10%"><feTile in="SourceGraphic" x="10" y="10" width="10" height="10" /><feTile/></filter><filter id = "lit" x="-10" y="-10" width="640" height="640"><feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence"/><feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/></filter></defs>');
    }

    function svgPreambleString(bytes memory bgColor, bytes memory fontColor, bytes memory filter)
        private
        view
        returns (bytes memory)
    {

        //string memory hsl1 = string(abi.encodePacked('hsl(', StringsUpgradeable.toString(hsl.h1), ',', StringsUpgradeable.toString(hsl.s1), '%,', StringsUpgradeable.toString(hsl.l1), '%)'));
        //string memory hsl2 = string(abi.encodePacked('hsl(', StringsUpgradeable.toString(hsl.h2), ',', StringsUpgradeable.toString(hsl.s2), '%,', StringsUpgradeable.toString(hsl.l2), '%)'));

        return
            abi.encodePacked(
                "<svg viewBox='0 0 640 640' xmlns='http://www.w3.org/2000/svg'><style> @font-face { font-family: CourierFont; src: url('",
                font.font(),
                "') format('opentype'); }",
                svgFilterDefs(),
                ".base{filter:url(#",
                filter,
                ");fill:",
                fontColor,
                ';font-family:CourierFont;font-size: 16px;}</style><rect width="100%" height="100%" fill="',
                bgColor,
                '" /> '
            );
    }

    function _getColor(uint32 index) pure internal returns(Color memory color) {
        // AUTOGEN:START

        if (index == 0) {
            color.hexNum = "#000000";
            color.name = "Black";
        }
        
        if (index == 1) {
            color.hexNum = "#019157";
            color.name = "Emerald Isle";
        }
        
        if (index == 2) {
            color.hexNum = "#0022bb";
            color.name = "Underwater Falling";
        }
        
        if (index == 3) {
            color.hexNum = "#00aa11";
            color.name = "Hedge Garden";
        }
        
        if (index == 4) {
            color.hexNum = "#104071";
            color.name = "Ashenvale Nights";
        }
        
        if (index == 5) {
            color.hexNum = "#00cccc";
            color.name = "Tilla Kari Mosque";
        }
        
        if (index == 6) {
            color.hexNum = "#165b31";
            color.name = "Crusoe";
        }
        
        if (index == 7) {
            color.hexNum = "#0bf77d";
            color.name = "Minty Green";
        }
        
        if (index == 8) {
            color.hexNum = "#1974d2";
            color.name = "Bright Navy Blue";
        }
        
        if (index == 9) {
            color.hexNum = "#160435";
            color.name = "Quiet Abyss";
        }
        
        if (index == 10) {
            color.hexNum = "#1a9597";
            color.name = "Sea Fantasy";
        }
        
        if (index == 11) {
            color.hexNum = "#1c1cf0";
            color.name = "Bluebonnet";
        }
        
        if (index == 12) {
            color.hexNum = "#22bb55";
            color.name = "Vegan Mastermind";
        }
        
        if (index == 13) {
            color.hexNum = "#2243b6";
            color.name = "Denim";
        }
        
        if (index == 14) {
            color.hexNum = "#22dd00";
            color.name = "Green Blob";
        }
        
        if (index == 15) {
            color.hexNum = "#296767";
            color.name = "Dusky Alpine Blue";
        }
        
        if (index == 16) {
            color.hexNum = "#2afeb7";
            color.name = "Greenish Cyan";
        }
        
        if (index == 17) {
            color.hexNum = "#2a7e19";
            color.name = "Tree Green";
        }
        
        if (index == 18) {
            color.hexNum = "#32127a";
            color.name = "Persian Indigo";
        }
        
        if (index == 19) {
            color.hexNum = "#31a6d1";
            color.name = "Modal";
        }
        
        if (index == 20) {
            color.hexNum = "#313330";
            color.name = "Oil";
        }
        
        if (index == 21) {
            color.hexNum = "#33bb88";
            color.name = "Aztec Jade";
        }
        
        if (index == 22) {
            color.hexNum = "#2e58e8";
            color.name = "Veteran's Day Blue";
        }
        
        if (index == 23) {
            color.hexNum = "#3bde39";
            color.name = "Green Juice";
        }
        
        if (index == 24) {
            color.hexNum = "#3b719f";
            color.name = "Muted Blue";
        }
        
        if (index == 25) {
            color.hexNum = "#41fdfe";
            color.name = "Bright Cyan";
        }
        
        if (index == 26) {
            color.hexNum = "#47885e";
            color.name = "Onion Seedling";
        }
        
        if (index == 27) {
            color.hexNum = "#4428bc";
            color.name = "Blue Depression";
        }
        
        if (index == 28) {
            color.hexNum = "#44aa11";
            color.name = "Botanical Garden";
        }
        
        if (index == 29) {
            color.hexNum = "#4a3b6a";
            color.name = "Meteorite";
        }
        
        if (index == 30) {
            color.hexNum = "#48d1cc";
            color.name = "Medium Turquoise";
        }
        
        if (index == 31) {
            color.hexNum = "#4a5d23";
            color.name = "Obscure Olive";
        }
        
        if (index == 32) {
            color.hexNum = "#64e986";
            color.name = "Grotesque Green";
        }
        
        if (index == 33) {
            color.hexNum = "#5170d7";
            color.name = "Cornflower";
        }
        
        if (index == 34) {
            color.hexNum = "#5c0536";
            color.name = "Mulberry Wood";
        }
        
        if (index == 35) {
            color.hexNum = "#599c99";
            color.name = "Caulerpa Lentillifera";
        }
        
        if (index == 36) {
            color.hexNum = "#632de9";
            color.name = "Ying Guang Se Purple";
        }
        
        if (index == 37) {
            color.hexNum = "#66b348";
            color.name = "Sour Candy";
        }
        
        if (index == 38) {
            color.hexNum = "#5946b2";
            color.name = "Swiss Plum";
        }
        
        if (index == 39) {
            color.hexNum = "#66dd00";
            color.name = "Radioactive Lilypad";
        }
        
        if (index == 40) {
            color.hexNum = "#676662";
            color.name = "Wire Wool";
        }
        
        if (index == 41) {
            color.hexNum = "#66eebb";
            color.name = "Onsen";
        }
        
        if (index == 42) {
            color.hexNum = "#637e1d";
            color.name = "Birch Leaf Green";
        }
        
        if (index == 43) {
            color.hexNum = "#751973";
            color.name = "Pure Purple";
        }
        
        if (index == 44) {
            color.hexNum = "#73a3d0";
            color.name = "Overcast";
        }
        
        if (index == 45) {
            color.hexNum = "#73362a";
            color.name = "Brandy Brown";
        }
        
        if (index == 46) {
            color.hexNum = "#6fc288";
            color.name = "Clover Mist";
        }
        
        if (index == 47) {
            color.hexNum = "#7755ee";
            color.name = "Candy Grape Fizz";
        }
        
        if (index == 48) {
            color.hexNum = "#6fea3e";
            color.name = "Miyazaki Verdant";
        }
        
        if (index == 49) {
            color.hexNum = "#7b6fa0";
            color.name = "Queen's";
        }
        
        if (index == 50) {
            color.hexNum = "#7df9ff";
            color.name = "Electric Blue";
        }
        
        if (index == 51) {
            color.hexNum = "#868b53";
            color.name = "Special Ops";
        }
        
        if (index == 52) {
            color.hexNum = "#8822bb";
            color.name = "Pheromone Purple";
        }
        
        if (index == 53) {
            color.hexNum = "#8bac0f";
            color.name = "Gameboy Screen";
        }
        
        if (index == 54) {
            color.hexNum = "#8c4268";
            color.name = "Bonbon Red";
        }
        
        if (index == 55) {
            color.hexNum = "#8fcdc7";
            color.name = "Tropical Holiday";
        }
        
        if (index == 56) {
            color.hexNum = "#905e26";
            color.name = "Afghan Carpet";
        }
        
        if (index == 57) {
            color.hexNum = "#88ee77";
            color.name = "Herbivore";
        }
        
        if (index == 58) {
            color.hexNum = "#9370db";
            color.name = "Matt Purple";
        }
        
        if (index == 59) {
            color.hexNum = "#991133";
            color.name = "French Winery";
        }
        
        if (index == 60) {
            color.hexNum = "#989a8d";
            color.name = "Hunter's Hollow";
        }
        
        if (index == 61) {
            color.hexNum = "#a020f0";
            color.name = "Singapore Orchid";
        }
        
        if (index == 62) {
            color.hexNum = "#99bb44";
            color.name = "Paddy Field";
        }
        
        if (index == 63) {
            color.hexNum = "#9e43a2";
            color.name = "Medium Purple";
        }
        
        if (index == 64) {
            color.hexNum = "#a0d404";
            color.name = "Matcha Powder";
        }
        
        if (index == 65) {
            color.hexNum = "#a36658";
            color.name = "Sun Baked Earth";
        }
        
        if (index == 66) {
            color.hexNum = "#a3efb8";
            color.name = "Ultra Mint";
        }
        
        if (index == 67) {
            color.hexNum = "#ae8b0c";
            color.name = "Yellow Brown";
        }
        
        if (index == 68) {
            color.hexNum = "#aa1177";
            color.name = "Fabric of Love";
        }
        
        if (index == 69) {
            color.hexNum = "#ada2ce";
            color.name = "Puturple";
        }
        
        if (index == 70) {
            color.hexNum = "#b5332e";
            color.name = "Molten Lava";
        }
        
        if (index == 71) {
            color.hexNum = "#b6bf7f";
            color.name = "Dried Caspia";
        }
        
        if (index == 72) {
            color.hexNum = "#bb44dd";
            color.name = "Ultraviolet Onsible";
        }
        
        if (index == 73) {
            color.hexNum = "#c0db3a";
            color.name = "Lime Popsicle";
        }
        
        if (index == 74) {
            color.hexNum = "#bb7796";
            color.name = "Benifuji";
        }
        
        if (index == 75) {
            color.hexNum = "#c3fbf4";
            color.name = "Duck Egg Blue";
        }
        
        if (index == 76) {
            color.hexNum = "#c48f4b";
            color.name = "Light Copper";
        }
        
        if (index == 77) {
            color.hexNum = "#c920b0";
            color.name = "Mystifying Magenta";
        }
        
        if (index == 78) {
            color.hexNum = "#c9b003";
            color.name = "Brownish Yellow";
        }
        
        if (index == 79) {
            color.hexNum = "#ca3767";
            color.name = "Raspberry Jam";
        }
        
        if (index == 80) {
            color.hexNum = "#cccac1";
            color.name = "Dolphin Fin";
        }
        
        if (index == 81) {
            color.hexNum = "#d15915";
            color.name = "Tomato Bisque";
        }
        
        if (index == 82) {
            color.hexNum = "#c6ec7a";
            color.name = "Sharp Green";
        }
        
        if (index == 83) {
            color.hexNum = "#d374d5";
            color.name = "Jewel Caterpillar";
        }
        
        if (index == 84) {
            color.hexNum = "#d1062b";
            color.name = "Vermilion Scarlet";
        }
        
        if (index == 85) {
            color.hexNum = "#da9790";
            color.name = "Petite Orchid";
        }
        
        if (index == 86) {
            color.hexNum = "#d725de";
            color.name = "Demonic Purple";
        }
        
        if (index == 87) {
            color.hexNum = "#dcba42";
            color.name = "Credo";
        }
        
        if (index == 88) {
            color.hexNum = "#e84998";
            color.name = "Schiaparelli Pink";
        }
        
        if (index == 89) {
            color.hexNum = "#dcd0ff";
            color.name = "Pale Lavender";
        }
        
        if (index == 90) {
            color.hexNum = "#ea6759";
            color.name = "Emberglow";
        }
        
        if (index == 91) {
            color.hexNum = "#e3efb2";
            color.name = "Spring Kiss";
        }
        
        if (index == 92) {
            color.hexNum = "#ee8811";
            color.name = "Mimolette Orange";
        }
        
        if (index == 93) {
            color.hexNum = "#ee1166";
            color.name = "Borderline Pink";
        }
        
        if (index == 94) {
            color.hexNum = "#eca6ca";
            color.name = "Elastic Pink";
        }
        
        if (index == 95) {
            color.hexNum = "#ee3322";
            color.name = "Red Rampage";
        }
        
        if (index == 96) {
            color.hexNum = "#f7c380";
            color.name = "Elf Flesh";
        }
        
        if (index == 97) {
            color.hexNum = "#fe4eda";
            color.name = "Purple Pizzazz";
        }
        
        if (index == 98) {
            color.hexNum = "#fcdf39";
            color.name = "Fluffy Duckling";
        }
        
        if (index == 99) {
            color.hexNum = "#ff7799";
            color.name = "Aggressive Salmon";
        }
        
// AUTOGEN:END
    }
}
