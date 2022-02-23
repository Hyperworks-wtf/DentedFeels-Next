import React, { useState } from 'react';
import { AccountButton } from './components/AccountButton';
import MintButton from './components/MintButton';
import Header from './components/Header';
import Footer from './components/Footer';
import DentedGif from './assets/images/DentedFeels_Mint.gif'
import DentedScribble from './assets/images/DentedFeels_Scribble.svg'
import './styles/globals.css'
import { Toaster } from 'react-hot-toast';

function App() {
  const [total, setTotal] = useState(1);
  
  return (
    <div className="App">
      <Toaster toastOptions={{className: '',style: {border: '3px solid #000', padding: '5px', color: '#000',},}}/>
        <div>
      <Header/>
      <div className="df-section">
      <div className="df-overfow">
        <div className="df-container">
          <div className="df-hero">
            <div className="df-cc"><div style={{ position: "relative"}} className="df-image-wrapper"><img src={DentedGif} alt="" className="df-image"/></div></div>
            <div className="df-wrapper-padding">
              <h1 className="df-header">Mint a DentedFeel</h1>
              <p className="df-text">Connect your Metamask and mint your DentedFeel for <span className="df-span-a1">0.11 Eth</span></p>
              <div className="df-wrapper-h">
   
                  <AccountButton/>
              
              </div>
              <div className="df-divider" style={{ position: "relative", width: "75%", height: "20px"}}><img style={{width: "75%",}} src={DentedScribble} alt=""/></div>
              <div className="df-wrapper-h">
                <div onClick={() => total > 0 && setTotal(total - 1)} className="df-btn-small df-button">
                  <div className="df-btn-text" style={{userSelect: "none"}}>-</div>
                </div>
                <div className="df-wide-rounded">
                  <div className="df-text">Count: {total}</div>
                </div>
                <div onClick={() => total < 2 && setTotal(total + 1)}  className="df-btn-small df-button">
                  <div className="df-btn-text" style={{userSelect: "none"}}>+</div>
                </div>
              </div>
              <div className="df-divider" style={{ position: "relative", width: "75%", height: "20px", userSelect: "none"}}><img style={{width: "75%"}} src={DentedScribble} alt=""/></div>
                <div className="df-wrapper-h">
                  <MintButton amount={total}>mint</MintButton>
                  <div className="df-wide-rounded">
                    <div className="df-text" style={{userSelect: "none"}}>Total: {0.11 * total}Ξ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
