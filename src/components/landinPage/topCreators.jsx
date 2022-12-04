import React from "react";
import { Link } from "react-router-dom";
import topCreators from "../../topCreators";
import "./landingPage.css";
import { IoRocketOutline } from "react-icons/io5";
import ArtistCard from "../../components/commons/artistCard";

function TopCreators() {
  return (
    <div style={{ marginTop: "80px" }}>
      <div className="landing-trending-header">
        <h1>Top Creators</h1>
        <div className="nft-flex top-creators-flag-view">
          <p>Checkout Top Rated Creators On The Nft Marketplace</p>
          <Link to="/rankings">
            <button className="top-creators-flag-view-rankings">
              <IoRocketOutline />
              <span>View rankings</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="top-creators-div">
        {topCreators.map((creators, index) => {
          const { img = "", creatorName = "", totalSales = "" } = creators;
          return (
            <ArtistCard
              img={img}
              creatorName={creatorName}
              totalSales={totalSales}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TopCreators;
