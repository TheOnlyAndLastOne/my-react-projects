import { Contract } from "@ethersproject/contracts";

export const contractAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
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
];

export const contractAddress = "0xDF16543ae4d89528350c676a8334b4F535C56EB4";

// respon 测试网络
export const getContract = (library, account) => {
  const signer = library.getSigner(account).connectUnchecked();
  var contract = new Contract(contractAddress, contractAbi, signer);
  return contract;
};
