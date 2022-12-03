import React from "react";
import { Route, Routes } from "react-router-dom";
import Rankings from "../Rankiungs/rankings";
import NftPage from "../nftPage/nftPage";
import Loginsignup from "../loginSingup/loginsignup";
import LandingPage from "../landinPage/landingPage";
import ConnectWallet from "../connectWallet/connectWallet";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/rankings" element={<Rankings />} />
        <Route exact path="/loginsignup" element={<Loginsignup />} />
        <Route exact path="/nftpage" element={<NftPage />} />
        <Route exact path="/connectWallet" element={<ConnectWallet />} />
      </Routes>
    </>
  );
};

export default Routing;
