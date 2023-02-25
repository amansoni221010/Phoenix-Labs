
import styled from "@emotion/styled";
// import { red } from "@mui/material/colors";
import React, { useState } from "react";
// import {rgbValue} from "./helper";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import Header from "./Header";


const markers = [
  {
    markerOffset: -15,
    name: "Sau Paulo",
    coordinates: [-58.3816, -34.6037],
  },
  {
    markerOffset: -15,
    name: "Melbourne",
    coordinates: [144.963058, -37.813629],
  },
  {
    markerOffset: 25,
    name: "Dhaka",
    coordinates: [90.412521, 23.810331],
  },
  {
    markerOffset: 25,
    name: "San Francisco",
    coordinates: [-122.419418, 37.774929],
  },
];

const geoUrl = "/features.json";


export default function Map() {
    const [content,setContent]=useState("");
    
  return (
    <>
    <Header/>
    <div
      className="to"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 7%"
        
      }}
    >
        
      
      <ReactTooltip>
        {content}
      </ReactTooltip>
      <div
        style={{
          width: "100%",
          borderStyle: "double",
          marginTop: "60px"
        }}
      >
        <ComposableMap data-tip="">
          <ZoomableGroup zoom={1}>
            {" "}
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo}  onMouseEnter={()=>{
                    const { name }= geo.properties;
                    setContent(`${name}`);

                  }} 
                  onMouseLeave={()=>{
                    setContent("");
                  }}
                  style={{
                    hover:{
                        fill: "#F53",
                        outline: 'none',
                    }
                  }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {name}
                </text>
              </Marker>
            ))}
            <Annotation subject={[2.3522, 48.8566]} dx={-90}
            dy={-30}
            connectorProps={{
                stroke: "#FF5933",
                strokeWidth: 3,
                 strokeLinecap: "round",
            }}
            >
             <text 
             x='-8'
             textAnchor="end"
             alignmentBaseline="middle"
             fill="#F53"
             >
                {"Paris"}
                </text>   
            </Annotation>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
    </>
  );
}
