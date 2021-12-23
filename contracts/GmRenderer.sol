// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Base64} from "base64-sol/base64.sol";

interface ICorruptionsFont {
    function font() external view returns (string memory);
}

contract GmRenderer {
    ICorruptionsFont private immutable font;

    constructor(address fontAddress) {
        font = ICorruptionsFont(fontAddress);
    }

    string[] private gmLines = [
        // svgSticks
        // 0
        "&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/_/_&#x000A0;&#x000A0;&#x000A0;_/_/_/&#x000A0;&#x000A0;&#x000A0;_/_/ ",
        // 1
        "&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/ ",
        // 2
        "_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/ ",
        // 3
        "&#x000A0;_/_/_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/",
        // skip //"&#x000A0;_/_/_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/",
        // skip //"&#x000A0;_/_/_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/",
        // 4
        "&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/",
        // 5
        "&#x000A0;_/_/",

        // svgRaw
        // 6
        "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;^-.&#x000A0;(``-')",
        // 7
        "&#x000A0;&#x000A0;.-^&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;\\(OO )_",
        // 8
        "&#x000A0;&#x000A0;,---(``-'),--./&#x000A0;&#x000A0;,-.)",
        // 9
        "&#x000A0;'&#x000A0;&#x000A0;.-(OO )|&#x000A0;&#x000A0;&#x000A0;\\/&#x000A0;&#x000A0;&#x000A0;|",
        // 10 
        "|&#x000A0;&#x000A0;|&#x000A0;.-,&#x000A0;\\|&#x000A0;&#x000A0;|\\/|&#x000A0;&#x000A0;|",
        // 11
        "|&#x000A0;&#x000A0;|&#x000A0;.-,_/|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|",
        // 12
        "|&#x000A0;&#x000A0;``--'&#x000A0;|&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;| ",
        // 13
        "&#x000A0;`------'&#x000A0;&#x000A0;`--'&#x000A0;&#x000A0;&#x000A0;`--'",

        // svg devil
        // 14
"&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;^-.&#x000A0;(``-')",
        // 15
"&#x000A0;&#x000A0;.-^&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;\\(OO )_",
        // 16
"&#x000A0;&#x000A0;,---(``-'),--./&#x000A0;&#x000A0;,-.)",
        // 17
"&#x000A0;'&#x000A0;&#x000A0;.-(OO )|&#x000A0;&#x000A0;&#x000A0;\\/&#x000A0;&#x000A0;&#x000A0;|",
        // 18
"|&#x000A0;&#x000A0;|&#x000A0;.-,&#x000A0;\\|&#x000A0;&#x000A0;|\\/|&#x000A0;&#x000A0;|",
        // 19
"|&#x000A0;&#x000A0;|&#x000A0;.-,_/|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|",
        // 20
"|&#x000A0;&#x000A0;``--'&#x000A0;|&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;| ",
        // 21
"&#x000A0;`------'&#x000A0;&#x000A0;`--'&#x000A0;&#x000A0;&#x000A0;`--'",

//  svg script
        // 22
        "gggg,gg&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;,ggg,,ggg,,ggg,",
        // 23
        "dP\"&#x000A0;\"Y8I&#x000A0;&#x000A0;&#x000A0;8\"&#x000A0;&#x000A0;'8P\"&#x000A0;\"8P\"&#x000A0;\"8,",
        // 24
        "i8'&#x000A0;&#x000A0;&#x000A0;8I&#x000A0;&#x000A0;I8&#x000A0;&#x000A0;&#x000A0;8I\"&#x000A0;\"8I&#x000A0;&#x000A0;8I ",
        // 25
        "d8,&#x000A0;&#x000A0;d8I&#x000A0;&#x000A0;dP&#x000A0;&#x000A0;&#x000A0;8I\"&#x000A0;\"8I&#x000A0;&#x000A0;Yb,",
        // 26
        "PY8888P'888P&#x000A0;&#x000A0;&#x000A0;8I\"&#x000A0;\"8I&#x000A0;&#x000A0;\"Y8 ",
        // 27
        ",d8I'",
        // 28
        ",dP'8I",
        // 29
        ',8\"&#x000A0;&#x000A0;8I',
        // 30
        'I8&#x000A0;&#x000A0;8I ',
        // 31
        '`8,&#x000A0;&#x000A0;8I ',
        // 32
        '"`Y8P\"',

        // svgAstrisk
        // 33
        "&#x000A0;&#x000A0;&#x000A0;&#x000A0;****&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;****&#x000A0;**** ",
        // 34
        "&#x000A0;&#x000A0;&#x000A0;*&#x000A0;&#x000A0;***&#x000A0;&#x000A0;*&#x000A0;&#x000A0;&#x000A0;***&#x000A0;****&#x000A0;***&#x000A0;&#x000A0;*",
        // 35
        "&#x000A0;&#x000A0;*&#x000A0;&#x000A0;&#x000A0;****&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;****&#x000A0;****",
        // 36
        "&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** ",
        // 37
        "&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** ",
        // 38
        // "&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** ",
        // 39
        // "&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** ",
        // 40
        // "&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** ",
        // 38
        "&#x000A0;&#x000A0;********&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;&#x000A0;***&#x000A0;&#x000A0;*** ",
        // 39
        "&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;***&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;&#x000A0;***&#x000A0;&#x000A0;*** ",
        // 40
        "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;*** ",
        // 41
        "&#x000A0;&#x000A0;&#x000A0;****&#x000A0;&#x000A0;&#x000A0;*** ",
        // 42
        "&#x000A0;*******&#x000A0;&#x000A0;** ",
        // 43
        "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**** "

//svgmoney
//44
        "&#x000A0;$$$$$$\\&#x000A0;&#x000A0;$$$$$$$$$$&#x000A0;&#x000A0;",
//44
        "$$&#x000A0;&#x000A0;__$$\\&#x000A0;$$&#x000A0;&#x000A0;_$$&#x000A0;&#x000A0;_$$\\ ",
//45
        "$$&#x000A0;/&#x000A0;&#x000A0;$$&#x000A0;|$$&#x000A0;/&#x000A0;$$&#x000A0;/&#x000A0;$$&#x000A0;|",
//47
        "$$&#x000A0;|&#x000A0;&#x000A0;$$&#x000A0;|$$&#x000A0;|&#x000A0;$$&#x000A0;|&#x000A0;$$&#x000A0;|",
//48
        "\\$$$$$$$&#x000A0;|$$&#x000A0;|&#x000A0;$$&#x000A0;|&#x000A0;$$&#x000A0;|",
//49
        "&#x000A0;\\____$$&#x000A0;|\\__|&#x000A0;\\__|&#x000A0;\\__|",
//50
        "$$\\&#x000A0;&#x000A0;&#x000A0;$$&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;",
//51
        "\\$$$$$$&#x000A0;&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;",
//52
        "&#x000A0;\\______/&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;",

//svgalligator

//53
        "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;::::::::&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;:::&#x000A0;&#x000A0;&#x000A0;::: ",
//54
        "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;:+:&#x000A0;&#x000A0;&#x000A0;:+:&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;:+:+:&#x000A0;:+:+: ",
//55
        "&#x000A0;&#x000A0;&#x000A0;&#x000A0;+:+&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+:+&#x000A0;+:+:+&#x000A0;+:+ ",
//56
        "&#x000A0;&#x000A0;&#x000A0;:#:&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+#+&#x000A0;&#x000A0;+:+&#x000A0;&#x000A0;+#+ ",
//57
        "&#x000A0;&#x000A0;+#+&#x000A0;&#x000A0;&#x000A0;+#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+#+&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+#+ ",
//58
        "&#x000A0;#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;#+# ",
//59
        "&#x000A0;########&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;###&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;### "
    ];


    /* solhint-disable quotes */

    string[6] private origins = [
        "MONEY",
        "ALLIGATOR",
        "ASTERISK",
        "SCRIPT",
        "STICKS",
        "DEVIL"
    ];


        uint16[] private asterisk = [
            33,34,35,36,37,37,37,38,39,40,41,42,43
        ];
        uint16[] private stickLine = [
            0, 1, 2, 3, 3, 3, 4, 5
        ];


    function svgRaw(uint256 tokenId, bytes32 seed) public view returns (bytes memory) {
        bytes3 backgroundColor = bytes3(seed);
        bytes3 fontColor = bytes3(seed << 24);
        uint32 random = uint32(bytes4(seed << 48));

        uint mod = random % 6;

        
        bytes memory inner;

        if (mod == 0) {
            inner = generateLinesFromRange(43,51);
        } else if (mod == 1) {
            inner = generateLinesFromIds(asterisk); 
        } else if (mod == 2) {
            inner = generateLinesFromRange(22, 32);
        } else if (mod == 3) {
            inner = generateLinesFromIds(stickLine);
        } else if (mod == 4) {
            inner = generateLinesFromRange(14, 21);
        } else {
           inner = generateLinesFromRange(52, 59); 
        }

        return abi.encodePacked(svgPreambleString(backgroundColor, fontColor), inner);
    }


    function svgPreambleString(bytes3 backgroundColor, bytes3 fontColor) private view returns (bytes memory) {
        return abi.encodePacked(
                "<svg viewBox='0 0 1024 1024' width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CorruptionsFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill:#",
                Strings.toHexString(uint256(uint24(fontColor))),
                ";font-family:CorruptionsFont;font-size: 10px;} ",
                "</style>",
                '<g transform="scale(4 4)">',
                '<rect width="195" height="145" fill="#',
                Strings.toHexString(uint256(uint24(backgroundColor))),
                '" /> '
        );
    }

    function generateLinesFromIds(uint16[] memory ids) internal view returns (bytes memory) {
        bytes memory out;
        for (uint256 i = 0; i < ids.length; i++) {
            out = abi.encodePacked(out, "<text x='20' y='", Strings.toString(40 + i * 10), "' class='base'>", gmLines[ids[i]], "</text>");
        }
        return abi.encodePacked(out, "</g></svg>");
    }
    function generateLinesFromRange(uint16 start, uint16 end) internal view returns (bytes memory) {
        bytes memory out;
        for (uint256 i = start; i < end; i++) {
            out = abi.encodePacked(out, "<text x='20' y='", Strings.toString(40 + i * 10), "' class='base'>", gmLines[i], "</text>");
        }
        return abi.encodePacked(out, "</g></svg>");
    }

function svgBase64Data(
        bytes memory data
    ) public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "data:image/svg+xml;base64,",
                    Base64.encode(data)
                )
            );
    }

    function tokenURI(uint256 tokenId, bytes32 seed) public view returns (string memory) {
        string memory json;
        bytes memory tokenData = svgRaw(tokenId, seed);
        json = Base64.encode(bytes(string(abi.encodePacked('{"name": "0x', Strings.toHexString(tokenId), '", "description": "', "no description", '", "image": "', svgBase64Data(tokenData), '"}'))));
        return string(abi.encodePacked("data:application/json;base64,", json));
    }

}