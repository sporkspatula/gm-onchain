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
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d62a601003e7a3498000a69c8d3ec87c3b1b345b4cd16dc1a6373e1ed93aac2a7008c628e0b0d70c8fbdfad87c0667d660554948b006873bccf1b8a3866877d46055408a3b2cd0dd11831e93d4b5cf1267ea8a898f8f478ece1aa0400db22c2a0787f9860698018b25c5e2f7c780307079c810470c619a30483d60843fcae3e3f507d6dd181ed04f07e2e2b2743b00";
      compressedSize = 1307;
      imageName = "MONEY";
    }
  
    if (index == 1) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d678185a40408c3aac3ab19b02e228d8e8835c676783e6465312dca885df4e7cea88722416d5385c6d46d8d55ad40c632d2d0286803838dc6a8ed3adc43982fce440be24aed46241a15f06a5a72c87a3a70c0d86a5af0c89c8f8504079214a5010a7338dc82cf9f1db483ff71b93e37e229d87d35252aa4b02118ccf1a533c190347c2c1639a194521855233eba703717159ba1d00";
      compressedSize = 2120;
      imageName = "ALLIGATOR";
    }
  
    if (index == 2) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea76e9b936fa20357636fae9405c5c966e0700";
      compressedSize = 52;
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
      compressedImage = hex"a5534d0b83300cfd2bd2c1721156dd57c754d8b1b75e7b53a794c16e95e1fefde2619b6b9b323060b5e5bdbc679216433f0ec95842ce217996b0c3d7f5de585b42dbd81e2a83911ab35e8d9cf30b3ffff3914e9cef526c2691aa70a4f6ae54a7d82705d342461404f3cf40ccf9bf1bcac3c1f5701310930d7892224a98bb90214042583b7ae511a9cfef42493bb5c4926ea96a09d792d20243c1b42c91c46e536538b99a29fe3210e08cfb6874272978e6c1438345f373971f1a06bac5d9d6e5d7a11e471278d795d51a27ff0ddf187cecc3542f";
      compressedSize = 999;
      imageName = "ASTERISK";
    }
  
    if (index == 6) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d67818f1fa4048485e9f8002051b7d905bec6cd05c648ad345788dc4ab8a7c9dd854e172b919bacb71a833c7e343ec01475df7e37096c5e07496e5e07496a10179390797718678bd09d3a59f0ec4c565e97600";
      compressedSize = 968;
      imageName = "SCRIPT";
    }
  
    if (index == 7) {
      compressedImage = hex"a592db0a83300c407fa53058144c5bc7ae4c857d813f205a37c497bd5586837efceac66ed256e70aa5a1093d27345153b50d6963587020d71896fa389d4b29633896b282643e6b39e707beff33c891be624f08043f621d3b897a06ab61038af93489cc4b53e21716f27a981c20e2c35e4794990aa8adb18df57930b5785755ae669823a92c12dbbe8481a03e2c8237ce549931359ebdfb955d306785f3cae210f21112fa83110caf4fb721369dd03a14daa15b86d910c6dbaff413c76abde5a54e6e";
      compressedSize = 1000;
      imageName = "STICKS";
    }
  
    if (index == 8) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d67aba60a007a36df4415aed6cd00c30c569408d3b50ab1e825be38bcac761a0196e03e12c2bfd182b248311e231fa56042d3027c602148348b4c082080be00c5d5d38d3bd06bfbc2f2e0b2d715a88640c08e0128799ab9f0ec4c565e97600";
      compressedSize = 551;
      imageName = "DEVIL";
    }
  
    if (index == 9) {
      compressedImage = hex"b32949ad2851a8b05537325057a8b455370152c93989c5c5b6ea4989c5a9ea766aca150606068e06d6f11080ceb7d10799606783668e29ba393531709dc430f449568fc32166180e81ebd1d6d5d5d586f3708ae330d81cb7c108563a16316cac5c6cb2382cb620c6624c067e07e0558fc32196b40a5a43030c93f5c1892d064ec374eaa703717159ba1d00";
      compressedSize = 713;
      imageName = "CARDS";
    }
  
    if (index == 10) {
      compressedImage = hex"c555db0a83300cfd95c2607d996d7577a7c2fec351dc105ff6a60c07fdf8a930af4d8d6e6301696cd39c9c246dbd2cce3392fbd411943c7dba2986db3d4a539f5ea334a6c172910b21cee2c4ac9e30420c8b1e2f3d075ecfffb6ef5f413e58bda01481d7009c1d8cd36806455682b16c39d66160dd74ec5a8e0840703f892073db4026125882cac42a1c4e71137785207cc010e63ac69af8a49a5f5154d2428e029852f123260133dafc1b0950ba8a63f7027c6d8121dc00bbac20b3bae8da0b7d585b9332e49ddf29a5b2ed49a7b38a5c4a63cb42a7b0947a4044e67c7831fe4ec176dd9f620233ba86335a2bdde74b83d3ec2123a68888e047dc1ac858ac1d9b37204f8a2f7d24c10b";
      compressedSize = 2111;
      imageName = "KEYBOARD";
    }
  
    if (index == 11) {
      compressedImage = hex"e5d95b6b83301407f0af220c96c72476ddc5a9b0ef7140ba51fab237cb7010f6d96bd21b2d1e8db998388552a1424f7e39ea3f9aefb7cd3e690a923292fc16e4a9fdfafaded475413e37f596948f0f0d63ec83bd07d9a9e416b6048bc2732a75cbfcce781d8531059da3207e6acd812093f11c72326896cd731664e1b2c331d59700aa6d4df3e054858a9e0304a2fa3a9daaaa3146ce6361267a6fdef5646d1422603bcd9e891267be98944e07c3e45eaa1061c8c31df3202ad33ba942125396d40d8bb606f5e482142059dadb9da8fa721d5f5921188c7da84be41d7afc1f892c1b73f5c7348c9612aa36694c3b33350c5cd5ae63d0d6bc8cb63fd170a3d4aedf9c091d5051bd2760748ffcc94dbfb7b0e1dbe5646d879b440ce62704604de4f64cc4b41ce5df21b6dbdfadc6ec270c5921ba8ebb5a9a55f73573ee96dec22f82eae466362be294795f5f28eb05caf2e9d6bd708c020b034e033cae81053aaf423e6c043c5987dd015bd6c85e5afcd79d53be3ccf02ddb59ffa67571e00";
      compressedSize = 6724;
      imageName = "BOXES";
    }
  
    if (index == 12) {
      compressedImage = hex"b593df0a832014875f2518cccba3adfd631aec3d046923bad99d31dadbcfca99492eb43a60a76e7edf773a48ebb2a99386a114a3e4c350a6daf35548c9d0a39025cac56c51683372ea241ddda464bf6b30c6777c8bce3cb99926d2ce06ae2b28fb3c9f6d415a06a8d214d0bc5ff7412e019081c6c18cc40dbafbd2061eda3586660dd94da8115c3ffb89f93f2cc18bb8e3bfdcad6c1018379f00594760720322c8245dd964623b20fa77b7f9940e5b292dbfdf24dbdc2d42122a75e4bbcabf";
      compressedSize = 1325;
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
