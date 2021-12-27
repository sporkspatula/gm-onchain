// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {InflateLib} from "./InflateLib.sol";

library GMArtLib {
    function getSvg(uint256 index) internal pure returns (bytes memory, bytes memory) {
        bytes memory compressedImage;
        bytes memory imageName;
        uint256 compressedSize;


// AUTOGEN:START

    if (index == 0) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d62a601003e7a3498000a69c8d3ec87c3b1b345b4cd16dc1a6373e1ed93aac2a7008c628e0b0d70c8fbdfad87c0667d660554948b006873bccf1b8a3866877d46055408a3b2cd0dd11831e93d4b5cf1267ea8a898f8f478ece1aa0400db22c2a0787f9860698018b25c5e2f7c780307079c810470c619a30483d60843fcae3e3f507d6dde81e0000";
      compressedSize = 1297;
      imageName = "MONEY";
    }
  
    if (index == 1) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d678185a40408c3aac3ab19b02e228d8e8835c676783e6465312dca885df4e7cea88722416d5385c6d46d8d55ad40c632d2d0286803838dc6a8ed3adc43982fce440be24aed46241a15f06a5a72c87a3a70c0d86a5af0c89c8f8504079214a5010a7338dc82cf9f1db483ff71b93e37e229d87d35252aa4b02118ccf1a533c190347c2c1639a194521855c330300";
      compressedSize = 2110;
      imageName = "ALLIGATOR";
    }
  
    if (index == 2) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea76e9b936fa20357600";
      compressedSize = 42;
      imageName = "PLAIN";
    }
  
    if (index == 3) {
      compressedImage = hex"b32949ad28b10b720d730d0a76b5d107f300";
      compressedSize = 20;
      imageName = "REVERSE";
    }
  
    if (index == 4) {
      compressedImage = hex"b32949ad28b10bf671f40bb1d107b301";
      compressedSize = 18;
      imageName = "SLANT";
    }
  
    if (index == 5) {
      compressedImage = hex"a553cb0ac23010fc9512c1bd044ceb6bc5b6e031b75c73b3b5a508deda43fd7bb7205a936c109a435eccec4c7637f9d08e4332169029489e05ec68b93daabe2fa0aefa16ca8e86ecbaf56a544a5dd4f99f8d9c38df29df4c2265ee48ed5da9c6884f086151471450f8778073feef81f370703ddc1162b2014f1aa384b90b1d02248cb5a3971e943ebf09056dcc124bb6e6b285ae2563918681695a2249d5e6d2707235253d191870aa7c34b9d31c3cf5e0a1c6e2f999cb0f35035fe274ebf2afa11a470278df555c2d75fe1bfe02";
      compressedSize = 989;
      imageName = "ASTERISK";
    }
  
    if (index == 6) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d67818f1fa4048485e9f8002051b7d905bec6cd05c648ad345788dc4ab8a7c9dd854e172b919bacb71a833c7e343ec01475df7e37096c5e07496e5e07496a10179390797718678bd09d50500";
      compressedSize = 958;
      imageName = "SCRIPT";
    }
  
    if (index == 7) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d61432e274f5e06c8d84045d754d1b7d90dd7636682e3025ec023ddd38f21c11a3e1efafa0198fc36633c236ebe8eaea425c0f64e9e96353a087cb63e6388d57c7e645b0536bf079461f8f640d0e4758a03b028b0d3548aed04158874d658c7e0df1765b926a77bc3e5e15788570b8c1d0800847002358571d8be9e4bb460197730c71260aa01b40004bda48c02a8a220db50e00";
      compressedSize = 990;
      imageName = "STICKS";
    }
  
    if (index == 8) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d67aba60a007a36df4415aed6cd00c30c569408d3b50ab1e825be38bcac761a0196e03e12c2bfd182b248311e231fa56042d3027c602148348b4c082080be00c5d5d38d3bd06bfbc2f2e0b2d715a88640c08e012879a0b00";
      compressedSize = 541;
      imageName = "TEST";
    }
  
    if (index == 9) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d6f11080ceb7d10799606783668e29ba393531709dc430f449568fc32166180e81ebd1d6d5d5d586f3708ae330d81cb7c108563a16316cac5c6cb2382cb620c6624c067e07e0558fc32196b40a5a43030c93f5c1892d064e43750200";
      compressedSize = 703;
      imageName = "CARDS";
    }
  
    if (index == 10) {
      compressedImage = hex"c555cd0e82300c7e952526ee22dbc07f0412df03b3a0f1e60d0e98ece1056260837514d4d8cbcad6f5ebd71f1615f7b220654c0341c933a69b6ab93db23c8fe935cbef34592e4a21c4599c98d7134688e330e2b5e724eaf9dff6fd2bc8076b0f9422f01980b383713acda1c84630969a631b06d68d61a7392200c1fd24822cd4815c24b004958b553adce22eee0a41f88021cc6d8c2df14935bfa2a8a4a51c0530a5e2474c0266b4f93712a06c15c7de05f8fa0243b8030e59456675b1b5177a58b54d9972e3734aa97c7fd27436914be96c59680a6b69174464c1873fc6df29d8aefb534c6046d770465bc57cbe2c38dd1d32628a88087ec4bd818cc56ad8bc015f";
      compressedSize = 2101;
      imageName = "KEYBOARD";
    }
  
    if (index == 11) {
      compressedImage = hex"e5d9dd6a83301407f0571106cb6512bb4fa785bdc701e946ef76672f1c843dfb3ca9b4747834e6c3c4e94d03157af2cb31feb5e5e9d89eb2b662b960d977c51eba8fcfaf43d354ece3d01cd9fefeae1542bc8bb728831a8fb82538145e72d4dd977f8c1f9330e6607216a44f6d381162319e622e062f8a75ae02168e1d4ea93e4750ed6a5a07a72e548d9ca008d597e554758d29729e0bb3d17b0dae87b5714880ad5f3d1b25294231699d0186c5bd7421ca92477ae621549677d28564b62cb91f16630d1ec885280059badb9daac7729ddc392158cc7daa4bf00e3dff875451ccd9fd290dab47095d1b1af3c14c0d13bbda750ec69a97d98e271a6995dacd9b33e3132abaf714ccee911f3ccc7b8b9abe5b4e3676b849c4607f4100d5447eaf444acb53fe9d62bbfdde69ce61c29013a2efb86ba4590fef996bb70c167e09542f37b35511e722f8f385b6dea0ac5ceeb917ce516063c07984d735b041e75dcc978d4027ebb80370654dec4f8bff3ae8f365bf0abf";
      compressedSize = 6714;
      imageName = "BOXES";
    }
  
    if (index == 12) {
      compressedImage = hex"b593cb0e832010457f85a449590e58fb4ac1a4ff41426ce3ae3b5cd0bf57912212a9c1c72c18dcdc73c609acae748d34c719c1e8cb71deb6f7a7548ae357a92a5cc8d962d065142c483a8749e878d0849027792ccebc84992ed2cf06612b29fb3a9fed413a06b465296079bf1e83dc1220034d801b4938b4f9b20611da7d09cd1bd24c6811c29efdc4e21f969255dcf15f362b1b04c62d2640b71198dc804c32c9363699d80ec8fe1eb698d2692fa5f5ef9be6bbbba54b36";
      compressedSize = 1315;
      imageName = "ALPHA";
    }
  
// AUTOGEN:END
        (, bytes memory result) = InflateLib.puff(
            compressedImage,
            compressedSize
        );
        return (result, imageName);
    }
}
