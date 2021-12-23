// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import {Base64} from "base64-sol/base64.sol";
import "./DynamicBuffer.sol";
import "./EssentialStrings.sol";
import {BytesLib} from "solidity-bytes-utils/contracts/BytesLib.sol";

interface ICorruptionsFont {
    function font() external view returns (string memory);
}

contract GmRenderer is Ownable {
    using DynamicBuffer for bytes;
    using EssentialStrings for uint256;
    using EssentialStrings for uint24;
    using EssentialStrings for uint8;

    ICorruptionsFont private font;

    constructor(address fontAddress) {
        font = ICorruptionsFont(fontAddress);
    }

    /* solhint-disable quotes */

    function svgBase64Data(uint256 tokenId, bytes32 seed) public view returns (string memory) {
        return
        string(
            abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(svgRaw(tokenId, seed)))
        );
    }

    function uint8tohexchar(uint8 i) public pure returns (uint8) {
        return (i > 9) ?
        (i + 87) : // ascii a-f
        (i + 48); // ascii 0-9
    }

    function uint24tohexstr(uint24 i) public pure returns (string memory) {
        bytes memory o = new bytes(6);
        uint24 mask = 0x00000f;
        o[5] = bytes1(uint8tohexchar(uint8(i & mask)));
        i = i >> 4;
        o[4] = bytes1(uint8tohexchar(uint8(i & mask)));
        i = i >> 4;
        o[3] = bytes1(uint8tohexchar(uint8(i & mask)));
        i = i >> 4;
        o[2] = bytes1(uint8tohexchar(uint8(i & mask)));
        i = i >> 4;
        o[1] = bytes1(uint8tohexchar(uint8(i & mask)));
        i = i >> 4;
        o[0] = bytes1(uint8tohexchar(uint8(i & mask)));
        return string(o);
    }

    function bytes3tohexstr(bytes3 i) public pure returns (string memory) {
        uint24 n = uint24(i);
        return uint24tohexstr(n);
    }

    function svgRaw(uint256 tokenId, bytes32 seed) public view returns (bytes memory) {
        bytes3 backgroundColor = bytes3(seed);
        bytes3 fontColor = bytes3(seed << 24);
        uint32 random = uint32(bytes4(seed << 48));

        uint mod = random % 6;

        string[6] memory origins = [
            "MONEY",
            "ALLIGATOR",
            "ASTERISK",
            "SCRIPT",
            "STICKS",
            "DEVIL"
        ];

        if (mod == 0) {
            return svgMoney(backgroundColor, fontColor);
        } else if (mod == 1) {
            return svgAsterisk(backgroundColor, fontColor);
        } else if (mod == 2) {
            return svgScript(backgroundColor, fontColor);
        } else if (mod == 3) {
            return svgSticks(backgroundColor, fontColor);
        } else if (mod == 4) {
            return svgDevil(backgroundColor, fontColor);
        } else {
            return svgAlligator(backgroundColor, fontColor);
        }
    }

    function svgDevil(bytes3 backgroundColor, bytes3 fontColor) private view returns (bytes memory) {
        bytes memory devil = DynamicBuffer.allocate(2**16); // 64KB - reduce?
        devil.appendSafe(
            abi.encodePacked(
                "<svg viewBox='0 0 1024 1024' width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CorruptionsFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill:#",
                bytes3tohexstr(fontColor),
                ";font-family:CorruptionsFont;font-size: 10px;} ",
                "</style>",
                '<g transform="scale(4 4)">',
                '<rect width="175" height="120" fill="#',
                bytes3tohexstr(backgroundColor),
                '" /> '
            )
        );

        // TODO: fix <> ^ thingy
        devil.appendSafe(abi.encodePacked("<text x='25' y='25' class='base'>&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;^-.&#x000A0;(``-')</text>"));
        devil.appendSafe(abi.encodePacked("<text x='25' y='35' class='base'>&#x000A0;&#x000A0;.-^&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;\\(OO )_</text>"));
        devil.appendSafe(abi.encodePacked("<text x='25' y='45' class='base'>&#x000A0;&#x000A0;,---(``-'),--./&#x000A0;&#x000A0;,-.)</text>"));
        devil.appendSafe(abi.encodePacked("<text x='25' y='55' class='base'>&#x000A0;'&#x000A0;&#x000A0;.-(OO )|&#x000A0;&#x000A0;&#x000A0;\\/&#x000A0;&#x000A0;&#x000A0;|</text>"));
        devil.appendSafe(abi.encodePacked("<text x='25' y='65' class='base'>|&#x000A0;&#x000A0;|&#x000A0;.-,&#x000A0;\\|&#x000A0;&#x000A0;|\\/|&#x000A0;&#x000A0;|</text>"));
        devil.appendSafe(abi.encodePacked("<text x='25' y='75' class='base'>|&#x000A0;&#x000A0;|&#x000A0;.-,_/|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|</text>"));
        devil.appendSafe(abi.encodePacked("<text x='25' y='85' class='base'>|&#x000A0;&#x000A0;``--'&#x000A0;|&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;| </text>"));
        devil.appendSafe(abi.encodePacked("<text x='25' y='95' class='base'>&#x000A0;`------'&#x000A0;&#x000A0;`--'&#x000A0;&#x000A0;&#x000A0;`--'</text>"));

        devil.appendSafe("</g></svg>");

        return devil;
    }

    function svgSticks(bytes3 backgroundColor, bytes3 fontColor) private view returns (bytes memory) {
        bytes memory sticks = DynamicBuffer.allocate(2**16); // 64KB - reduce?
        sticks.appendSafe(
            abi.encodePacked(
                "<svg viewBox='0 0 1024 1024' width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CorruptionsFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill:#",
                bytes3tohexstr(fontColor),
                ";font-family:CorruptionsFont;font-size: 10px;} ",
                "</style>",
                '<g transform="scale(4 4)">',
                '<rect width="195" height="145" fill="#',
                bytes3tohexstr(backgroundColor),
                '" /> '
            )
        );

        sticks.appendSafe(abi.encodePacked("<text x='20' y='40' class='base'>&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/_/_&#x000A0;&#x000A0;&#x000A0;_/_/_/&#x000A0;&#x000A0;&#x000A0;_/_/ </text>"));
        sticks.appendSafe(abi.encodePacked("<text x='20' y='50' class='base'>&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/ </text>"));
        sticks.appendSafe(abi.encodePacked("<text x='20' y='60' class='base'>_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/ </text>"));
        sticks.appendSafe(abi.encodePacked("<text x='20' y='70' class='base'>&#x000A0;_/_/_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/</text>"));
        sticks.appendSafe(abi.encodePacked("<text x='20' y='80' class='base'>&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/</text>"));
        sticks.appendSafe(abi.encodePacked("<text x='20' y='90' class='base'>&#x000A0;_/_/</text>"));

        sticks.appendSafe("</g></svg>");

        return sticks;
    }

    function svgScript(bytes3 backgroundColor, bytes3 fontColor) private view returns (bytes memory) {
        bytes memory script = DynamicBuffer.allocate(2**16); // 64KB - reduce?
        script.appendSafe(
            abi.encodePacked(
                "<svg viewBox='0 0 1024 1024' width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CorruptionsFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill:#",
                bytes3tohexstr(fontColor),
                ";font-family:CorruptionsFont;font-size: 10px;} ",
                "</style>",
                '<g transform="scale(4 4)">',
                '<rect width="195" height="145" fill="#',
                bytes3tohexstr(backgroundColor),
                '" /> '
            )
        );

        script.appendSafe(abi.encodePacked("<text x='20' y='25' class='base'>gggg,gg&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;,ggg,,ggg,,ggg,</text>"));
        script.appendSafe(abi.encodePacked("<text x='20' y='35' class='base'>dP\"&#x000A0;\"Y8I&#x000A0;&#x000A0;&#x000A0;8\"&#x000A0;&#x000A0;'8P\"&#x000A0;\"8P\"&#x000A0;\"8,</text>"));
        script.appendSafe(abi.encodePacked("<text x='20' y='45' class='base'>i8'&#x000A0;&#x000A0;&#x000A0;8I&#x000A0;&#x000A0;I8&#x000A0;&#x000A0;&#x000A0;8I\"&#x000A0;\"8I&#x000A0;&#x000A0;8I </text>"));
        script.appendSafe(abi.encodePacked("<text x='20' y='55' class='base'>d8,&#x000A0;&#x000A0;d8I&#x000A0;&#x000A0;dP&#x000A0;&#x000A0;&#x000A0;8I\"&#x000A0;\"8I&#x000A0;&#x000A0;Yb,</text>"));
        script.appendSafe(abi.encodePacked("<text x='20' y='65' class='base'>PY8888P'888P&#x000A0;&#x000A0;&#x000A0;8I\"&#x000A0;\"8I&#x000A0;&#x000A0;\"Y8 </text>"));
        script.appendSafe(abi.encodePacked("<text x='20' y='75' class='base'>,d8I'</text>"));
        script.appendSafe(abi.encodePacked("<text x='20' y='85' class='base'>,dP'8I</text>"));
        script.appendSafe(abi.encodePacked("<text x='20' y='95' class='base'>,8\"&#x000A0;&#x000A0;8I</text>"));
        script.appendSafe(abi.encodePacked("<text x='20' y='105' class='base'>I8&#x000A0;&#x000A0;8I </text>"));
        script.appendSafe(abi.encodePacked("<text x='20' y='115' class='base'>`8,&#x000A0;&#x000A0;8I </text>"));
        script.appendSafe(abi.encodePacked("<text x='20' y='125' class='base'>`Y8P\"</text>"));

        script.appendSafe("</g></svg>");

        return script;
    }

    function svgAsterisk(bytes3 backgroundColor, bytes3 fontColor) private view returns (bytes memory) {
        bytes memory asterisk = DynamicBuffer.allocate(2**16); // 64KB - reduce?
        asterisk.appendSafe(
            abi.encodePacked(
                "<svg viewBox='0 0 1024 1024' width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CorruptionsFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill:#",
                bytes3tohexstr(fontColor),
                ";font-family:CorruptionsFont;font-size: 10px;} ",
                "</style>",
                '<g transform="scale(4 4)">',
                '<rect width="210" height="170" fill="#',
                bytes3tohexstr(backgroundColor),
                '" /> '
            )
        );

        asterisk.appendSafe(abi.encodePacked("<text x='20' y='25' class='base'>&#x000A0;&#x000A0;&#x000A0;&#x000A0;****&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;****&#x000A0;**** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='35' class='base'>&#x000A0;&#x000A0;&#x000A0;*&#x000A0;&#x000A0;***&#x000A0;&#x000A0;*&#x000A0;&#x000A0;&#x000A0;***&#x000A0;****&#x000A0;***&#x000A0;&#x000A0;*</text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='45' class='base'>&#x000A0;&#x000A0;*&#x000A0;&#x000A0;&#x000A0;****&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;****&#x000A0;****</text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='55' class='base'>&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='65' class='base'>&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='75' class='base'>&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='85' class='base'>&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='95' class='base'>&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='105' class='base'>&#x000A0;&#x000A0;********&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;&#x000A0;***&#x000A0;&#x000A0;*** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='115' class='base'>&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;***&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;&#x000A0;***&#x000A0;&#x000A0;*** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='125' class='base'>&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;*** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='135' class='base'>&#x000A0;&#x000A0;&#x000A0;****&#x000A0;&#x000A0;&#x000A0;*** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='145' class='base'>&#x000A0;*******&#x000A0;&#x000A0;** </text>"));
        asterisk.appendSafe(abi.encodePacked("<text x='20' y='155' class='base'>*&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**** </text>"));

        asterisk.appendSafe("</g></svg>");

        return asterisk;
    }

    function svgMoney(bytes3 backgroundColor, bytes3 fontColor) private view returns (bytes memory) {
        bytes memory money = DynamicBuffer.allocate(2**16); // 64KB - reduce?
        money.appendSafe(
            abi.encodePacked(
                "<svg viewBox='0 0 1024 1024' width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CorruptionsFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill:#",
                bytes3tohexstr(fontColor),
                ";font-family:CorruptionsFont;font-size: 10px;} ",
                "</style>",
                '<g transform="scale(4 4)">',
                '<rect width="215" height="150" fill="#',
                bytes3tohexstr(backgroundColor),
                '" /> '
            )
        );

        money.appendSafe(abi.encodePacked("<text x='35' y='40' class='base'>&#x000A0;$$$$$$\\&#x000A0;&#x000A0;$$$$$$$$$$&#x000A0;&#x000A0;</text>"));
        money.appendSafe(abi.encodePacked("<text x='35' y='50' class='base'>$$&#x000A0;&#x000A0;__$$\\&#x000A0;$$&#x000A0;&#x000A0;_$$&#x000A0;&#x000A0;_$$\\ </text>"));
        money.appendSafe(abi.encodePacked("<text x='35' y='60' class='base'>$$&#x000A0;/&#x000A0;&#x000A0;$$&#x000A0;|$$&#x000A0;/&#x000A0;$$&#x000A0;/&#x000A0;$$&#x000A0;|</text>"));
        money.appendSafe(abi.encodePacked("<text x='35' y='70' class='base'>$$&#x000A0;|&#x000A0;&#x000A0;$$&#x000A0;|$$&#x000A0;|&#x000A0;$$&#x000A0;|&#x000A0;$$&#x000A0;|</text>"));
        money.appendSafe(abi.encodePacked("<text x='35' y='80' class='base'>\\$$$$$$$&#x000A0;|$$&#x000A0;|&#x000A0;$$&#x000A0;|&#x000A0;$$&#x000A0;|</text>"));
        money.appendSafe(abi.encodePacked("<text x='35' y='90' class='base'>&#x000A0;\\____$$&#x000A0;|\\__|&#x000A0;\\__|&#x000A0;\\__|</text>"));
        money.appendSafe(abi.encodePacked("<text x='35' y='100' class='base'>$$\\&#x000A0;&#x000A0;&#x000A0;$$&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;</text>"));
        money.appendSafe(abi.encodePacked("<text x='35' y='110' class='base'>\\$$$$$$&#x000A0;&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;</text>"));
        money.appendSafe(abi.encodePacked("<text x='35' y='120' class='base'>&#x000A0;\\______/&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;</text>"));

        money.appendSafe("</g></svg>");

        return money;
    }

    function svgAlligator(bytes3 backgroundColor, bytes3 fontColor) private view returns (bytes memory) {
        bytes memory alligator = DynamicBuffer.allocate(2**16); // 64KB - reduce?
        alligator.appendSafe(
            abi.encodePacked(
                "<svg viewBox='0 0 1024 1024' width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CorruptionsFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill:#",
                bytes3tohexstr(fontColor),
                ";font-family:CorruptionsFont;font-size: 10px;} ",
                "</style>",
                '<g transform="scale(4 4)">',
                '<rect width="400" height="135" fill="#',
                bytes3tohexstr(backgroundColor),
                '" /> '
            )
        );

        alligator.appendSafe(abi.encodePacked("<text x='20' y='40' class='base'>&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;::::::::&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;:::&#x000A0;&#x000A0;&#x000A0;::: </text>"));
        alligator.appendSafe(abi.encodePacked("<text x='20' y='50' class='base'>&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;:+:&#x000A0;&#x000A0;&#x000A0;:+:&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;:+:+:&#x000A0;:+:+: </text> "));
        alligator.appendSafe(abi.encodePacked("<text x='20' y='60' class='base'>&#x000A0;&#x000A0;&#x000A0;&#x000A0;+:+&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+:+&#x000A0;+:+:+&#x000A0;+:+ </text>"));
        alligator.appendSafe(abi.encodePacked("<text x='20' y='70' class='base'>&#x000A0;&#x000A0;&#x000A0;:#:&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+#+&#x000A0;&#x000A0;+:+&#x000A0;&#x000A0;+#+ </text>"));
        alligator.appendSafe(abi.encodePacked("<text x='20' y='80' class='base'>&#x000A0;&#x000A0;+#+&#x000A0;&#x000A0;&#x000A0;+#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+#+&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+#+ </text>"));
        alligator.appendSafe(abi.encodePacked("<text x='20' y='90' class='base'>&#x000A0;#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;#+# </text>"));
        alligator.appendSafe(abi.encodePacked("<text x='20' y='100' class='base'>&#x000A0;########&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;###&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;### </text>"));

        alligator.appendSafe("</g></svg>");


        return alligator;

    }

    function tokenURI(uint256 tokenId, bytes32 seed) public view returns (string memory) {
        string memory json;
        json = Base64.encode(bytes(string(abi.encodePacked('{"name": "0x', EssentialStrings.toHexString(tokenId), '", "description": "', "no description", '", "image": "', svgBase64Data(tokenId, seed), '"}'))));
        return string(abi.encodePacked("data:application/json;base64,", json));
    }
}