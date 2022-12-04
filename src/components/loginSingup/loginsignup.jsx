import React from "react";
import "./loginsinup.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";

function Loginsignup() {
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleAdd = () => {
    if (pass === confirmPass) {
      let body = {
        name,
        mail,
        pass,
        confirmPass,
      };
      localStorage.setItem("user-name", JSON.stringify(body));
      setName("");
      setEmail("");
      setPass("");
      setConfirmPass("");
    } else {
      alert("Password and Confirm Password did'nt match");
    }
  };

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
          Welcome! Enter Your Details And <br />
          Start Creating, Collecting And Selling Nfts.
        </p>
        <div className="login-page-inputBox">
          <div className="login-page-icon">
            <CgProfile />
          </div>
          <input
            type="text"
            value={name}
            placeholder="Username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="login-page-inputBox">
          <div className="login-page-icon">
            <AiOutlineMail />
          </div>
          <input
            type="text"
            value={mail}
            placeholder="E-Mail Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="login-page-inputBox">
          <div className="login-page-icon">
            <MdLockOutline />
          </div>
          <input
            type="password"
            value={pass}
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></input>
        </div>
        <div className="login-page-inputBox">
          <div className="login-page-icon">
            <MdLockOutline />
          </div>
          <input
            type="password"
            value={confirmPass}
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="login-page-create-button"
          onClick={() => {
            handleAdd();
          }}
        >
          <span>Create Account</span>
        </button>
      </div>
    </div>
  );
}

export default Loginsignup;
