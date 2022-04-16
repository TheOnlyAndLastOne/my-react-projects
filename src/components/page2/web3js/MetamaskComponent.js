import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors";
import { getContract } from "./contract";
import { BigNumber } from "@ethersproject/bignumber";
import { parseEther } from "@ethersproject/units";
import { width } from "@mui/system";

const MetamaskComponent = () => {
  //connector, library, chainId, account, activate, deactivate
  const web3reactContext = useWeb3React();

  //web3react metamask
  const connectMetamaskSimple = async () => {
    try {
      await web3reactContext.activate(injected);
      console.log("connect success!");
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnectMetamaskSimple = () => {
    try {
      web3reactContext.deactivate();
      console.log("disconnect success!");
    } catch (ex) {
      console.log(ex);
    }
  };

  const getWeb3reactContext = () => {
    console.log(web3reactContext);
  };

  const queryMoney = () => {
    console.log(web3reactContext.account);
  };

  const saveValue = async () => {
    const myContract = getContract(
      web3reactContext.library,
      web3reactContext.account
    );

    const response = await myContract.store(value);
    console.log(response);
  };

  const queryValue = async () => {
    const myContract = getContract(
      web3reactContext.library,
      web3reactContext.account
    );

    const response = await myContract.retrieve();
    console.log(response);
    console.log(response.toNumber());
  };

  const sendEther = async () => {
    const signer = web3reactContext.library
      .getSigner(web3reactContext.account)
      .connectUnchecked();
    console.log(signer);
    const res = await signer.sendTransaction({
      to: toAccount,
      value: parseEther(ether),
    });
    console.log(res);
    console.log(`success send account ${toAccount} ${ether} ether`);
  };

  const [value, setValue] = useState(0);
  const [ether, setEther] = useState(0);
  const [toAccount, setToAccount] = useState(0);
  return (
    <div>
      <div className="flex space-x-3 mb-4 ml-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getWeb3reactContext}
        >
          Query Metamask Via Web3-React
        </button>
      </div>

      <div className="flex space-x-3 mb-4 ml-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={connectMetamaskSimple}
        >
          Connect Metamask Via Web3-React
        </button>
      </div>

      <div className="flex space-x-3 mb-4 ml-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={disconnectMetamaskSimple}
        >
          DisConnect Metamask Via Web3-React
        </button>
      </div>

      <div className="flex space-x-3 mb-4 ml-4">
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        {value}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={saveValue}
        >
          save value
        </button>
      </div>

      <div className="flex space-x-3 mb-4 ml-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={queryValue}
        >
          get value
        </button>
      </div>

      <div className="flex space-x-3 mb-4 ml-4">
        <input
          type="text"
          placeholder="to account"
          onChange={(e) => setToAccount(e.target.value)}
          className="w-[450px] border-2"
        />
        <input
          type="text"
          placeholder="ether count"
          onChange={(e) => setEther(e.target.value)}
          className="border-2"
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={sendEther}
        >
          send ether
        </button>
      </div>
    </div>
  );
};

export default MetamaskComponent;
