import './App.css';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
import React, { useEffect,useState } from 'react';
var ReactDOM = require('react-dom');

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  rpc: {
    65: "https://bsc-dataseed.binance.org/"
  },
  // qrcode: true,
  qrcodeModalOptions: {
    mobileLinks: [
      "metamask",
    ],
  },
});



function App() {

  const [address,setAddress] = useState("Address");
  useEffect(() => {
    setWallet();
  }, []);

  const setWallet = async () =>{
    const output = await provider.enable();
    

   const web3Provider = new providers.Web3Provider(provider);

   const signer = web3Provider.getSigner();
   console.log(signer);
   setAddress(signer);

  }

  
  
  return (
    <div className="App">
    <h1 id="root">{address}</h1>
      
    </div>
  );
}

export default App;
