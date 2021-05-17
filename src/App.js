import './App.css';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
import React, { useEffect,useState } from 'react';
import Web3 from "web3";


//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  rpc: {
    1: "https://bsc-dataseed.binance.org/"
  },
  qrcode: true,
  qrcodeModalOptions: {
    mobileLinks: [
      "metamask",
    ],
  },
});



function App() {

  const [address,setAddress] = useState("Click To Connect");
  useEffect(() => {
    setWallet();
  }, []);

  const setWallet = async () =>{
    await provider.enable();

   const web3 = new Web3(provider);

   const accounts = await web3.eth.getAccounts();
   
   setAddress("Address#"+accounts[0]); 

  }

  
  
  return (
    <div className="App">
    <h1 id="root">{address}</h1>
      
    </div>
  );
}

export default App;
