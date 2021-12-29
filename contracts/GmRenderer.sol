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

    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";

    struct Hsl {
        uint32 h1;
        uint32 s1;
        uint32 l1;
        uint32 h2;
        uint32 s2;
        uint32 l2;
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

    function svgRaw(uint256 tokenId, bytes32 seed)
        external
        view
        returns (bytes memory, bytes memory)
    {

        uint32 lightness1 = (uint32(bytes4(seed << 128))) % 100;
        uint32 style = uint32(bytes4(seed << 160)) % 69;

        bytes memory inner;
        bytes memory name;
        if (style < 50) {
            (name, inner) = decompress(gmData1.getSvg(style));
        } else {
            (name, inner) = decompress(gmData2.getSvg(style));
        }

        Hsl memory hsl = Hsl(uint32(bytes4(seed)) % 360, (uint32(bytes4(seed << 64)) % 89) + 22, lightness1, uint32(bytes4(seed << 32)) % 360, (uint32(bytes4(seed << 96)) % 98) + 22, 100 -lightness1);

        return (
            abi.encodePacked(
                svgPreambleString(hsl),
                inner,
                "</svg>"
            ),
            name
        );
    }

    function toHtmlHexString(uint256 value)
        internal
        pure
        returns (string memory)
    {
        bytes memory buffer = new bytes(7);
        buffer[0] = "#";
        for (uint256 i = 6; i > 0; --i) {
            buffer[i] = _HEX_SYMBOLS[value & 0xf];
            value >>= 4;
        }

        require(value == 0, "Strings: hex length insufficient");
        return string(buffer);
    }

    function svgPreambleString(Hsl memory hsl)
        private
        view
        returns (bytes memory)
    {


        return
            abi.encodePacked(
                "<svg viewBox='0 0 640 640' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CourierFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill: hsl(",
                StringsUpgradeable.toString(hsl.h1),
                ",",
                StringsUpgradeable.toString(hsl.s1),
                "%,",
                StringsUpgradeable.toString(hsl.l1),
                ")",
                ";font-family:CourierFont;font-size: 16px;} ",
                "</style>",
                '<rect width="100%" height="100%" fill=hsl(',
                StringsUpgradeable.toString(hsl.h2),
                ",",
                StringsUpgradeable.toString(hsl.s2),
                "%,",
                StringsUpgradeable.toString(hsl.l2),
                ")",
                '" /> '
            );
    }
}
