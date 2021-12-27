// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {GMArtLib} from "./GMArtLib.sol";

interface ICorruptionsFont {
    function font() external view returns (string memory);
}

contract GmRenderer {
    ICorruptionsFont private immutable font;
    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";

    constructor(address fontAddress) {
        font = ICorruptionsFont(fontAddress);
    }

    function svgRaw(uint256 tokenId, bytes32 seed)
        public
        view
        returns (bytes memory, bytes memory)
    {
        bytes3 backgroundColor = bytes3(seed);
        bytes3 fontColor = bytes3(seed << 24);
        uint32 random = uint32(bytes4(seed << 48));

        uint256 mod = random % 12;

        (bytes memory inner, bytes memory name) = GMArtLib.getSvg(mod);

        return (
            abi.encodePacked(
                svgPreambleString(backgroundColor, fontColor),
                inner
            ),
            name
        );
    }

    function toHtmlHexString(uint256 value)
        internal
        pure
        returns (string memory)
    {
        // replace with str = Strings.toHexString(value); str[0] = ' ' str[1] = '#'
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
                "<svg viewBox='0 0 1506 1024' width='1536' height='1024' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CorruptionsFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill:",
                toHtmlHexString(uint256(uint24(fontColor))),
                ";font-family:CorruptionsFont;font-size: 10px;} ",
                "</style>",
                '<g transform="scale(4 4)">',
                '<rect width="400" height="400" fill="',
                toHtmlHexString(uint256(uint24(backgroundColor))),
                '" /> '
            );
    }
}
