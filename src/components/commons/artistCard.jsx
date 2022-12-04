import React from "react";

function ArtistCard(props) {
  const { img = "", creatorName = "", totalSales = "", index } = props;
  return (
    <div className="top-craetors-card">
      <div
        style={{
          display: "flex",
          height: "30px",
          width: "30px",
          color: "white",
          borderRadius: "50%",
          marginRight: "15px",
          alignItems: "center",
          justifyContent: "center",
          background: "#2b2b2b",
          position: "absolute",
          marginTop: "10px",
          marginLeft: "5px",
        }}
      >
        <p style={{ color: "grey" }}>{index + 1}</p>
      </div>
      <div className="top-creators">
        <div className="top-creators-img">
          <img src={img} alt="top-craetors" className="top-creators-img" />
        </div>
        <h2 style={{ margin: "0px", marginTop: "10px" }}>{creatorName}</h2>
        <p style={{ marginTop: "10px", display: "flex" }}>
          <span style={{ color: "grey" }}>Total Sales:</span>
          {totalSales}
        </p>
      </div>
    </div>
  );
}

export default ArtistCard;
