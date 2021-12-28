// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface ICorruptionsFont {
    function font() external view returns (string memory);
}

interface IGmData {
    function getSvg(uint256 tokenId) external view returns (bytes memory, bytes memory);
}

contract GmRenderer {
    ICorruptionsFont private immutable font;
    IGmData private immutable gmData;

    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";

    constructor(address fontAddress, address gmDataAddress) {
        font = ICorruptionsFont(fontAddress);
        gmData = IGmData(gmDataAddress);
    }

    function svgRaw(uint256 tokenId, bytes32 seed)
        public
        view
        returns (bytes memory, bytes memory)
    {
        bytes3 backgroundColor = bytes3(seed);
        bytes3 fontColor = bytes3(seed << 24);
        uint32 random = uint32(bytes4(seed << 48));

        uint256 mod = random % 50;

        (bytes memory inner, bytes memory name) = gmData.getSvg(mod);

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
