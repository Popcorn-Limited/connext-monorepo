/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestERC20,
  TestERC20Interface,
} from "../../../contracts/test/TestERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_newSymbol",
        type: "string",
      },
    ],
    name: "setDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200105738038062001057833981016040819052620000349162000234565b818160036200004483826200032c565b5060046200005382826200032c565b505050620000723369d3c21bcecceda10000006200007a60201b60201c565b50506200041f565b6001600160a01b038216620000d55760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000e99190620003f8565b90915550506001600160a01b0382166000908152602081905260408120805483929062000118908490620003f8565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018f57600080fd5b81516001600160401b0380821115620001ac57620001ac62000167565b604051601f8301601f19908116603f01168101908282118183101715620001d757620001d762000167565b81604052838152602092508683858801011115620001f457600080fd5b600091505b83821015620002185785820183015181830184015290820190620001f9565b838211156200022a5760008385830101525b9695505050505050565b600080604083850312156200024857600080fd5b82516001600160401b03808211156200026057600080fd5b6200026e868387016200017d565b935060208501519150808211156200028557600080fd5b5062000294858286016200017d565b9150509250929050565b600181811c90821680620002b357607f821691505b602082108103620002d457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200016257600081815260208120601f850160051c81016020861015620003035750805b601f850160051c820191505b8181101562000324578281556001016200030f565b505050505050565b81516001600160401b0381111562000348576200034862000167565b62000360816200035984546200029e565b84620002da565b602080601f8311600181146200039857600084156200037f5750858301515b600019600386901b1c1916600185901b17855562000324565b600085815260208120601f198616915b82811015620003c957888601518255948401946001909101908401620003a8565b5085821015620003e85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082198211156200041a57634e487b7160e01b600052601160045260246000fd5b500190565b610c28806200042f6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d7146101d0578063a9059cbb146101e3578063b7b090ee146101f6578063dd62ed3e1461020a57600080fd5b806370a082311461018c57806395d89b41146101b55780639dc29fac146101bd57600080fd5b806323b872dd116100c857806323b872dd14610142578063313ce56714610155578063395093511461016457806340c10f191461017757600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f761021d565b6040516101049190610992565b60405180910390f35b61012061011b366004610a03565b61022c565b6040519015158152602001610104565b6002545b604051908152602001610104565b610120610150366004610a2d565b610244565b60405160128152602001610104565b610120610172366004610a03565b610268565b61018a610185366004610a03565b61028a565b005b61013461019a366004610a69565b6001600160a01b031660009081526020819052604090205490565b6100f7610298565b61018a6101cb366004610a03565b6102a2565b6101206101de366004610a03565b6102ac565b6101206101f1366004610a03565b61032c565b61018a610204366004610ad4565b50505050565b610134610218366004610b40565b61033a565b6060610227610365565b905090565b60003361023a8185856103f7565b5060019392505050565b60003361025285828561051c565b61025d858585610590565b506001949350505050565b60003361023a81858561027b838361033a565b6102859190610b89565b6103f7565b610294828261075e565b5050565b606061022761083d565b610294828261084c565b600033816102ba828661033a565b90508381101561031f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61025d82868684036103f7565b60003361023a818585610590565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461037490610ba1565b80601f01602080910402602001604051908101604052809291908181526020018280546103a090610ba1565b80156103ed5780601f106103c2576101008083540402835291602001916103ed565b820191906000526020600020905b8154815290600101906020018083116103d057829003601f168201915b5050505050905090565b6001600160a01b0383166104595760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610316565b6001600160a01b0382166104ba5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610316565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6000610528848461033a565b9050600019811461020457818110156105835760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610316565b61020484848484036103f7565b6001600160a01b0383166105f45760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610316565b6001600160a01b0382166106565760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610316565b6001600160a01b038316600090815260208190526040902054818110156106ce5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610316565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610705908490610b89565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161075191815260200190565b60405180910390a3610204565b6001600160a01b0382166107b45760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610316565b80600260008282546107c69190610b89565b90915550506001600160a01b038216600090815260208190526040812080548392906107f3908490610b89565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60606004805461037490610ba1565b6001600160a01b0382166108ac5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610316565b6001600160a01b038216600090815260208190526040902054818110156109205760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610316565b6001600160a01b038316600090815260208190526040812083830390556002805484929061094f908490610bdb565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161050f565b600060208083528351808285015260005b818110156109bf578581018301518582016040015282016109a3565b818111156109d1576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109fe57600080fd5b919050565b60008060408385031215610a1657600080fd5b610a1f836109e7565b946020939093013593505050565b600080600060608486031215610a4257600080fd5b610a4b846109e7565b9250610a59602085016109e7565b9150604084013590509250925092565b600060208284031215610a7b57600080fd5b610a84826109e7565b9392505050565b60008083601f840112610a9d57600080fd5b50813567ffffffffffffffff811115610ab557600080fd5b602083019150836020828501011115610acd57600080fd5b9250929050565b60008060008060408587031215610aea57600080fd5b843567ffffffffffffffff80821115610b0257600080fd5b610b0e88838901610a8b565b90965094506020870135915080821115610b2757600080fd5b50610b3487828801610a8b565b95989497509550505050565b60008060408385031215610b5357600080fd5b610b5c836109e7565b9150610b6a602084016109e7565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b9c57610b9c610b73565b500190565b600181811c90821680610bb557607f821691505b602082108103610bd557634e487b7160e01b600052602260045260246000fd5b50919050565b600082821015610bed57610bed610b73565b50039056fea264697066735822122067c4b1c8f198c18cae7b48420b7f12faefd13177517b1d282868664e4fd520ed64736f6c634300080f0033";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<TestERC20>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  override connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}