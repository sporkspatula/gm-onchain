// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {InflateLib} from "./InflateLib.sol";

import {GmDataInterface} from "./GmDataInterface.sol";

interface ICorruptionsFont {
    function font() external view returns (string memory);
}

contract GmRenderer {
    ICorruptionsFont private immutable font;
    GmDataInterface private immutable gmData1;
    GmDataInterface private immutable gmData2;

    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";

    constructor(
        ICorruptionsFont fontAddress,
        GmDataInterface gmData1Address,
        GmDataInterface gmData2Address
    ) {
        font = fontAddress;
        gmData1 = gmData1Address;
        gmData2 = gmData2Address;
    }

    function decompressSvg(GmDataInterface.GmDataSet memory gmData)
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
        public
        view
        returns (bytes memory, bytes memory)
    {
        bytes3 backgroundColor = bytes3(seed);
        bytes3 fontColor = bytes3(seed << 24);
        uint32 random = uint32(bytes4(seed << 48));

        uint256 mod = random % 69;

        bytes memory inner;
        bytes memory name;
        if (mod < 50) {
            (name, inner) = decompressSvg(gmData1.getSvg(mod));
        } else {
            (name, inner) = decompressSvg(gmData2.getSvg(mod));
        }

        return (
            abi.encodePacked(
                svgPreambleString(backgroundColor, fontColor),
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

    function svgPreambleString(bytes3 backgroundColor, bytes3 fontColor)
        private
        view
        returns (bytes memory)
    {
        return
            abi.encodePacked(
                "<svg viewBox='0 0 640 640' width='640' height='640' xmlns='http://www.w3.org/2000/svg'>",
                '<style> @font-face { font-family: CourierFont; src: url("',
                font.font(),
                '") format("opentype"); } ',
                ".base{fill:",
                toHtmlHexString(uint256(uint24(fontColor))),
                ";font-family:CourierFont;font-size: 16px;} ",
                "</style>",
                '<rect width="100%" height="100%" fill="',
                toHtmlHexString(uint256(uint24(backgroundColor))),
                '" /> '
            );
    }
}
