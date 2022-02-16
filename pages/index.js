import Head from "next/head";
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
  const [total, setTotal] = useState(0)
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
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
      <title>Dented Feeds</title>
      <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Header/>
      <div className="df-section">
      <div className="df-overfow">
        <div className="df-container">
          <div className="df-hero">
            <div className="df-cc"><div className="df-image-wrapper"><img src="/images/DentedFeels_Example.png" alt="" className="df-image"/></div></div>
            <div className="df-wrapper-padding">
              <h1 className="df-header">MINT A DENTED FEEL</h1>
              <p className="df-text">Connecy your Metamask and mint your DentedFeel for 0.1 Eth.</p>
              <div className="df-wrapper-h">
                <div href="" className="df-connect-btn">
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
              <div className="df-divider"><img width="75%" src="/images/DentedFeels_Scribble.svg" loading="lazy" alt=""/></div>
              <div className="df-wrapper-h">
                <a href="#" onClick={() => total > 0 && setTotal(total - 1)} className="df-btn-small">
                  <div className="df-btn-text">-</div>
                </a>
                <a href="#" className="df-wide-rounded">
                  <div className="df-text">Count: {total}</div>
                </a>
                <a href="#" onClick={() => total < 3 && setTotal(total + 1)}  className="df-btn-small">
                  <div className="df-btn-text">+</div>
                </a>
              </div>
                <div className="df-divider"><img width="75%" src="/images/DentedFeels_Scribble.svg" loading="lazy" alt=""/></div>
                <div className="df-wrapper-h">
                  <a href="#" onClick={() => execute()} className="df-mint-btn">
                    <div className="df-text">Mint</div><Toaster
                      toastOptions={{
                        className: '',
                        style: {
                          border: '3px solid #000',
                          padding: '5px',
                          color: '#000',
                        },
                      }}
                    />
                  </a>
                  <a href="https://twitter.com/DentedFeelsNFT" target="_blank" className="df-wide-rounded">
                    <div className="df-text">Total: {0.88 * total}Ξ</div>
                  </a>
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
