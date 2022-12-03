import React from "react";
import "./loginsinup.css";

function Loginsignup() {
  return (
    <div className="login-page">
      <div className="login-page-image">
        <img
          src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-163@1x.png"
          alt="Image Placeholder"
          style={{ width: "100%", height: "691px" }}
        />
      </div>
      <div className="login-page-content">
        <h1>Create Account</h1>
        <p>
          Welcome! Enter Your Details And Start Creating, Collecting And Selling
          Nfts.
        </p>
        <div className="login-page-inputBox">
          <i></i>
          <input type="text" placeholder="Username"></input>
        </div>
        <div className="login-page-inputBox">
          <i></i>
          <input type="text" placeholder="E-Mail Address"></input>
        </div>
        <div className="login-page-inputBox">
          <i></i>
          <input type="text" placeholder="Password"></input>
        </div>
        <div className="login-page-inputBox">
          <i></i>
          <input type="text" placeholder="Confirm Password"></input>
        </div>
        <button className="login-page-create-button">
          <span>Create Account</span>
        </button>
      </div>
    </div>
  );
}

export default Loginsignup;
