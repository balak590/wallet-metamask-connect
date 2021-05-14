import './App.css';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
import React, { useEffect } from 'react';

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  rpc: {
    1: "https://bsc-dataseed.binance.org/"
  },
  qrcode: false,
  qrcodeModalOptions: {
    mobileLinks: [
      "metamask",
    ],
  },
});



function App() {

  useEffect(() => {
    setWallet();
  }, []);

  const setWallet = async () =>{
    await provider.enable();

   const web3Provider = new providers.Web3Provider(provider);
  }

  
  
  return (
    <div className="App">
    
      
    </div>
  );
}

export default App;
