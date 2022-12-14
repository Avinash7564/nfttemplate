import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";
import { BiMenu } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="nav-left">
          <img
            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/storefront@2x.svg"
            alt="logo"
            height="30px"
            style={{ marginTop: "18px" }}
          />
          <p style={{ color: "#ffffff" }}>NFT Marketplace</p>
        </div>
      </Link>
      <div className="nav-right-icon">
        <BiMenu />
      </div>
      <div className="nav-right">
        <Link to="/nftpage">
          <h6 style={{ color: "white" }}>Trending Collection</h6>
        </Link>
        <Link to="/rankings">
          <h6 style={{ color: "white" }}>Rankings</h6>
        </Link>
        <Link to="/connectWallet">
          <h6 style={{ color: "white" }}>Connect a wallet</h6>
        </Link>
        <Link to="/loginsignup">
          <button className="nav-right-button">
            <i class="bi bi-person"></i> <strong>sign up</strong>
          </button>
        </Link>
      </div>
    </div>
  );
};
