// import React from 'react'
// import { useMediaQuery } from 'react-responsive'
// import './nftPage.css'

// function OrbitansDetails() {
//     const isBigScreen = useMediaQuery({ query: '(min-width: 1224px)' })
//     const isTablet = useMediaQuery({ query: '(max-width: 1224px)' })
//     const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
//     console.log(isBigScreen, isTablet, isMobile);
//   return (
//         <div className='other-details'>
//           <div className='other-details-top-div'>
//               <div className='other-details-top-div-div'>The Orbitians</div>
//               <p className='other-details-top-div-p'>Minted On Sep 30, 2022</p>
//           </div>
//           <div className='deatils-description'>
//               <p className='deatils-description-heading'>Description</p>
//               <p className='deatils-description-deatils'>
//                     The Orbitians
//                     is a collection of 10,000 unique NFTs on the Ethereum blockchain,

//                     There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.

//                     They live in a metal space machines, high up in the sky and only have one foot on Earth.
//                     These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
//               </p>
//           </div>
//         </div>
//   )
// }

// export default OrbitansDetails

import React, { useEffect } from "react";
import topCreators from "../../topCreators";

function Orbitians() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          margin: "auto",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "60%",
            backgroundColor: "#2B2B2B",
            // paddingLeft: '150px',
            paddingTop: "40px",
          }}
        >
          <span
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "white",
              lineHeight: "1",
            }}
          >
            The Orbitians
          </span>
          <p style={{ fontSize: "22px", color: "#858584", lineHeight: "1" }}>
            Minted On Sep 30, 2022
          </p>
          <div>
            <p
              style={{
                fontSize: "22px",
                color: "#858584",
                fontWeight: "bold",
                marginBottom: "0px",
              }}
            >
              Created By
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src="https://d10srchmli830n.cloudfront.net/1669893332086_9acf00ad-59de-4731-84dc-1477f795d4c7_Avatar-Placeholder.png"
                alt="error"
                style={{ width: "24px", height: "24px" }}
              />
              <p
                style={{
                  fontSize: "22px",
                  color: "white",
                  fontWeight: "bold",
                  lineHeight: "1",
                  marginLeft: "12px",
                  marginTop: "3px",
                }}
              >
                Orbitians
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "22px",
              color: "#858584",
              fontWeight: "bold",
              marginBottom: "0px",
            }}
          >
            Description
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "white",
              // fontWeight: 'bold',
              marginBottom: "0px",
            }}
          >
            The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
            blockchain,
            <br />
            <br /> There are all sorts of beings in the NFT Universe. The most
            advanced and friendly of the bunch are Orbitians.
            <br />
            <br /> They live in a metal space machines, high up in the sky and
            only have one foot on Earth.
            <br /> These Orbitians are a peaceful race, but they have been at
            war with a group of invaders for many generations. The invaders are
            called Upside-Downs, because of their inverted bodies that live on
            the ground, yet do not know any other way to be. Upside-Downs
            believe that they will be able to win this war if they could only
            get an eye into Orbitian territory, so they've taken to make human
            beings their target.
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#858584",
              fontWeight: "bold",
              marginBottom: "0px",
              marginTop: "20px",
            }}
          >
            Details
          </p>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            <img
              src="https://d10srchmli830n.cloudfront.net/1669895786299_abe680f4-6236-48c4-a33e-fe6d185352f6_Globe.png"
              alt="error"
              style={{ width: "32px", height: "32px" }}
            />
            <p
              style={{
                fontSize: "22px",
                color: "white",
                // fontWeight: 'bold',
                lineHeight: "1",
                marginLeft: "12px",
                marginTop: "6px",
                marginBottom: "0px",
              }}
            >
              View on Etherscan
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            <img
              src="https://d10srchmli830n.cloudfront.net/1669895786299_abe680f4-6236-48c4-a33e-fe6d185352f6_Globe.png"
              alt="error"
              style={{ width: "32px", height: "32px" }}
            />
            <p
              style={{
                fontSize: "22px",
                color: "white",
                // fontWeight: 'bold',
                lineHeight: "1",
                marginLeft: "12px",
                marginTop: "6px",
              }}
            >
              View Original
            </p>
          </div>
          <p
            style={{
              fontSize: "22px",
              color: "#858584",
              fontWeight: "bold",
              marginBottom: "0px",
              marginTop: "20px",
            }}
          >
            Tags
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "25% 25% 25% 25%",
              flexDirection: "colomn",
              justifyContent: "space-between",
              marginTop: "10px",
              width: "90%",
              fontSize: "10px",
            }}
          >
            <div
              style={{
                padding: "10px 10px",
                backgroundColor: "#858584",
                borderRadius: "20px",
                fontSize: "10px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Animation
              </span>
            </div>
            <div
              style={{
                padding: "10px 10px",
                backgroundColor: "#858584",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                illustration
              </span>
            </div>
            <div
              style={{
                padding: "10px 10px",
                backgroundColor: "#858584",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                MOON
              </span>
            </div>
            <div
              style={{
                padding: "10px 10px",
                backgroundColor: "#858584",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                MOON
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#2B2B2B",

            paddingTop: "40px",
            width: "40%",
          }}
        >
          <div
            style={{
              padding: "30px",
              borderRadius: "20px",
              backgroundColor: "#3B3B3B",
              width: "82%",
              marginLeft: "auto",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "white",
                marginBottom: "-8px",
              }}
            >
              Auction &nbsp;ends &nbsp;in&nbsp;:
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <p
                  style={{
                    fontSize: "38px",
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "-8px",
                  }}
                >
                  59
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "white",
                    marginBottom: "0px",
                  }}
                >
                  Hours
                </p>
              </div>
              <p
                style={{
                  fontSize: "34px",
                  color: "white",
                  marginBottom: "0px",
                  marginLeft: "15px",
                  fontWeight: "bold",
                }}
              >
                :
              </p>
              <div>
                <p
                  style={{
                    fontSize: "38px",
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "-8px",
                    marginLeft: "10px",
                  }}
                >
                  59
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "white",
                    marginBottom: "0px",
                    marginLeft: "10px",
                  }}
                >
                  Minutes
                </p>
              </div>
              <p
                style={{
                  fontSize: "34px",
                  color: "white",
                  marginBottom: "0px",
                  marginLeft: "15px",
                  fontWeight: "bold",
                }}
              >
                :
              </p>
              <div>
                <p
                  style={{
                    fontSize: "38px",
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "-8px",
                    marginLeft: "10px",
                  }}
                >
                  59
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "white",
                    marginBottom: "0px",
                    marginLeft: "10px",
                  }}
                >
                  Seconds
                </p>
              </div>
            </div>
            <button
              style={{
                width: "100%",
                height: "60px",
                backgroundColor: "#A259FF",
                borderRadius: "20px",
                color: "white",
                fontWeight: "bold",
                border: "0px",
                marginTop: "30px",
                fontSize: "16px",
              }}
            >
              Place Bid
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#2B2B2B",
          width: "80%",
          margin: "auto",
          paddingTop: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              color: "white",
              lineHeight: "1",
            }}
          >
            More From This Artist
          </span>
          <div
            style={{
              backgroundColor: "transparent",
              border: "2px solid",
              borderColor: "#9747FF",
              borderRadius: "20px",

              display: "flex",
              gap: "12px",
              height: "60px",
              justifyContent: "center",
              padding: "0px 50px",
              width: "267px",
              alignItems: "center",
            }}
          >
            <img
              src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/636b66b6426c6d027625b92d/img/arrowright@2x.svg"
              alt="ArrowRight"
              style={{ width: "620x", height: "20px" }}
            />
            <div style={{ fontSize: "16px", color: "white" }}>
              Go To Artist Page
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: "60px",
            display: "grid",
            width: "99%",
            gridTemplateColumns: "33% 33% 33%",
            gap: "2%",
          }}
        >
          {topCreators.map((item, i) => {
            return (
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
            );
          })}
        </div>
        <div style={{ marginBottom: "140px" }}></div>
      </div>
    </div>
  );
}

export default Orbitians;
