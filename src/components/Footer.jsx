import React from 'react'
import './Styles.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
          <div className="footer-upper">
            <div className="footer-left">
              <div className="footer-logo">
                <img
                    src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/storefront@2x.svg"
                    alt="logo"
                    height='30px'
                    style={{marginTop: '22px'}}
                />
                <p>NFT Marketplace</p>
              </div>
              <p>NFT marketplace UI created with Anima for Figma.</p>
              <p>Join our community</p>
              <div className="footer-icons">
                <i class="bi bi-discord icons"></i>
                <i class="bi bi-youtube icons"></i>
                <i class="bi bi-twitter icons"></i>
                <i class="bi bi-instagram"></i>
              </div>
            </div>
            <div className="footer-mid">
              <p>Explore</p>
              <p>Marketplace</p>
              <p>Rankings</p>
              <p>Connect a wallet</p>
            </div>
            <div className="footer-right">
              <p>Join Our Weekly Digest</p>
              <p>Get exclusive promotions & updates straight to your inbox.</p>
              <div className="input">
                <input type="text" placeholder='Enter your email here' />
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-lower">
          Ⓒ NFT Market. Use this template freely.
          </div>
      </div>
    </div>
  )
}