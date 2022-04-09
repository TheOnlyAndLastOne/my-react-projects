import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import MetamaskComponent from "./MetamaskComponent";

const Web3jPage = () => {
  const getLibrary = (provider) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 15000;
    return library;
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetamaskComponent />
    </Web3ReactProvider>
  );
};

export default Web3jPage;
