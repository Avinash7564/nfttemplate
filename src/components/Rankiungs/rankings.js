import { data } from "../../data";
import { Tabs } from "antd";
import styles from "./rankings.module.css";

export default function Rankings() {
  return (
    <div
      className="App font-link"
      style={{
        width: "60%",
        margin: "auto",
        background: "#2b2b2b",
        textAlign: "left",
        padding: "0px 25px",
        fontWeight: "400",
        color: "white",
      }}
    >
      <h1>Top Creators</h1>
      <p style={{ marginBottom: "48px" }}>
        Check out top ranking NFT artists on the NFT Marketplace.
      </p>
      <Tabs
        defaultActiveKey="1"
        tabBarStyle={{ fontFamily: `'Space Mono', monospace`, color: "grey" }}
      >
        <Tabs.TabPane tab="Today" key="1">
          <div
            className="font-link"
            style={{
              display: "flex",
              padding: "0px 10px",
              borderRadius: "20px",
              background: "#2B2B2B",
              marginBottom: "15px",
              justifyContent: "space-between",
              alignItems: "center",
              color: "grey",
              border: "0.1px solid grey",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "25px",
                  width: "25px",
                  borderRadius: "50%",
                  marginRight: "15px",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#2b2b2b",
                }}
              >
                <p>#</p>
              </div>
              <p
                style={{
                  marginLeft: "10px",
                  fontSize: "11px",
                }}
              >
                Image
              </p>
              <p
                style={{
                  marginLeft: "30px",
                  fontSize: "11px",
                }}
              >
                Artist Name &nbsp; &nbsp; &nbsp; &nbsp;
              </p>
            </div>
            <p style={{ fontSize: "11px" }}>Change</p>
            <p style={{ fontSize: "11px" }}>NFTs Sold</p>
            <p style={{ fontSize: "11px" }}>Volume</p>
          </div>
          <div className="font-link">
            {data.map((item, i) => (
              <div className={styles.rankingDetails}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: "25px",
                      width: "25px",
                      color: "white",
                      borderRadius: "50%",
                      marginRight: "15px",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#2b2b2b",
                    }}
                  >
                    <p style={{ color: "grey" }}>{i + 1}</p>
                  </div>
                  <img
                    src={item.image_url}
                    alt="Girl"
                    width="50px"
                    height="50px"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <p
                    style={{
                      marginLeft: "15px",
                      fontSize: "22px",
                      color: "white",
                      fontWeight: "400",
                    }}
                  >
                    {item.artist}
                  </p>
                </div>
                <p style={{ color: "#00AC4F", fontSize: "22px" }}>
                  {item.change}
                </p>
                <p style={{ fontSize: "22px" }}>{item.nft}</p>
                <p style={{ fontSize: "22px" }}>{item.volume}</p>
              </div>
            ))}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="This Week" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="This Month" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
        <Tabs.TabPane tab="All Time" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
