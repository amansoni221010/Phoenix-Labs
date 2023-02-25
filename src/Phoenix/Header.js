import React from "react";
import img1 from "../Images/world.png";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Divisions from "./Divisions";
import './Header.css'
import "tippy.js/themes/light.css";

import { Link } from "react-router-dom";


const Container = styled(Box)`
  display: flex;
  width: 100%;
  height: 5rem;
  // background-color: #000000;
justify-content: space-between ;
  align-items: center;
  text-align: center;
  position: fixed;
  background: rgba(0,0,0,0.5);

`;
const Component1 = styled(Box)`
display: flex;
justify-content: space-between;
align-items: flex-start;
  // margin-left: 40px;
  padding-left: 120px;
  width: 60%;
  flex-direction: column;

  
`;
const Component2=styled(Box)`
margin-right: 40px;
`
// const Btn=styled()`
// color: #fff;
// font-weight: 600;
// text-align: center;
// justify-content: center;
// align-items: center;


// `
export default function Header() {
  return (
    
      <Container>
        <Component1 className="first">
        <Link to="/"  style={{
          textDecoration: "none"
        }}>
          <img
            src={img1}
            alt="no image"
            style={{
              height: "45px",
              borderRadius: "100%",
              paddingLeft: "15px",
              marginTop: "10px",
              cursor: 'pointer'
            }}
          />
          </Link>
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
        </Component1>
        <Link to="/"  style={{
          textDecoration: "none"
        }}>
       
        <Box className="second">
         <button>Home</button>
        </Box>
        </Link>
        <Link to="/vision"  style={{
          textDecoration: "none"
        }}>
        <Box className="third">
          <button>Vision</button>
        </Box>
        </Link>
        
        <Box className="fourth">
          <Tippy content={<Divisions></Divisions>}
          theme="light"
          interactive={true}
          // visible={true}
          offset={[5, 18]}
          // arrow={false}
          >
          <button>Divisions</button>
          </Tippy>
        
        </Box>

        <Box className="fifth">
          <button>Projects</button>
        </Box>
        <Component2 className="sixth">
          
          <button>Login</button>
        </Component2>
       
      </Container>
   
  );
}
