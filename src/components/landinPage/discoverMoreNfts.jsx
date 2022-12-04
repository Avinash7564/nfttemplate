import React from "react";
import topCreators from "../../topCreators";

function DiscoverMoreNfts() {
  const data = topCreators.slice(0, 3) || [];
  return (
    <>
      <div className="landing-trending-header">
        <h1>Discover More Nfts</h1>
        <div className="nft-flex top-creators-flag-view">
          <p>Explore New Trending Nfts</p>
          <button className="top-creators-flag-view-rankings">
            <span>View rankings</span>
          </button>
        </div>
      </div>
      <div
        style={{
          paddingTop: "60px",
          display: "grid",
          width: "60%",
          gridTemplateColumns: "32% 32% 32%",
          gridGap: "2%",
          margin: "auto",
          marginBottom: "20px",
        }}
      >
        {data.map((item, index) => {
          return (
            <div>
              <div
                style={{
                  backgroundColor: "#3B3B3B",
                  borderRadius: "20px",
                }}
                className="top-craetors-card"
              >
                <img
                  src={item.img}
                  alt="Image Placeholder"
                  style={{ width: "100%", height: "65%" }}
                />
                <div style={{ padding: "10px 10px 10px 20px" }}>
                  <p
                    style={{
                      fontSize: "22px",
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    {item.creatorName}
                  </p>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      src={item.img}
                      alt="error"
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        color: "white",
                        marginLeft: "12px",
                        marginTop: "0px",
                      }}
                    >
                      Orbitans
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "30px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#858584",
                        }}
                      >
                        Price
                      </div>
                      <div style={{ fontSize: "12px", color: "white" }}>
                        {item.totalSales}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#858584",
                        }}
                      >
                        Highest Bid
                      </div>
                      <div style={{ fontSize: "12px", color: "white" }}>
                        1.63 ETH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DiscoverMoreNfts;
