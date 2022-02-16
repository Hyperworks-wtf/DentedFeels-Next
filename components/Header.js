import React from 'react'

const Header = () => (
  <>
    <div className="df-navbar">
        <div className="df-navbar-wrapper w-nav">
        <div className=" df-nav-grid">
            <a href="#" className="df-logo"><img src="/images/DentedFeels_Logo.png" loading="lazy" alt="" className="df-logo-img"/></a>
            <div className="df-navbar-content">
            <a href="https://opensea.io" rel="noreferrer" target="_blank" className="df-btn-small df-btn-none w-inline-block"><img src="/images/opensea.svg" loading="lazy" alt="" className="df-img-small"/></a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="df-btn-small df-btn-none w-inline-block"><img src="/images/discord.svg" loading="lazy" alt="" className="df-img-small"/></a>
            <a href="https://twitter.com/DentedFeelsNFT" rel="noreferrer" target="_blank" className="df-btn-small df-btn-none w-inline-block"><img src="/images/twitter.svg" loading="lazy" alt="" className="df-img-small"/></a>
            <a  href="https://dentedfeels.com" className="df-btn-menu w-nav-button">
                <div className="text-menu on">Home</div>
            </a>
            </div>
        </div>
        </div>
    </div>
  </>
)

export default Header