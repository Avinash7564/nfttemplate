import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/"><div className="nav-left">
        <img
          src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/storefront@2x.svg"
          alt="logo"
          height='30px'
        style={{marginTop: '18px'}}
        />
        <p>NFT Marketplace</p>
      </div></Link>
      <div className="nav-right">
        <Link to="/nftpage"><h6 style={{color: 'white'}}>Marketplace</h6></Link>
        <Link to="/rankings"><h6 style={{color: 'white'}}>Rankings</h6></Link>
        <h6>Connect a wallet</h6>
        <Link to="/loginsignup"><button className="nav-right-button"><i class="bi bi-person"></i>{" "}{" "}{" "}{" "}<strong>sign up</strong></button></Link>
      </div>
    </div>
  );
};