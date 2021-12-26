// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Base64} from "base64-sol/base64.sol";

interface ICorruptionsFont {
    function font() external view returns (string memory);
}

contract GmRenderer {
    ICorruptionsFont private immutable font;
    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";

    constructor(address fontAddress) {
        font = ICorruptionsFont(fontAddress);
    }

    function getLine(uint16 line) internal pure returns (bytes memory) {
        if (line == 0) {
            return
                "&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/_/_&#x000A0;&#x000A0;&#x000A0;_/_/_/&#x000A0;&#x000A0;&#x000A0;_/_/ ";
        }
        if (line == 1) {
            return
                "&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/ ";
        }
        if (line == 2) {
            return "";
        }
        if (line == 3) {
            return
                "&#x000A0;_/_/_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/";
            // skip //"&#x000A0;_/_/_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/";
            // skip //"&#x000A0;_/_/_/&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/";
        }
        if (line == 4) {
            return "&#x000A0;&#x000A0;&#x000A0;&#x000A0;_/";
        }
        if (line == 5) {
            return "&#x000A0;_/_/";

            // svgRaw
        }
        if (line == 6) {
            return
                "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;^-.&#x000A0;(``-')";
        }
        if (line == 7) {
            return
                "&#x000A0;&#x000A0;.-^&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;\\(OO )_";
        }
        if (line == 8) {
            return "&#x000A0;&#x000A0;,---(``-'),--./&#x000A0;&#x000A0;,-.)";
        }
        if (line == 9) {
            return
                "&#x000A0;'&#x000A0;&#x000A0;.-(OO )|&#x000A0;&#x000A0;&#x000A0;\\/&#x000A0;&#x000A0;&#x000A0;|";
        }
        if (line == 10) {
            return
                "|&#x000A0;&#x000A0;|&#x000A0;.-,&#x000A0;\\|&#x000A0;&#x000A0;|\\/|&#x000A0;&#x000A0;|";
        }
        if (line == 11) {
            return
                "|&#x000A0;&#x000A0;|&#x000A0;.-,_/|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|";
        }
        if (line == 12) {
            return
                "|&#x000A0;&#x000A0;``--'&#x000A0;|&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;| ";
        }
        if (line == 13) {
            return
                "&#x000A0;`------'&#x000A0;&#x000A0;`--'&#x000A0;&#x000A0;&#x000A0;`--'";

            // svg devil
        }
        if (line == 14) {
            return
                "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;^-.&#x000A0;(``-')";
        }
        if (line == 15) {
            return
                "&#x000A0;&#x000A0;.-^&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;\\(OO )_";
        }
        if (line == 16) {
            return "&#x000A0;&#x000A0;,---(``-'),--./&#x000A0;&#x000A0;,-.)";
        }
        if (line == 17) {
            return
                "&#x000A0;'&#x000A0;&#x000A0;.-(OO )|&#x000A0;&#x000A0;&#x000A0;\\/&#x000A0;&#x000A0;&#x000A0;|";
        }
        if (line == 18) {
            return
                "|&#x000A0;&#x000A0;|&#x000A0;.-,&#x000A0;\\|&#x000A0;&#x000A0;|\\/|&#x000A0;&#x000A0;|";
        }
        if (line == 19) {
            return
                "|&#x000A0;&#x000A0;|&#x000A0;.-,_/|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|";
        }
        if (line == 20) {
            return
                "|&#x000A0;&#x000A0;``--'&#x000A0;|&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;| ";
        }
        if (line == 21) {
            return
                "&#x000A0;`------'&#x000A0;&#x000A0;`--'&#x000A0;&#x000A0;&#x000A0;`--'";

            //  svg script
        }
        if (line == 22) {
            return
                "gggg,gg&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;,ggg,,ggg,,ggg,";
        }
        if (line == 23) {
            return
                'dP"&#x000A0;"Y8I&#x000A0;&#x000A0;&#x000A0;8"&#x000A0;&#x000A0;\'8P"&#x000A0;"8P"&#x000A0;"8,';
        }
        if (line == 24) {
            return
                'i8\'&#x000A0;&#x000A0;&#x000A0;8I&#x000A0;&#x000A0;I8&#x000A0;&#x000A0;&#x000A0;8I"&#x000A0;"8I&#x000A0;&#x000A0;8I ';
        }
        if (line == 25) {
            return
                'd8,&#x000A0;&#x000A0;d8I&#x000A0;&#x000A0;dP&#x000A0;&#x000A0;&#x000A0;8I"&#x000A0;"8I&#x000A0;&#x000A0;Yb,';
        }
        if (line == 26) {
            return
                'PY8888P\'888P&#x000A0;&#x000A0;&#x000A0;8I"&#x000A0;"8I&#x000A0;&#x000A0;"Y8 ';
        }
        if (line == 27) {
            return ",d8I'";
        }
        if (line == 28) {
            return ",dP'8I";
        }
        if (line == 29) {
            return ',8"&#x000A0;&#x000A0;8I';
        }
        if (line == 30) {
            return "I8&#x000A0;&#x000A0;8I ";
        }
        if (line == 31) {
            return "`8,&#x000A0;&#x000A0;8I ";
        }
        if (line == 32) {
            return '"`Y8P"';

            // svgAstrisk
        }
        if (line == 33) {
            return
                "&#x000A0;&#x000A0;&#x000A0;&#x000A0;****&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;****&#x000A0;**** ";
        }
        if (line == 34) {
            return
                "&#x000A0;&#x000A0;&#x000A0;*&#x000A0;&#x000A0;***&#x000A0;&#x000A0;*&#x000A0;&#x000A0;&#x000A0;***&#x000A0;****&#x000A0;***&#x000A0;&#x000A0;*";
        }
        if (line == 35) {
            return
                "&#x000A0;&#x000A0;*&#x000A0;&#x000A0;&#x000A0;****&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;****&#x000A0;****";
        }
        if (line == 36) {
            return
                "&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** ";
        }
        if (line == 37) {
            return
                "&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** ";
            // "&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** ";
            // "&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** ";
            // "&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;**&#x000A0;&#x000A0;&#x000A0;** ";
        }
        if (line == 38) {
            return
                "&#x000A0;&#x000A0;********&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;&#x000A0;***&#x000A0;&#x000A0;*** ";
        }
        if (line == 39) {
            return
                "&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;***&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;***&#x000A0;&#x000A0;***&#x000A0;&#x000A0;*** ";
        }
        if (line == 40) {
            return
                "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;*** ";
        }
        if (line == 41) {
            return
                "&#x000A0;&#x000A0;&#x000A0;****&#x000A0;&#x000A0;&#x000A0;*** ";
        }
        if (line == 42) {
            return "&#x000A0;*******&#x000A0;&#x000A0;** ";
        }
        if (line == 43) {
            return "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;**** ";

            //svgmoney
        }
        if (line == 44) {
            return
                "&#x000A0;$$$$$$\\&#x000A0;&#x000A0;$$$$$$$$$$&#x000A0;&#x000A0;";
        }
        if (line == 45) {
            return
                "$$&#x000A0;&#x000A0;__$$\\&#x000A0;$$&#x000A0;&#x000A0;_$$&#x000A0;&#x000A0;_$$\\ ";
        }
        if (line == 46) {
            return
                "$$&#x000A0;/&#x000A0;&#x000A0;$$&#x000A0;|$$&#x000A0;/&#x000A0;$$&#x000A0;/&#x000A0;$$&#x000A0;|";
        }
        if (line == 47) {
            return
                "$$&#x000A0;|&#x000A0;&#x000A0;$$&#x000A0;|$$&#x000A0;|&#x000A0;$$&#x000A0;|&#x000A0;$$&#x000A0;|";
        }
        if (line == 48) {
            return
                "\\$$$$$$$&#x000A0;|$$&#x000A0;|&#x000A0;$$&#x000A0;|&#x000A0;$$&#x000A0;|";
        }
        if (line == 49) {
            return
                "&#x000A0;\\____$$&#x000A0;|\\__|&#x000A0;\\__|&#x000A0;\\__|";
        }
        if (line == 50) {
            return
                "$$\\&#x000A0;&#x000A0;&#x000A0;$$&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;";
        }
        if (line == 51) {
            return
                "\\$$$$$$&#x000A0;&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;";
        }
        if (line == 52) {
            return
                "&#x000A0;\\______/&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;";

            //svgalligator
        }
        if (line == 53) {
            return
                "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;::::::::&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;:::&#x000A0;&#x000A0;&#x000A0;::: ";
        }
        if (line == 54) {
            return
                "&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;:+:&#x000A0;&#x000A0;&#x000A0;:+:&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;:+:+:&#x000A0;:+:+: ";
        }
        if (line == 55) {
            return
                "&#x000A0;&#x000A0;&#x000A0;&#x000A0;+:+&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+:+&#x000A0;+:+:+&#x000A0;+:+ ";
        }
        if (line == 56) {
            return
                "&#x000A0;&#x000A0;&#x000A0;:#:&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+#+&#x000A0;&#x000A0;+:+&#x000A0;&#x000A0;+#+ ";
        }
        if (line == 57) {
            return
                "&#x000A0;&#x000A0;+#+&#x000A0;&#x000A0;&#x000A0;+#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+#+&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;+#+ ";
        }
        if (line == 58) {
            return
                "&#x000A0;#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;#+#&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;#+# ";
        }
        if (line == 59) {
            return
                "&#x000A0;########&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;###&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;### ";
        }
        if (line == 60) {
            return
                "&#x000A0;.------..------.";
        }
        if (line == 61) {
            return
                "&#x000A0;|G.--.&#x000A0;||M.--.&#x000A0;|";
        }
        if (line == 62) {
            return
                "&#x000A0;|&#x000A0;:/\\:&#x000A0;||&#x000A0;:\\/:&#x000A0;|";
        }
        if (line == 63) {
            return
                "&#x000A0;|&#x000A0;:\\/:&#x000A0;||&#x000A0;:\\/:&#x000A0;|";
        }
        if (line == 64) {
            return
                "&#x000A0;|&#x000A0;&#x000A0;--&#x000A0;G||&#x000A0;&#x000A0;--&#x000A0;M|";
        }
        if (line == 65) {
            return
                "&#x000A0;&#x000A0;------&#x000A0;&#x000A0;------";
        }
        if (line == 66) {
            return
                "&#x000A0;_______&#x000A0;_______";
        }
        if (line == 67) {
            return
                "|\\&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;/|\\&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;/|";
        }
        if (line == 68) {
            return
                "|&#x000A0;+---+&#x000A0;|&#x000A0;+---+&#x000A0;|";
        }
        if (line == 69) {
            return
                "|&#x000A0;|&#x000A0;g&#x000A0;|&#x000A0;|&#x000A0;|&#x000A0;m&#x000A0;|&#x000A0;|";
        }
        if (line == 70) {
            return
                "|&#x000A0;|&#x000A0;&#x000A0;&#x000A0;|&#x000A0;|&#x000A0;|&#x000A0;&#x000A0;&#x000A0;|&#x000A0;|";
        }
        if (line == 71) {
            return
                "|&#x000A0;+---+&#x000A0;|&#x000A0;+---+&#x000A0;|";
        }
        if (line == 72) {
            return
                "|/_____\\|/_____\\|";
        }
        if (line == 73) {
            return "&#x000A0;.----------------.  &#x000A0;.----------------.";
        }
        if (line == 74) {
            return "|&#x000A0;.--------------.&#x000A0;|| .--------------.&#x000A0;|";
        }
        if (line == 75) {
            return "|&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;______&#x000A0;&#x000A0;&#x000A0;&#x000A0;|&#x000A0;||&#x000A0;|&#x000A0;____&#x000A0;&#x000A0;&#x000A0;&#x000A0;____&#x000A0;|&#x000A0;| ";
        }
        if (line == 76) {
            return "|&#x000A0;|&#x000A0;&#x000A0;.:&#x000A0;___&#x000A0;&#x000A0;|&#x000A0;&#x000A0;&#x000A0;|&#x000A0;||&#x000A0;||_&#x000A0;&#x000A0;&#x000A0;\\&#x000A0;&#x000A0;/&#x000A0;&#x000A0;&#x000A0;_||&#x000A0;| ";
        }
        if (line == 77) {
            return "|&#x000A0;|&#x000A0;/&#x000A0;.:&#x000A0;&#x000A0;&#x000A0;\\_|&#x000A0;&#x000A0;&#x000A0;|&#x000A0;||&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;&#x000A0;&#x000A0;\\/&#x000A0;&#x000A0;&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;| ";
        }
        if (line == 78) {
            return "|&#x000A0;|&#x000A0;|&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;____&#x000A0;&#x000A0;|&#x000A0;||&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;|\\&#x000A0;&#x000A0;/|&#x000A0;|&#x000A0;&#x000A0;|&#x000A0;|";
        }
        if (line == 79) {
            return "|&#x000A0;|&#x000A0;\\&#x000A0;:.___,]&#x000A0;&#x000A0;_|&#x000A0;|&#x000A0;||&#x000A0;|&#x000A0;_|&#x000A0;|_\\/_|&#x000A0;|_&#x000A0;|&#x000A0;| ";
        }
        if (line == 80) {
            return "|&#x000A0;|&#x000A0;&#x000A0;:._____.:&#x000A0;&#x000A0;&#x000A0;|&#x000A0;||&#x000A0;||_____||_____||&#x000A0;| ";
        }
        if (line == 81) {
            return "|&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;|&#x000A0;||&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;|&#x000A0;| ";
        }
        if (line == 82) {
            return "|&#x000A0;&#x000A0;--------------&#x000A0;&#x000A0;||&#x000A0; -------------&#x000A0;&#x000A0;&#x000A0;| ";
        }
        if (line == 83) {
            return "&#x000A0;------------------&#x000A0;&#x000A0;------------------&#x000A0;";
        }
        if (line == 84) {
            return "";
        }
        if (line == 85) {
            return "";
        }

    }

    /* solhint-disable quotes */

    string[9] private origins = [
        "MONEY",
        "ALLIGATOR",
        "ASTERISK",
        "SCRIPT",
        "STICKS",
        "DEVIL",
        "CARDS",
        "KEYBOARD",
        "BOXES"
    ];

    uint16[] private asterisk = [
        33,
        34,
        35,
        36,
        37,
        37,
        37,
        38,
        39,
        40,
        41,
        42,
        43
    ];
    uint16[] private stickLine = [0, 1, 2, 3, 3, 3, 4, 5];

    function svgRaw(uint256 tokenId, bytes32 seed)
        public
        view
        returns (bytes memory)
    {
        bytes3 backgroundColor = bytes3(seed);
        bytes3 fontColor = bytes3(seed << 24);
        uint32 random = uint32(bytes4(seed << 48));

        uint256 mod = random % 9;

        bytes memory inner;

        if (mod == 0) {
            inner = generateLinesFromRange(44, 52);
        } else if (mod == 1) {
            inner = generateLinesFromIds(asterisk);
        } else if (mod == 2) {
            inner = generateLinesFromRange(22, 32);
        } else if (mod == 3) {
            inner = generateLinesFromIds(stickLine);
        } else if (mod == 4) {
            inner = generateLinesFromRange(14, 21);
        } else if (mod == 5) {
            inner  = generateLinesFromRange(60,65);
        } else if (mod == 6) {
            inner = generateLinesFromRange(66,72);
        } else if (mod == 7) {
            inner = generateLinesFromRange(73, 83);
        } else {
            inner = generateLinesFromRange(53, 59);
        }

        return
            abi.encodePacked(
                svgPreambleString(backgroundColor, fontColor),
                inner
            );
    }

    function toHtmlHexString(uint256 value) internal pure returns (string memory) {
        bytes memory buffer = new bytes(7);
        buffer[0] = "#";
        for (uint256 i = 6; i > 0; --i) {
            buffer[i] = _HEX_SYMBOLS[value & 0xf];
            value >>= 4;
        }

        require(value == 0, "Strings: hex length insufficient");
        return string(buffer);
    }

    function svgPreambleString(bytes3 backgroundColor, bytes3 fontColor)
        private
        view
        returns (bytes memory)
    {
        return
            abi.encodePacked(
                "<svg viewBox='0 0 1024 1024' width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CorruptionsFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill:",
                toHtmlHexString(uint256(uint24(fontColor))),
                ";font-family:CorruptionsFont;font-size: 10px;} ",
                "</style>",
                '<g transform="scale(4 4)">',
                '<rect width="195" height="145" fill="',
                toHtmlHexString(uint256(uint24(backgroundColor))),
                '" /> '
            );
    }

    function generateLinesFromIds(uint16[] memory ids)
        internal
        pure
        returns (bytes memory)
    {
        bytes memory out;
        for (uint256 i = 0; i < ids.length; i++) {
            out = abi.encodePacked(
                out,
                "<text x='20' y='",
                Strings.toString(40 + i * 10),
                "' class='base'>",
                getLine(ids[i]),
                "</text>"
            );
        }
        return abi.encodePacked(out, "</g></svg>");
    }

    function generateLinesFromRange(uint16 start, uint16 end)
        internal
        pure
        returns (bytes memory)
    {
        bytes memory out;
        for (uint16 i = 0; i <= end-start; i++) {
            out = abi.encodePacked(
                out,
                "<text x='20' y='",
                Strings.toString(40 + i * 10),
                "' class='base'>",
                getLine(start + i),
                "</text>"
            );
        }
        return abi.encodePacked(out, "</g></svg>");
    }

    function svgBase64Data(bytes memory data)
        public
        pure
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    "data:image/svg+xml;base64,",
                    Base64.encode(data)
                )
            );
    }

    function tokenURI(uint256 tokenId, bytes32 seed)
        public
        view
        returns (string memory)
    {
        string memory json;
        bytes memory tokenData = svgRaw(tokenId, seed);
        json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "0x',
                        Strings.toHexString(tokenId),
                        '", "description": "',
                        "no description",
                        '", "image": "',
                        svgBase64Data(tokenData),
                        '"}'
                    )
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }
}
