/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GmRenderer, GmRendererInterface } from "../GmRenderer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICorruptionsFont",
        name: "fontAddress",
        type: "address",
      },
      {
        internalType: "contract GmDataInterface",
        name: "gmData1Address",
        type: "address",
      },
      {
        internalType: "contract GmDataInterface",
        name: "gmData2Address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "imageName",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "compressedImage",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "compressedSize",
            type: "uint256",
          },
        ],
        internalType: "struct GmDataInterface.GmDataSet",
        name: "gmData",
        type: "tuple",
      },
    ],
    name: "decompress",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "seed",
        type: "bytes32",
      },
    ],
    name: "svgRaw",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200280c3803806200280c83398101604081905262000034916200006b565b6001600160a01b0392831660805290821660a0521660c052620000bf565b6001600160a01b03811681146200006857600080fd5b50565b6000806000606084860312156200008157600080fd5b83516200008e8162000052565b6020850151909350620000a18162000052565b6040850151909250620000b48162000052565b809150509250925092565b60805160a05160c05161271e620000ee60003960006101920152600060e8015260006104be015261271e6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806390accf561461003b5780639ab440b414610065575b600080fd5b61004e610049366004612199565b610078565b60405161005c929190612292565b60405180910390f35b61004e6100733660046122b7565b610099565b606080600061008f8460200151856040015161020b565b9451959350505050565b60608082601881901b63ffffffff60b083901c1660006100ba6045836122d9565b63ffffffff16905060608060328310156101785760405163586e3c7d60e11b81526004810184905261016f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b0dc78fa906024015b60006040518083038186803b15801561013357600080fd5b505afa158015610147573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610049919081019061235a565b925090506101ce565b60405163586e3c7d60e11b8152600481018490526101c9907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b0dc78fa9060240161011b565b925090505b6101d886866104ba565b826040516020016101ea929190612413565b60408051601f198184030181529190529750955050505050505b9250929050565b600060606000604051806101000160405280856001600160401b03811115610235576102356120ae565b6040519080825280601f01601f19166020018201604052801561025f576020820181803683370190505b508152602001600081526020018681526020016000815260200160008152602001600081526020016040518060400160405280600f60016102a09190612469565b6001600160401b038111156102b7576102b76120ae565b6040519080825280602002602001820160405280156102e0578160200160208202803683370190505b5081526040805161012080825261242082019092526020928301929091908201612400803683370190505081525081526020016040518060400160405280600f600161032c9190612469565b6001600160401b03811115610343576103436120ae565b60405190808252806020026020018201604052801561036c578160200160208202803683370190505b50815260408051601e8082526103e0820190925260209283019290919082016103c080368337505050905290529050600080806103a884610594565b9050600081600e8111156103be576103be612481565b146103d3579251929450919250610204915050565b826104aa576103e384600161071e565b93509050600081600e8111156103fb576103fb612481565b14610410579251929450919250610204915050565b61041b84600261071e565b92509050600081600e81111561043357610433612481565b14610448579251929450919250610204915050565b811561047c57816001146104735781600214610465576003610485565b61046e846107ef565b610485565b61046e84610869565b61048584610884565b9050600081600e81111561049b5761049b612481565b146104a5576104aa565b6103d3565b9251929792965091945050505050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639d37bc7c6040518163ffffffff1660e01b815260040160006040518083038186803b15801561051557600080fd5b505afa158015610529573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105519190810190612497565b61055e60e884901c610a94565b61056b60e886901c610a94565b60405160200161057d939291906124df565b604051602081830303815290604052905092915050565b604080516101208082526124208201909252600091829182916020820161240080368337019050509050600091505b60908210156105fd5760088183815181106105e0576105e0612689565b6020908102919091010152816105f58161269f565b9250506105c3565b61010082101561063857600981838151811061061b5761061b612689565b6020908102919091010152816106308161269f565b9250506105fd565b61011882101561067357600781838151811061065657610656612689565b60209081029190910101528161066b8161269f565b925050610638565b6101208210156106ae57600881838151811061069157610691612689565b6020908102919091010152816106a68161269f565b925050610673565b6106c18460c00151826101206000610bb0565b50600091505b601e8210156107015760058183815181106106e4576106e4612689565b6020908102919091010152816106f98161269f565b9250506106c7565b6107138460e0015182601e6000610bb0565b506000949350505050565b608082015160009081905b838560a0015110156107b2578460400151518560600151141561075457600160009250925050610204565b60a085015160408601516060870180519061076e8261269f565b90528151811061078057610780612689565b602001015160f81c60f81b60f81c60ff16901b8117905060088560a0018181516107aa9190612469565b905250610729565b80841c608086015260a0850180518591906107ce9083906126ba565b90525060006107e0600180871b6126ba565b60009792169550909350505050565b600061080e604051806040016040528060608152602001606081525090565b6040805180820190915260608082526020820152600061082d85610e7b565b90945092509050600081600e81111561084857610848612481565b1461085557949350505050565b610860858484611531565b95945050505050565b600061087e828360c001518460e00151611531565b92915050565b60006080820181905260a0820181905260408201515160608301518291906108ad906004612469565b11156108bc5750600192915050565b6040830151606084018051906108d18261269f565b9052815181106108e3576108e3612689565b0160200151604084015160608501805160f89390931c9350600892906109088261269f565b90528151811061091a5761091a612689565b602001015160f81c60f81b60f81c60ff16901b81179050801960ff16836040015184606001805180919061094d9061269f565b90528151811061095f5761095f612689565b016020015160f81c1415806109aa5750604083015160608401805160ff841960081c16929161098d8261269f565b90528151811061099f5761099f612689565b016020015160f81c14155b156109b85750600492915050565b8260400151518184606001516109ce9190612469565b11156109dd5750600192915050565b82515160208401516109f0908390612469565b11156109ff5750600292915050565b8015610a8b57610a106001826126ba565b90508260400151836060018051809190610a299061269f565b905281518110610a3b57610a3b612689565b602001015160f81c60f81b8360000151846020018051809190610a5d9061269f565b905281518110610a6f57610a6f612689565b60200101906001600160f81b031916908160001a9053506109ff565b50600092915050565b60408051600780825281830190925260609160009190602082018180368337019050509050602360f81b81600081518110610ad157610ad1612689565b60200101906001600160f81b031916908160001a90535060065b8015610b5d576f181899199a1a9b1b9c1cb0b131b232b360811b84600f1660108110610b1957610b19612689565b1a60f81b828281518110610b2f57610b2f612689565b60200101906001600160f81b031916908160001a90535060049390931c92610b56816126d1565b9050610aeb565b50821561087e5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640160405180910390fd5b600080600080610bbe61208f565b600092505b600f8311610c0057600089600001518481518110610be357610be3612689565b602090810291909101015282610bf88161269f565b935050610bc3565b600093505b86841015610c6c57885188610c1a8689612469565b81518110610c2a57610c2a612689565b602002602001015181518110610c4257610c42612689565b602002602001018051809190610c579061269f565b90525083610c648161269f565b945050610c05565b868960000151600081518110610c8457610c84612689565b60200260200101511415610c9f576000945050505050610e73565b60019150600192505b600f8311610d22578851805160019390931b9284908110610ccb57610ccb612689565b6020026020010151821015610ce757600e945050505050610e73565b8851805184908110610cfb57610cfb612689565b602002602001015182610d0e91906126ba565b915082610d1a8161269f565b935050610ca8565b60006020820152600192505b600f831015610da7578851805184908110610d4b57610d4b612689565b6020026020010151818460108110610d6557610d65612689565b6020020151610d749190612469565b81610d80856001612469565b60108110610d9057610d90612689565b602002015282610d9f8161269f565b935050610d2e565b600093505b86841015610e5a5787610dbf8588612469565b81518110610dcf57610dcf612689565b6020026020010151600014610e485760208901518490828a610df1848b612469565b81518110610e0157610e01612689565b602002602001015160108110610e1957610e19612689565b60200201805190610e298261269f565b905281518110610e3b57610e3b612689565b6020026020010181815250505b83610e528161269f565b945050610dac565b60008211610e69576000610e6c565b600e5b9450505050505b949350505050565b6000610e9a604051806040016040528060608152602001606081525090565b6040805180820190915260608082526020820152600080808080610ec1601e61011e612469565b6001600160401b03811115610ed857610ed86120ae565b604051908082528060200260200182016040528015610f01578160200160208202803683370190505b50905060006040518060400160405280600f6001610f1f9190612469565b6001600160401b03811115610f3657610f366120ae565b604051908082528060200260200182016040528015610f5f578160200160208202803683370190505b5081526040805161011e8082526123e0820190925260209283019290919082016123c08036833701905050815250905060006040518060400160405280600f6001610faa9190612469565b6001600160401b03811115610fc157610fc16120ae565b604051908082528060200260200182016040528015610fea578160200160208202803683370190505b50815260408051601e8082526103e0820190925260209283019290919082016103c0803683375050509052905060006110248c600561071e565b98509450600085600e81111561103c5761103c612481565b146110545750929850965090945061152a9350505050565b61106061010189612469565b975061106d8c600561071e565b97509450600085600e81111561108557611085612481565b1461109d5750929850965090945061152a9350505050565b6110a8600188612469565b965061011e8811806110ba5750601e87115b156110d4575060059950909750955061152a945050505050565b6110dd8c611d5e565b9095509350600085600e8111156110f6576110f6612481565b1461110e5750929850965090945061152a9350505050565b61111c838560136000610bb0565b9450600085600e81111561113257611132612481565b1461114c575060069950909750955061152a945050505050565b600095505b61115b8789612469565b8610156113545760008061116f8e86611f80565b9097509150600087600e81111561118857611188612481565b146111a25750949a50919850965061152a95505050505050565b60108210156111da578186896111b78161269f565b9a50815181106111c9576111c9612689565b60200260200101818152505061134d565b50600060108214156112795787611203575060079b5092995090975061152a9650505050505050565b8561120f60018a6126ba565b8151811061121f5761121f612689565b602002602001015190506112348e600261071e565b9097509250600087600e81111561124d5761124d612481565b146112675750949a50919850965061152a95505050505050565b611272836003612469565b91506112d9565b816011141561128d576112348e600361071e565b6112988e600761071e565b9097509250600087600e8111156112b1576112b1612481565b146112cb5750949a50919850965061152a95505050505050565b6112d683600b612469565b91505b6112e3898b612469565b6112ed838a612469565b111561130b575060089b5092995090975061152a9650505050505050565b811561134d5761131c6001836126ba565b915080868961132a8161269f565b9a508151811061133c5761133c612689565b60200260200101818152505061130b565b5050611151565b836101008151811061136857611368612689565b60200260200101516000141561138d5750600b9950909750955061152a945050505050565b61139a83858a6000610bb0565b9450600085600e8111156113b0576113b0612481565b1415801561143a5750600185600e8111156113cd576113cd612481565b14806113ea5750600285600e8111156113e8576113e8612481565b145b8061143a575082518051600190811061140557611405612689565b6020026020010151836000015160008151811061142457611424612689565b60200260200101516114369190612469565b8814155b15611454575060099950909750955061152a945050505050565b6114608285898b610bb0565b9450600085600e81111561147657611476612481565b141580156115005750600185600e81111561149357611493612481565b14806114b05750600285600e8111156114ae576114ae612481565b145b8061150057508151805160019081106114cb576114cb612689565b602002602001015182600001516000815181106114ea576114ea612689565b60200260200101516114fc9190612469565b8714155b1561151a5750600a9950909750955061152a945050505050565b5060009950909750955050505050505b9193909250565b6000806000806000604051806103a00160405280600361ffff168152602001600461ffff168152602001600561ffff168152602001600661ffff168152602001600761ffff168152602001600861ffff168152602001600961ffff168152602001600a61ffff168152602001600b61ffff168152602001600d61ffff168152602001600f61ffff168152602001601161ffff168152602001601361ffff168152602001601761ffff168152602001601b61ffff168152602001601f61ffff168152602001602361ffff168152602001602b61ffff168152602001603361ffff168152602001603b61ffff168152602001604361ffff168152602001605361ffff168152602001606361ffff168152602001607361ffff168152602001608361ffff16815260200160a361ffff16815260200160c361ffff16815260200160e361ffff16815260200161010261ffff1681525090506000604051806103a00160405280600060ff168152602001600060ff168152602001600060ff168152602001600060ff168152602001600060ff168152602001600060ff168152602001600060ff168152602001600060ff168152602001600160ff168152602001600160ff168152602001600160ff168152602001600160ff168152602001600260ff168152602001600260ff168152602001600260ff168152602001600260ff168152602001600360ff168152602001600360ff168152602001600360ff168152602001600360ff168152602001600460ff168152602001600460ff168152602001600460ff168152602001600460ff168152602001600560ff168152602001600560ff168152602001600560ff168152602001600560ff168152602001600060ff1681525090506000604051806103c00160405280600161ffff168152602001600261ffff168152602001600361ffff168152602001600461ffff168152602001600561ffff168152602001600761ffff168152602001600961ffff168152602001600d61ffff168152602001601161ffff168152602001601961ffff168152602001602161ffff168152602001603161ffff168152602001604161ffff168152602001606161ffff168152602001608161ffff16815260200160c161ffff16815260200161010161ffff16815260200161018161ffff16815260200161020161ffff16815260200161030161ffff16815260200161040161ffff16815260200161060161ffff16815260200161080161ffff168152602001610c0161ffff16815260200161100161ffff16815260200161180161ffff16815260200161200161ffff16815260200161300161ffff16815260200161400161ffff16815260200161600161ffff1681525090506000604051806103c00160405280600060ff168152602001600060ff168152602001600060ff168152602001600060ff168152602001600160ff168152602001600160ff168152602001600260ff168152602001600260ff168152602001600360ff168152602001600360ff168152602001600460ff168152602001600460ff168152602001600560ff168152602001600560ff168152602001600660ff168152602001600660ff168152602001600760ff168152602001600760ff168152602001600860ff168152602001600860ff168152602001600960ff168152602001600960ff168152602001600a60ff168152602001600a60ff168152602001600b60ff168152602001600b60ff168152602001600c60ff168152602001600c60ff168152602001600d60ff168152602001600d60ff16815250905060005b8761010014611d4a57611a6b8c8c611f80565b98509050600081600e811115611a8357611a83612481565b14611a97579750611d579650505050505050565b610100881015611b0d578b515160208d01511415611ac057600298505050505050505050611d57565b8760f81b8c600001518d6020015181518110611ade57611ade612689565b60200101906001600160f81b031916908160001a90535060208c01805190611b058261269f565b905250611a58565b610100881115611d38576000611b256101018a6126ba565b9850601d8910611b4157600c9950505050505050505050611d57565b611b648d868b601d8110611b5757611b57612689565b602002015160ff1661071e565b9092509050600082600e811115611b7d57611b7d612481565b14611b9257509750611d579650505050505050565b80868a601d8110611ba557611ba5612689565b602002015161ffff16611bb89190612469565b9750611bc48d8c611f80565b99509150600082600e811115611bdc57611bdc612481565b14611bf157509750611d579650505050505050565b611c078d848b601e8110611b5757611b57612689565b9092509050600082600e811115611c2057611c20612481565b14611c3557509750611d579650505050505050565b80848a601e8110611c4857611c48612689565b602002015161ffff16611c5b9190612469565b96508c60200151871115611c7b57600d9950505050505050505050611d57565b8c515160208e0151611c8e908a90612469565b1115611ca65760029950505050505050505050611d57565b8715611d3257611cb76001896126ba565b97508c60000151878e60200151611cce91906126ba565b81518110611cde57611cde612689565b602001015160f81c60f81b8d600001518e6020015181518110611d0357611d03612689565b60200101906001600160f81b031916908160001a90535060208d01805190611d2a8261269f565b905250611ca6565b50611a58565b868c602001818151611b059190612469565b6000985050505050505050505b9392505050565b60006060818080611d72601e61011e612469565b6001600160401b03811115611d8957611d896120ae565b604051908082528060200260200182016040528015611db2578160200160208202803683370190505b506040805161026081018252601081526011602082015260129181019190915260006060820181905260086080830152600760a0830152600960c0830152600660e0830152600a6101008301526005610120830152600b61014083015260046101608301819052600c61018084015260036101a0840152600d6101c084015260026101e0840152600e6102008401526001610220840152600f61024084015292935091611e6090899061071e565b95509150600082600e811115611e7857611e78612481565b14611e895750969095509350505050565b611e94600486612469565b9450600093505b84841015611f1d57611eae88600361071e565b84838760138110611ec157611ec1612689565b602002015160ff1681518110611ed957611ed9612689565b60209081029190910101529150600082600e811115611efa57611efa612481565b14611f0b5750969095509350505050565b83611f158161269f565b945050611e9b565b6013841015611f7057600083828660138110611f3b57611f3b612689565b602002015160ff1681518110611f5357611f53612689565b602090810291909101015283611f688161269f565b945050611f1d565b5060009791965090945050505050565b600080600181808080805b600f861161207c576000611fa08b600161071e565b9092509050600082600e811115611fb957611fb9612481565b14611fd05750965060009550610204945050505050565b895180519682179688908110611fe857611fe8612689565b602002602001015193508385611ffe9190612469565b8610156120495760208a015160009061201787896126ba565b6120219086612469565b8151811061203157612031612689565b60200260200101519850985050505050505050610204565b6120538484612469565b925061205f8486612469565b600196871b961b94508690506120748161269f565b965050611f8b565b50600c9960009950975050505050505050565b6040518061020001604052806010906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156120e6576120e66120ae565b60405290565b604051601f8201601f191681016001600160401b0381118282101715612114576121146120ae565b604052919050565b60006001600160401b03821115612135576121356120ae565b50601f01601f191660200190565b600082601f83011261215457600080fd5b81356121676121628261211c565b6120ec565b81815284602083860101111561217c57600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156121ab57600080fd5b81356001600160401b03808211156121c257600080fd5b90830190606082860312156121d657600080fd5b6121de6120c4565b8235828111156121ed57600080fd5b6121f987828601612143565b82525060208301358281111561220e57600080fd5b61221a87828601612143565b6020830152506040830135604082015280935050505092915050565b60005b83811015612251578181015183820152602001612239565b83811115612260576000848401525b50505050565b6000815180845261227e816020860160208601612236565b601f01601f19169290920160200192915050565b6040815260006122a56040830185612266565b82810360208401526108608185612266565b600080604083850312156122ca57600080fd5b50508035926020909101359150565b600063ffffffff808416806122fe57634e487b7160e01b600052601260045260246000fd5b92169190910692915050565b60006123186121628461211c565b905082815283838301111561232c57600080fd5b611d57836020830184612236565b600082601f83011261234b57600080fd5b611d578383516020850161230a565b60006020828403121561236c57600080fd5b81516001600160401b038082111561238357600080fd5b908301906060828603121561239757600080fd5b61239f6120c4565b8251828111156123ae57600080fd5b6123ba8782860161233a565b8252506020830151828111156123cf57600080fd5b6123db8782860161233a565b6020830152506040830151604082015280935050505092915050565b60008151612409818560208601612236565b9290920192915050565b60008351612425818460208801612236565b835190830190612439818360208801612236565b651e17b9bb339f60d11b9101908152600601949350505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561247c5761247c612453565b500190565b634e487b7160e01b600052602160045260246000fd5b6000602082840312156124a957600080fd5b81516001600160401b038111156124bf57600080fd5b8201601f810184136124d057600080fd5b610e738482516020840161230a565b7f3c7376672076696577426f783d2730203020363430203634302720786d6c6e7381527f3d27687474703a2f2f7777772e77332e6f72672f323030302f737667273e000060208201527f3c7374796c653e2040666f6e742d66616365207b20666f6e742d66616d696c79603e820152781d1021b7bab934b2b92337b73a1d9039b9319d103ab936141160391b605e82015260008451612585816077850160208901612236565b7801114903337b936b0ba141137b832b73a3cb83291149d903e9603d1b6077918401918201526a173130b9b2bdb334b6361d60a91b609082015284516125d281609b840160208901612236565b7f3b666f6e742d66616d696c793a436f7572696572466f6e743b666f6e742d73699101609b8101919091526a03d329d10189b383c1dbe960ad1b60bb820152671e17b9ba3cb6329f60c11b60c682015261267f61266e61266860ce84017f3c726563742077696474683d223130302522206865696768743d223130302522815266103334b6361e9160c91b602082015260270190565b866123f7565b6401110179f160dd1b815260050190565b9695505050505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156126b3576126b3612453565b5060010190565b6000828210156126cc576126cc612453565b500390565b6000816126e0576126e0612453565b50600019019056fea264697066735822122039f015ca8076ac2d349f01be312a0445c3108899963233e1defc8e36fba4b84664736f6c63430008090033";

export class GmRenderer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    fontAddress: string,
    gmData1Address: string,
    gmData2Address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GmRenderer> {
    return super.deploy(
      fontAddress,
      gmData1Address,
      gmData2Address,
      overrides || {}
    ) as Promise<GmRenderer>;
  }
  getDeployTransaction(
    fontAddress: string,
    gmData1Address: string,
    gmData2Address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      fontAddress,
      gmData1Address,
      gmData2Address,
      overrides || {}
    );
  }
  attach(address: string): GmRenderer {
    return super.attach(address) as GmRenderer;
  }
  connect(signer: Signer): GmRenderer__factory {
    return super.connect(signer) as GmRenderer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GmRendererInterface {
    return new utils.Interface(_abi) as GmRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GmRenderer {
    return new Contract(address, _abi, signerOrProvider) as GmRenderer;
  }
}