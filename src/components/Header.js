import React from 'react'
import opensea from '../assets/images/opensea.svg'
import discord from '../assets/images/discord.svg'
import twitter from '../assets/images/twitter.svg'
import home from '../assets/images/home.svg'

const Header = () => (
  <>
    <div className="df-navbar">
        <div className="df-navbar-wrapper w-nav">
        <div className=" df-nav-grid">
            <a href=" " className="df-logo">DentedFeels</a>
            <div className="df-navbar-content">
            <a href="https://opensea.io" rel="noreferrer" target="_blank" className="df-btn-small df-btn-none w-inline-block"><img src={opensea} loading="lazy" alt="" className="df-img-small"/></a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="df-btn-small df-btn-none w-inline-block"><img src={discord} loading="lazy" alt="" className="df-img-small"/></a>
            <a href="https://twitter.com/DentedFeelsNFT" rel="noreferrer" target="_blank" className="df-btn-small df-btn-none w-inline-block"><img src={twitter} loading="lazy" alt="" className="df-img-small"/></a>
            <a  href="https://dentedfeels.com" className="df-btn-menu w-nav-button">
                <img width={"20px"} height={"20px"} src={home} loading="lazy" alt="" className="df-img-small"/>
            </a>
            </div>
        </div>
        </div>
    </div>
  </>
)

export default Header