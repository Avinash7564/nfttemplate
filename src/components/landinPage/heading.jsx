import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

function Heading() {
  return (
    <div className="landing-header">
      <div className="top-headers">
        <div className="top-headers-content">
          <h1>Discover Digital Art & Collect Nfts</h1>
          <p>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>
        <Link to="/loginsignup" style={{ textDecoration: "none" }}>
          <button className="top-headers-content-button">
            <span>Get Started</span>
          </button>
        </Link>
        <div className="top-headers-content-creators">
          <div>
            <h2>240k+</h2>
            <p>Total Sales</p>
          </div>
          <div>
            <h2>175k+</h2>
            <p>Auctions</p>
          </div>
          <div>
            <h2>240k+</h2>
            <p>Artists</p>
          </div>
        </div>
      </div>
      <div className="top-headers top-header-image">
        <img
          src="	https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
          alt="Image Placeholder"
          style={{ height: "510px" }}
        />
      </div>
    </div>
  );
}

export default Heading;
