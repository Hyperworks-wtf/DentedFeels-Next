import Head from "next/head";
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { motion, AnimatePresence } from "framer-motion";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import toast, { Toaster } from 'react-hot-toast';
import { injected } from "../components/Connector";

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
    return []
  });

  const {
    active,
    activate,
    chainId,
    account,
    library: provider,
  } = useWeb3React();
  const [notifications, setNotifications] = useState([]);

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await activate(injected);
        setHasMetamask(true);
      } catch (e) {
        console.log(e);
      }
    }
  }
  

  async function execute() {
    if (active) {
      const signer = provider.getSigner();
      const contractAddress = "0x5FbDB23156u78afecb367f032d93F642f64180aa3";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.store(42);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast('Please connect your wallet!');
    }
  }

  return (
    <div>
      <Head>
      <title>DentedFeels - Emotions change, Dreams are forever.</title>
      <link rel="icon" href="../public/favicon.ico"/>
      <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon"/>
      <link href="images/webclip.png" rel="apple-touch-icon"/>
      </Head>
      <Header/>
      <div className="df-section">
      <div className="df-overfow">
        <div className="df-container">
          <div className="df-hero">
            <div className="df-cc"><div style={{ position: "relative", width: "300px", height: "300px" }} className="df-image-wrapper"><Image layout="fill" src="https://media.giphy.com/media/696LCNZyU9mG0eJGKr/giphy.gif" alt="" className="df-image"/></div></div>
            <div className="df-wrapper-padding">
              <h1 className="df-header">MINT A DENTED FEEL</h1>
              <p className="df-text">Connecy your Metamask and mint your DentedFeel for 0.1 Eth.</p>
              <div className="df-wrapper-h">
                <div className="df-connect-btn df-button" style={{userSelect: "none"}}>
                  {hasMetamask ? (
                    active ? (
                      <div className="df-text" onClick={() => connect()} style={{ color: 'green' }}>{`${account?.slice(0, 4)}...${account?.slice(-4)}`}</div>
                    ) : (
                      <div className="df-text" onClick={() => connect()}>Connect!</div>
                    )
                  ) : (
                    <div className="df-text">Please install Metamask</div>
                  )}
                </div>
              </div>
              <div className="df-divider" style={{ position: "relative", width: "75%", height: "20px"}}><img style={{width: "75%",}} src="/images/DentedFeels_Scribble.svg" loading="lazy" alt=""/></div>
              <div className="df-wrapper-h">
                <div onClick={() => total > 0 && setTotal(total - 1)} className="df-btn-small df-button">
                  <div className="df-btn-text" style={{userSelect: "none"}}>-</div>
                </div>
                <div className="df-wide-rounded">
                  <div className="df-text">Count: {total}</div>
                </div>
                <div onClick={() => total < 3 && setTotal(total + 1)}  className="df-btn-small df-button">
                  <div className="df-btn-text" style={{userSelect: "none"}}>+</div>
                </div>
              </div>
              <div className="df-divider" style={{ position: "relative", width: "75%", height: "20px", userSelect: "none"}}><img style={{width: "75%"}} src="/images/DentedFeels_Scribble.svg" loading="lazy" alt=""/></div>
                <div className="df-wrapper-h">
                  <div onClick={() => execute()} className="df-mint-btn df-button">
                    <div className="df-text" style={{userSelect: "none"}}>Mint</div><Toaster
                      toastOptions={{
                        className: '',
                        style: {
                          border: '3px solid #000',
                          padding: '5px',
                          color: '#000',
                        },
                      }}
                    />
                  </div>
                  <div target="_blank" className="df-wide-rounded">
                    <div className="df-text" style={{userSelect: "none"}}>Total: {0.88 * total}Ξ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
    
  );
}
