import React from "react";
import "./landingPage.css";
import Heading from "./heading";
import TopCreators from "./topCreators";

function LandingPage() {
  return (
    <div style={{ backgroundColor: "#2B2B2B", height: "100%" }}>
      <Heading />
      <TopCreators />
    </div>
  );
}

export default LandingPage;
