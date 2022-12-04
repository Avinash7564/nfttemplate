import React from "react";
import topCreators from "../../topCreators";
import { AiOutlineEye } from "react-icons/ai";
import MoreNftsCard from "../commons/moreNftsCard";

function DiscoverMoreNfts() {
  const data = topCreators.slice(0, 3) || [];
  return (
    <>
      <div className="landing-trending-header">
        <h1>Discover More Nfts</h1>
        <div className="nft-flex top-creators-flag-view">
          <p>Explore New Trending Nfts</p>
          <button className="top-creators-flag-view-rankings">
            <AiOutlineEye />
            <span>View rankings</span>
          </button>
        </div>
      </div>
      <div className="top-creators-card-top">
        {data.map((item, index) => {
          const { img = "", creatorName = "", totalSales = "" } = item;
          return (
            <MoreNftsCard
              img={img}
              creatorName={creatorName}
              totalSales={totalSales}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default DiscoverMoreNfts;
