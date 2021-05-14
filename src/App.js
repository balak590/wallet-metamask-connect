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

  const [address,setAddress] = useState("Address");
  useEffect(() => {
    setWallet();
  }, []);

  const setWallet = async () =>{
    await provider.enable();
    

   //const web3Provider = await new providers.Web3Provider(provider);

   const web3 = new Web3(provider);

   const accounts = await web3.eth.getAccounts();

  //  const signer = web3Provider.getSigner();
 //  console.log(signer);
   setAddress("Adress:: "+accounts[0]); 

  }

  
  
  return (
    <div className="App">
    <h1 id="root">{address}</h1>
      
    </div>
  );
}

export default App;
