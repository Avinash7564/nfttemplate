import React from 'react'
import topCreators from "../../topCreators";

function LandingPage() {
  return (
    <div style={{ backgroundColor: "#2B2B2B", height: "100%" }}>
      <div className="top-creators-div">
        {topCreators.map((creators, index) => {
          const { img = "", creatorName = "", totalSales = "" } = creators;
          return (
            <div className="top-craetors-card">
              <div
                style={{
                  display: "flex",
                  height: "45px",
                  width: "45px",
                  color: "white",
                  borderRadius: "50%",
                  marginRight: "15px",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#2b2b2b",
                  position: "absolute",
                }}
              >
                <p style={{ color: "grey" }}>{index + 1}</p>
              </div>
              <div className="top-creators">
                <div className="top-creators-img">
                  <img
                    src={img}
                    alt="top-craetors"
                    className="top-creators-img"
                  />
                </div>
                <h2 style={{ margin: "0px", marginTop: "10px" }}>
                  {creatorName}
                </h2>
                <p style={{ marginTop: "10px", display: "flex" }}>
                  <span style={{ color: "grey" }}>Total Sales: &nbsp;</span>{" "}
                  {totalSales}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  )
}

export default LandingPage