import React from "react";
// import img1 from
import './home.css'
import img1 from "../Images/world.png";
import { Link } from "react-router-dom";
import { textAlign } from "@mui/system";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      
      <div className="main_div">
        <header className="flex ">
          <nav className="flex">
            {/* <span className="logo">
              <img src={img1} alt="" />
              
            </span> */}
            <div className="header__first">
            <img
              src={img1}
              alt="world logo"
            />
            <div className="header__first1">
              <span
                style={{
                  fontSize: "11px",
                  color: "white",
                  fontStyle: "italic",
                  fontWeight: "600",
                  marginRight: "2px",
                }}
              >
                Phoenix
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "#ffe500",
                  fontStyle: "italic",
                  fontWeight: "600",
                  marginRight: "2px",
                }}
              >
                Labs
              </span>
             
            </div>
          </div>

            <div
              className="headerBtn"
              style={{
                marginRight: "40px",
              }}
            >
              <span className="language">
                <select name="" id="">
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </span>
              <button className="btn1">Sign in</button>
              <Link to="/map">
              <span className="world">
              <img
              src={img1}
              alt="world logo"
            />
              </span>
              </Link>
            </div>
          </nav>
        </header>
        <main >

          <div className="content">
          <h1>Our Global Network</h1>
          <p className="first_para">Phoenix Labs operates a high-growth platform that enables our global network to innovate and execute</p>
          <p className="second_para">We build, expand, and improve upon world-class AI, Crypto, and web/mobile application initiatives.</p>

          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
