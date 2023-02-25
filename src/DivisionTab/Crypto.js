import React, { useEffect, useState } from "react";
import "./Crypto.css";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import StarIcon from "@mui/icons-material/Star";
import LockIcon from "@mui/icons-material/Lock";
import Bitcoin from "../Images/bitcoin.png";
import Ethereum from "../Images/ethereum.png";
import Dogecoin from "../Images/dogecoin.png";
import axios from "axios";
import Header from "../Phoenix/Header"
import { Link } from 'react-router-dom'
export default function Crypto() {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then(async (response) => {
        await setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);
  if (!data) return ;
  // <div>Loading...</div>

  return (
    <div>
      <Header/>
      <div className="cryptocontainer">
        <div className="content">
          <h1>
            BUY & <br></br>SELL <span>Crypto</span>
          </h1>
          {/* <p>
            World's biggest Cryptocurrency exchange available on web <br></br>as
            well as mobile phone.
          </p> */}
          <p>Phoenix Labs Crypto Technology Center was created to further blockchain<br></br> research with an emphasis on Crypto. Our technological advances are used <br></br>to help individuals, businesses, organizations, and groups who are interested<br></br> in leveraging innovative technology solutions to help solve real-world business<br></br> problems at scale. We are committed to using intelligent, real-time networks to<br></br> help the continued growth and development of decentralized distributed ledger<br></br> technology.</p>
          {/* <a href="#" className="btn">
            EXPLORE MORE
          </a> */}
          <Link to='/cryptointellicenter/all-coins' className="btn">
            EXPLORE MORE
          </Link>
        </div>
        <div className="coin-list">
          <div className="coin">
            <img src={data[0].image} alt="" />
            <div>
              <h3>${data[0].current_price.toLocaleString()}</h3>
              <p>{data[0].name}</p>
            </div>
          </div>
          <div className="coin">
            <img src={data[1].image} alt="" />
            <div>
              <h3>${data[1].current_price.toLocaleString()}</h3>
              <p>{data[1].name}</p>
            </div>
          </div>
          <div className="coin">
            <img src={data[2].image} alt="" />
            <div>
              <h3>${data[2].current_price.toLocaleString()}</h3>
              <p>{data[2].name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="transactions-in-one-place">
        <div className="buy-manage-currencies">
          <p className="buy-store-sell">Buy, store, sell</p>
          <h3>
            Manage your transactions <br></br>in one place
          </h3>
          <p className="currencies">
            You can buy and sell 150+ cryptocurrencies with 20+ fiat<br></br>{" "}
            currencies using bank transfers on your credit or debit card
          </p>
        </div>
        <div
          className="transactions-image"
          style={{
            display: "flex",
          }}
        >
          <img
            decoding="async"
            width="1404"
            height="804"
            src="https://toka.b-cdn.net/wp-content/uploads/2022/03/Transactions-efg.png"
            class="attachment-full size-full"
            alt=""
          />
        </div>
      </div>
      <section className="deposite-make-crypto">
        <div className="make-crypto">
          <div className="deposite-bitcoinchart">
            <div className="deposite-bitcoinchart-left">
              <p className="earn-cryto">Earn crypto</p>
              <h3>
                Deposite crypto earn<br></br> interest
              </h3>
              <p className="choose-cryptocurrencies">
                Choose from 150+ cryptocurrencies
              </p>
              <div className="percentage-cryptos">
                <div className="percentage-left">
                  <h3>15%</h3>
                  <p>On cryptos</p>
                </div>
                <div className="percentage-right">
                  <h3>40%</h3>
                  <p>On stablecoins</p>
                </div>
              </div>
            </div>
            <div className="deposite-bitcoinchart-right">
              <img
                src="https://toka.b-cdn.net/wp-content/uploads/2022/03/wedgt.png"
                class="attachment-large size-large"
                alt=""
              />
            </div>
          </div>
          {/* <div className="make-cypto-bestprices"></div> */}
          <div className="deposite-bitcoinchart">
            <div className="deposite-bitcoinchart-left">
              <p className="earn-cryto">Benefits</p>
              <h3>
                Make crypto work
                <br></br> harder on you
              </h3>
              <p className="choose-cryptocurrencies">
                Choose from 150+ cryptocurrencies
              </p>
              <div
                className="percentage-cryptos"
                style={{ justifyContent: "center" }}
              >
                <img
                  decoding="async"
                  src="https://toka.b-cdn.net/wp-content/uploads/2022/03/ervress.png"
                  class="attachment-large size-large"
                  alt=""
                  style={{ height: "399px", width: "90%" }}
                />
              </div>
            </div>
            <div className="deposite-bitcoinchart-right">
              <p className="buy-sell">
                You can buy and sell 150+ cryptocurrencies with 20+ fiat
                <br></br> currencies using bank transfers on your credit or
                debit card
              </p>
              <div className="percentage-cryptos">
                <div className="percentage">
                  <div className="percentage-fst">
                    <div className="material-icons">
                      <StarIcon
                        style={{
                          background: "#2CBCA5",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className="best-secure">
                      <h3>Best Prices</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. A, modi voluptatem delectus pariatur eligendi cum
                        dolores totam quia!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="percentage">
                  <div className="percentage-fst">
                    <div className="material-icons">
                      <LockIcon
                        style={{
                          background: "#2CBCA5",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className="best-secure">
                      <h3>Secure & insureds</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. A, modi voluptatem delectus pariatur eligendi cum
                        dolores totam quia!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="percentage">
                  <div className="percentage-fst">
                    <div className="material-icons">
                      <SyncAltIcon
                        style={{
                          background: "#2CBCA5",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className="best-secure">
                      <h3>No trading fees</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. A, modi voluptatem delectus pariatur eligendi cum
                        dolores totam quia!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="transactions-in-one-place">
        <div className="buy-manage-currencies">
          <p className="buy-store-sell">Testimonials</p>
          <h3>What people say</h3>
          <p className="currencies">
            You can buy and sell 150+ cryptocurrencies with 20+ fiat<br></br>{" "}
            currencies using bank transfers on your credit or debit card
          </p>
        </div>
        <div className="transactions-image">
          <div className="percentage">
            <div className="percentage-fst">
              <div className="material-icons">
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
              </div>
              <div className="best-secure">
                <p>
                  Great! Compared to everything else I’ve ever used, this is the
                  best technology.
                </p>
              </div>
              <div className="developer-post-image">
                <div className="developer-post">
                  <h5>Nick Green</h5>
                  <p>Developer</p>
                </div>
                <div className="developer-image">
                  <img
                    decoding="async"
                    src="https://toka.b-cdn.net/wp-content/uploads/2022/02/98-testimonial.png"
                    class="attachment-large size-large"
                    alt=""
                  />
                  {/*  */}
                </div>
              </div>
            </div>
            <div className="percentage-fst">
              <div className="material-icons">
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "3px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "3px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "3px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "3px",
                  }}
                />
              </div>
              <div className="best-secure">
                <p>
                  Great! Compared to everything else I’ve ever used, this is the
                  best technology.
                </p>
              </div>
              <div className="developer-post-image">
                <div className="developer-post">
                  <h5>Dora Adams</h5>
                  <p>HR managerr</p>
                </div>
                <div className="developer-image">
                  <img
                    src="https://toka.b-cdn.net/wp-content/uploads/2022/02/45-testimonial.png"
                    class="attachment-large size-large"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="percentage">
            <div className="percentage-fst">
              <div className="material-icons">
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
              </div>
              <div className="best-secure">
                <p>
                  Great! Compared to everything else I’ve ever used, this is the
                  best technology.
                </p>
              </div>
              <div className="developer-post-image">
                <div className="developer-post">
                  <h5>Nick Green</h5>
                  <p>Developer</p>
                </div>
                <div className="developer-image">
                  <img
                    src="https://toka.b-cdn.net/wp-content/uploads/2022/02/100-testimonial.png"
                    class="attachment-large size-large"
                    alt=""
                  />
                  {/*  */}
                </div>
              </div>
            </div>
            <div className="percentage-fst">
              <div className="material-icons">
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "3px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "3px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "3px",
                  }}
                />
                <StarIcon
                  style={{
                    color: "darkgoldenrod",
                    borderRadius: "50%",
                    marginRight: "3px",
                  }}
                />
              </div>
              <div className="best-secure">
                <p>
                  Great! Compared to everything else I’ve ever used, this is the
                  best technology.
                </p>
              </div>
              <div className="developer-post-image">
                <div className="developer-post">
                  <h5>Dora Adams</h5>
                  <p>HR managerr</p>
                </div>
                <div className="developer-image">
                  <img
                    src="https://toka.b-cdn.net/wp-content/uploads/2022/02/98-testimonial.png"
                    class="attachment-large size-large"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lets-start">
        <div className="lets-investment">
            <div className="every-content">
                <div className="lets">
                    <h3>
                    Let’s start your crypto<br></br> <span>investment</span> now
                    </h3>
                    <p>Choose from 150+ cryptocurrencies</p>
                </div>
                <div className="start-button">
                {/* <a href="#" className="btn"> */}
                  <Link to='#' className="btn">
                  
            Start now
            </Link>
          {/* </a> */}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
