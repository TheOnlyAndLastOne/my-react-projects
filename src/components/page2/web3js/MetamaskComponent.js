import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors";
import { getContract } from "./contract";
import { BigNumber } from "@ethersproject/bignumber";

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

  const [value, setValue] = useState(0);

  return (
    <div>
      <div className="flex space-x-3 mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getWeb3reactContext}
        >
          Query Metamask Via Web3-React
        </button>
      </div>

      <div className="flex space-x-3 mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={connectMetamaskSimple}
        >
          Connect Metamask Via Web3-React
        </button>
      </div>

      <div className="flex space-x-3 mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={disconnectMetamaskSimple}
        >
          DisConnect Metamask Via Web3-React
        </button>
      </div>

      <div className="flex space-x-3 mb-4">
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        {value}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={saveValue}
        >
          save value
        </button>
      </div>

      <div className="flex space-x-3 mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={queryValue}
        >
          get value
        </button>
      </div>
    </div>
  );
};

export default MetamaskComponent;
