import React from "react";
import "../loginSingup/loginsinup.css";

function ConnectWallet() {
  return (
    <div className="login-page">
      <div className="login-page-image">
        <img
          src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-158@1x.png"
          alt="Image Placeholder"
          style={{ width: "100%", height: "691px" }}
        />
      </div>
      <div className="connect-wallet-content">
        <h1>Connect Wallet</h1>
        <p>
          Choose a wallet you want to connect. <br />
          There are several wallet providers.
        </p>
        <div className="connect-wallet-page-inputBox">
          <img
            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e7a0c4007a135b1516473/img/metamask@2x.svg"
            alt="ImagePlaceHolder"
          />
          <span>Metmask</span>
        </div>
        <div className="connect-wallet-page-inputBox">
          <img
            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e7a0c4007a135b1516473/img/walletconnect@2x.svg"
            alt="ImagePlaceHolder"
          />
          <span>Wallet Connect</span>
        </div>
        <div className="connect-wallet-page-inputBox">
          <img
            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e7a0c4007a135b1516473/img/coinbase@2x.svg"
            alt="ImagePlaceHolder"
          />
          <span>Coinbase</span>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
