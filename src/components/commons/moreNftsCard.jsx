import React from "react";

function MoreNftsCard(props) {
  const { img = "", creatorName = "", totalSales = "", index = "" } = props;
  return (
    <div key={index}>
      <div
        style={{
          backgroundColor: "#3B3B3B",
          borderRadius: "20px",
          marginTop: "20px",
        }}
        className="top-craetors-card"
      >
        <img
          src={img}
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
            {creatorName}
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={img}
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
                {totalSales}
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
              <div style={{ fontSize: "12px", color: "white" }}>1.63 ETH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreNftsCard;
