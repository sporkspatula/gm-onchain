// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {GmDataInterface} from "./GmDataInterface.sol";

contract GmData2 is GmDataInterface {
    function getSvg(uint256 index)
        external
        pure
        returns (
           GmDataSet memory data 
        )
    {
        // AUTOGEN:START

    if (index == 50) {
      data.compressedImage = hex"b32949ad2851a8b055375057a8b455373236525748ce492c2eb6554f4a2c4e55b7b329292e48cc03a93032b1505748a954b055373453b75353ae3030303076b11e6c0c1b7db08b471d3eea705a39dcd10027038f85781413234581c3c9b39918ef92c4a04d8893e470b2a5a897c607b7c3a99e54e81ee203923969935406aa38d407350aec00";
      data.compressedSize = 2075;
      data.imageName = "Reverse";
    }
  
    if (index == 51) {
      data.compressedImage = hex"ad965d0b82301486ffca206878d55c91851f10a1bf4258f6711715e885c1f9f1a9d5666bcea378e5cbd839ee39efeb47505cca82942165943c43ca571b4a4ed72ccf437accf20b8d82227f64b77a87bb5d52727e924aad69349f958cb11df335c1e35a70ee725f7c563cdf289a3ded22633fd578df2ed2afc826e3ba058b6608d85954785ff48d6ae208cba1d2ff25c0c0a49d7c096a1880660449a438ee5209a7f3b8d2751bd3db0e339c05c55806037dfbcf8d82ac6e201c790c2104d8582015fdc14b8c95437d4025a5f52c22aeef0243334b98dbdec00456788332aebf466c638f551174daad657a4a3433c8419bbfd7acf43faddd969ba2db131618fba2b399334ea0f334484cccfce39ef573a6895fa771b1c6d5a0668be92ba7b1a87f0ca217";
      data.compressedSize = 2079;
      data.imageName = "Flower Power";
    }
  
    if (index == 52) {
      data.compressedImage = hex"b32949ad2851a8b055375057a8b455373235535748ce492c2eb6554f4a2c4e55b7b329292e48cc03a9303435565748a95400b2ccd4edd4942b0c0c0c1c0dacc963c45351884eca311936fae0c0a14e1841ad36b2b08ed7249209d78e2e1d4f942e1afb89682bc9329238d3a9a36a344c681e26e465fe21ef7762a393f8a26028fa99ecc29f06d989168c014d2f8339608809337d500bc50e00";
      data.compressedSize = 2216;
      data.imageName = "Dot Matrix";
    }
  
    if (index == 53) {
      data.compressedImage = hex"b32949ad2851a8b055375057a8b4553732b1505748ce492c2eb6554f4a2c4e55b7b329292e48cc03a930b400caa5542a005966ea766aca150606068e06d6988cfcf878383b3e3e1fc23672c3a232064d29368dc8ea6df4c1ae21d95140cbcbf03818935143354594a9367625dbf3f0004736837806727cc550a488aaaa890e841832fc0c4e9178932b1e492aa8223d79e793e7cbc192bca991b78d9dad6390ca0d4c59741157eb21989ca9c5a8a1ba89b463101d38f9b8e31f7b05351c03016b6e803129ac0c06dcf3faa0668a1d00";
      data.compressedSize = 2221;
      data.imageName = "Acrobatic";
    }
  
    if (index == 54) {
      data.compressedImage = hex"cd56cb0a833010fc9540a14b4fc608b5a0117aa85f2144fbb895528807857c7cb550b559b509b6252787ec66ddd9194de2f25295a4e24081d41c58c0809cae85941c8e85bc401297f25edcda0c460320e79a70f0b790ac5715a5744fa3af0321ccd60641615237f69e54ac19b1430b18f3d9f0d9055a90469b6e93c27554978663b95e2b9ce3a0672fe0d775835fdd802c9ba43133e5f7514d356a9fdb6f0acdf92a034926d08f978c95ca726d44c81ca39e728f886eb9dd0b0c98e533ea3b28cda833f5bfc484bd5d156844a9102985ccd830cb9410638d7c5e35ee5029ab53c432fd0fc0d65ac3f9a283b017288d5c23bac07db9e9c714bacb1ad3f7da4b56f200";
      data.compressedSize = 2411;
      data.imageName = "Crazy";
    }
  
    if (index == 55) {
      data.compressedImage = hex"b596cd0ac2300cc75fa52098e3ea0682b80d76f1290a65ea6e2242779830faec768afbd01a9bad851e42bb26ff5f93b44bebaaa95993010776cf204e6260a74ba95406c7525590a7b5ba95d7ee8bcd2e0176be33636d215faf1ace79c1f724434a396f63d02869f484f4c91a1fb0251188ddb87ea3bb46f1c78e23bf8ca418295d88dcfe9ceaa318438464a7227bab0494bdc5e0e732cfcceef7da9f9c48d99a31b008cb2e22c3b42b2c52a5f8cc874524eac56a0c491a7975d66e3924549cd62e85877bd55a8c0f835e2b24d1a45e591e25d83de822878a1814dac79d8fca59881a02deeb1b3fe912ef6f39d97bcf16757f73f903";
      data.compressedSize = 2516;
      data.imageName = "Isometric3";
    }
  
    if (index == 56) {
      data.compressedImage = hex"d596c10ac32010447f4528748f31467aa906fc94b4cdad94823998bf6f938217d3edba9a434f19c8ec8c4f85c44c639844b02041cc16947e3faff7c17b0b97c18fd09bc93f87c7e2506d07e2360b0bed09fae32148299d3c7f84ae245c22f46ec26d09d3acc03fb8f53f736b3eb76af3769321d2e4585add53c0bd1956222815b53c55b935a19972cfa31961420289a599dcbc452153b9e7f46d6a9ff3ee5c0601b21331a7d05c5ecae5a62c2a352353bc0a760e8d3b4d4550100f859b62a670e3e3c5dc59afb216cefb2e10c72377b3fcd1f52f";
      data.compressedSize = 2520;
      data.imageName = "Poison";
    }
  
    if (index == 57) {
      data.compressedImage = hex"ed96410b832014c7bf8a3098c72c581b588187dd07efe4a9d5ea36c6c00e75e9b3cfc6322833a943b14d10fee97bfff753500b8abc2c501962825115628f9c30badd1321429c2622c751508867f268223c57ce65150ab1ebe368bf2b09218c502504c82686e33de19d29c4206457df869cc079d79fc6c83e6e076a1070315141dd22312ab5896f0aaba3695d8e747267b402fa4e72ecca87a6ba386b5c63f262dcc579b6f8fe1f7f9e9331ef07f185f6225b158fd1b43bff3076c7e9cab299b86c192e581d978d60772e1037efd8d6b094e03507e09a32b02ad6d6c4f843ff15cbe336416a994ef38f17bd00";
      data.compressedSize = 2538;
      data.imageName = "AMC AAA01";
    }
  
    if (index == 58) {
      data.compressedImage = hex"b32949ad2851a8b055375057a8b455373236525748ce492c2eb6554f4a2c4e55b7b329292e48cc03a93034b7505748a95400b2ccd4edd4942b0c0c0c1c0dac71318c9cadd381008943a416389b544164036df4c1ee26c1f9290150e38c70bbcfc83ad2c2138feb2d70190114b108205b12d39f447b2f13a6d9dc9a60f0a3f8048b373d2df0e8c41d2e244812e72da0f3522cf0c43da66f52301c00120ca089772293e03610f24e0052b202020417998737e2c8776642a405e979840c0672e8939408079c4183e0414a75c0b0c01b3f232058f015988492efb00e1ef20bda611d2c09380b7d1c15d6082b6380453ae136ccd00a167d50f3d40e00";
      data.compressedSize = 2725;
      data.imageName = "NV Script";
    }
  
    if (index == 59) {
      data.compressedImage = hex"ed56c18ac23010fd9580608ea6a9b681b48582f120e2753d49aaedc2c2b208ad502ffd761309b5d46c4cd4835df6364d66debc7993491a55455d813a860882530cb11740b0ffceca3286bbac2c601255e521fb911e5ee843909f80b002988c4735422845f41d0cccfa865394532e3fb5728e2617e15ea3df71f5a43a84905bf675bbda8db9ae6af571ac4b601c0b81b8de1b3ad570e1411ab5114ab61baef82ee4d727b7ce9f13c29437c632967183401bad04327fbf8eb0a3e123ba4826da4ccca691ff3c07cc532105fab9bccf579c6365a4b4459bdd6ceabc3035d4833dca1de7fa82ad013754693678e3708f613bc8d69bbfe27ee6f6c9d585f3564fa3ab61790e18cd3fbe4c4df8eb3a4caf2f56376cd99fcf8196ef3e27dbde9cf8f35f0d9c52ab191db45e13f9679d9c01";
      data.compressedSize = 2912;
      data.imageName = "Fraktur";
    }
  
    if (index == 60) {
      data.compressedImage = hex"b32949ad2851a8b055375057a8b4553732b0505748ce492c2eb6554f4a2c4e55b7b329292e48cc03a930b400caa5542a005966ea766aca150606068e06d60419466ed6cacacac4a8c75486552ff106dae8835d4fbe27805611e34cacea61aa50c59471190cf61531e692eb29ac7ec1e33bfceab1b95599442f93e219e2229c44e57855912f39eaa9514f8d7a6a803c855cf0800179350f498214d7336806d3d4d5d4702c89e94699ea66528b41416010485b83d0d7247a16d2cec2dfda19ea314b64a388d4d6d1a00d0c7d507bdf0e00";
      data.compressedSize = 3062;
      data.imageName = "Caligraphy2";
    }
  
    if (index == 61) {
      data.compressedImage = hex"c557cb6ac33010fc15c140758cea945efc80500b1f94bbcf6e1b43442905ebe0fc7d5629b46eddb8b22d29b7315ed69ad9dd59393387deb03ee782b353ce93e481b397b7a6eb72fedc74075e64a6fb68de6dc4fde396b3d713b3881777e885103b910602894c2b13fa234141b6b948174f418dfa136f77f188529d7e819509e9f081954b15daf81d913ca5f5175a26b4340194b18386d26f0d1d81011628628584172534d46dac610f37e69ae21633a5d42e8d4e6155b9d60224f424a30aad5c5533f2b6e3c46b4a3ecf02eafafb617472b22085e330b9bfb91b8edbd0a71d1968c88951055a4c998c5726d73a4e5d6742872eb17749488daf5c96596046a3611c2f2b35b3f530d36c2332fcab55cdbffb7ef1d240e5fde27123a57e584bc0dc3ac26d7563ff088a33";
      data.compressedSize = 3096;
      data.imageName = "Def Leppard";
    }
  
    if (index == 62) {
      data.compressedImage = hex"cd97cd0ac2300cc75fa52098e3ea865ef6015e7c8a4298ba9b88d01db6b7b7ed41a71db55dda610f23b4a3f9e79734a555df0d3d1b6ae0c0c61af2220776b9b552d6706e65074dd5cb477bd77fecf605b0ebc894758066bb1938e7475ec63230fa8ed1dc53a5559981b812cbfc548ad794588da1768bc2b67ff05b858dd2632fa58764bb25ce7c714dc96e56c504198a64c53a75ed5cf49949c0c853c25b303aaa905ac4a886faf82b8bca24341b6806a9f8344f9ceee3c64a8e75f19135a9b18e09b97896e989ca66b184cf143aba5cac08136d18cece5382b3acdd17c3ff230b6417820cbd6e075a474e8ac49b8ddd053d1b21d1887d9bcdc69ce9d748f304";
      data.compressedSize = 3220;
      data.imageName = "Impossible";
    }
  
    if (index == 63) {
      data.compressedImage = hex"dd57cd6e83300c7e9548959663d3541aad0a485d459f0289d0adb7699a04072af9e117c66085901f87761ae582e598c49ffdd9316179ae4a52459451728928671b4a5edff3a288e8292fce340ecbe233ffa82d56db35256f1722a5671a3f2d2ac6d89eede62864f2312c87cb6fd08f839d1f5a21b0db488df85125738f49038af3156f152f4345179a642446bf2c81c991e8fba27b379e643ae7bc205e7d8ce04a0dda1b353f3a9ca4b75179aa1a8fc7739049b0f2be975b1fe46005badee3b80b80735657e4bd546a77bab69a8275b826d3906a7d4d76a8ad8e4623d0f020f0eeed867a1b29227910368b2a31c0210c071c8f1cb1060ea59ae06c6e86dda58f4cbbc385ae190b854d80ad50100e8cbc0f2cb515b6238f0c699a8de400ec8cf7cec67d30deb8f376c64d9a4c3774f0a7b30c7ee2480dbba51ef7f1ff1126cca1c25ee1339aecbb402ceb5fb8f80b";
      data.compressedSize = 3529;
      data.imageName = "3D Diagonal";
    }
  
    if (index == 64) {
      data.compressedImage = hex"e5d74b0e82301000d0ab343171965448b4864f620c7b4f608acace884959c0eda568140d9f960e12945517d329f3ca50f0d2384b49e6030592fb603b3690e33912c28743246208bc545ca38b8c583b404e39f161b184603ecb28a51beafec9c00ea797b93af0ac721f11b7d3deba092bafe46b85146b32dcc5f0330ec52fa5b5d6e46c002bb39ce61930995f7bdf87b70edcc826943ba6a3a33f039991a1f2e1f773ab8e7ae4eff3552c560d2a45c41ed76b324c6f3a75dd5ed5e88e08c766ba9fda4ca9cad6b71c673d66683aa896cf07784a8a5bfc2c5055a95dc13c83aae3181f1e95b31e4daf59c3bccb355c313fa3f9a30f774d22985a35cbe367ec747cf259f2b733b801";
      data.compressedSize = 3709;
      data.imageName = "Broadway";
    }
  
    if (index == 65) {
      data.compressedImage = hex"d557cd0ac2300c7e9582608ed60982b80dbcf8148131753711a13b4cc8c3eba66ef36fb669bbe94e656dd2f4fb922f6d9867452e8a0824885304c12c00b1dda74a45b04955067198ab637a28572c6620762711c1740ef1785448295772693948cacf953317b1247e220a27158e0c38ab7850670f1c00c860ddc75e38300dbc535eacc8c88c7e84ad8439e78c2f339ad8ecbcfe696adf983c4f35532feeb642f4c8cb173ab8494e95b4912721f181723fb87b859bd9ddcc71491e6a89e9c5055c66e023617f5dcb3ee9b17d4ff0e8dd224baf99805a694bd8a1bf377dd6d668c2fb72b4089f78d5f221cad6889cf517bd60c9fd3d838c3b363e88beee3617aba64dd43ac6ec1cf8ecc0ea7a6e7690379a38f8b3e78f06354d93f2d91a9f01";
      data.compressedSize = 3773;
      data.imageName = "Patorjk-HeX";
    }
  
    if (index == 66) {
      data.compressedImage = hex"d597dd0a823014805f651034ba725958900a11f41483613f7711815e189c87cf458aa6e9b6e389ea6ac4767ebef36b989df38ce511179cdd23eecf03ce8e97244d237e48d2338fc32cbd25577d63be5c7076bab3e214f0783ac985105bb1b13a28fd737b3a24557dfabf4f5fe83dddb3f0b29007d2c42889740adc9ebdd4fa7b2c5489a665654371990c2b1ec668e677f83144151cb30574ee03111c237fdba2ad3101159dee6e410849aa1e28c8caa1a7642600b01d4e4299b178285fcc212863bb23a132fe7b70a934592f1559554b4f5c746a82bea9d0d3b0b799157acc636cd4123b9a4123a500cd9b2c96753b8d27b604a36131a0ae294e013ed69dd2edb7b6d67ab4b65067b376ad09378d999b8d085aefa15e1198e7325757bfab623cda3f42e22f0e15754f7fcfc60f";
      data.compressedSize = 3798;
      data.imageName = "Patorjk's Cheese";
    }
  
    if (index == 67) {
      data.compressedImage = hex"ed99c90a833010865f2550e81c8d08a5e0023e4ada4a2e4d29c483be7db11b426dc66cad4b721af0cfe87c936512b3ba6a6ad2e44081b439c4bb3d90e3994999c381c90a8aac965776e914719c0039b5a45341b1dd3494d292a69f067f354ca3782e1e4da1d09066d13d088d589e9f9694a92be31d2e22eb8565f9c60122d62e853e53f7289da544f8f32d7cfac6d873e321ca8dbb8ac9a6f99f6cf99805cc70aa70c3692d4cc7a66ec7e5b2546d363f7210d8ce85ad1ee4c0d6bacee26b6738ddda6bc1ac7b479bc0d837e3ef874e6b66d86172a4c0454cae0c9fb5c01c0d740fc26e27026b77ac357777e51210d89bdd7b71af775a210773a81f969f0a8b9c0cd61b9693660da4fdb047cbc035031ec33eeafefa1437";
      data.compressedSize = 6652;
      data.imageName = "Doh";
    }
  
    if (index == 68) {
      data.compressedImage = hex"ed9ac16ac3300c865fc530988ff55a36064d02bdec290425db7a1b63901c52307df6c51d2cd0a5992c5b7654e2930e8ef1af4fb22d3b457be85ad595da68752cf5c3e35aabb78fba694afd5a37075d156df3557fba1ecf1badde8faaeff4a4abfbbbce18b333dbe8c6de35bee1c54ebc589d492406b27ed902a6374801954f505280bdcc1f63b31b0cc924c705b994034980466548268514642706b202002265ca21e92b4828408ccc614b9831417200ca0287e47515c06c08228558a1c0c89ce646ce578830601139fded9c921c59c818b0fed468f757ea353f47b3fa979a2b5387e2f0095bda3e141c222830487903fa51ad8303bdb7d44b37450c90688ebfa89ffe716cf42c9f2ac1a7dd754e5a0bd113ede41a5f42639794604fa36a7fe05ba7009b6009d67dccc4bd37552a21dc770ceecb5287840712fd78ca4228ea3593441e310b3d12a1c4326f9e23cb950b82ecc2915b20cb2528841c34179e5104f23e4fc0c23397c0440f8340af87f31a30b740ccf3147fc346aac2e717dccafdf6527d03";
      data.compressedSize = 8957;
      data.imageName = "Alpha";
    }
  
// AUTOGEN:END
        return data;
    }
}
