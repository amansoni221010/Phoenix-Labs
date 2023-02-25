import React from "react";
import Header from "./Header";
import "./Vision.css";
import img1 from '../Images/vision.png'
import vision1 from '../Images/vision1.avif'
import vision2 from '../Images/vision2.avif'
import GppGoodSharpIcon from '@mui/icons-material/GppGoodSharp';

export default function Vision() {
  return (

    <div>
       <Header />
      
       
      
          <div className="visioncontent">
           <div className="content-left">
            <h1>We have innovative team to take care of your preferences</h1>

           </div>
           <div className="content-right">
            <img src={img1} alt="" />
           </div>
          </div>
          <div className="about-content">
            <div className="about-header">
              <h1>About Pheonix Labs</h1>
            </div>
            <div className="about-mission-vision">
               <div className="about-img">
              
                  <img src={vision1} alt="" />
                  <img src={vision2} alt="" />
                  
               </div>
               <div className="about-para">
               <div className="icon-para">
                <GppGoodSharpIcon style={{
                  color: 'green'
                }}/>
                <p>We are testing and exceeding the limitations of what technology can do. We are a growing team of people with big ideas, who are both thinkers and doers. Our people move quickly and thrive on working towards solutions to the problems that plague societies across the globe</p>
                </div>
               <div className="icon-para">
               <GppGoodSharpIcon style={{
                  color: 'green'
                }}/>
               <p>We are committed to recruiting talented individuals, groups, and teams, and providing them with opportunities to influence the future of marginalized groups for the better. It is here that we take risks, promote visionary expression, and focus on bridging the gap between Lack and Abundance by seamlessly integrating diverse humans and technology.</p>
                </div>
                

               </div>
            </div>
          </div>
          
    
    </div>
  );
}
