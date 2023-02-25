import React from 'react'
import Header from '../Phoenix/Header'
import './Artificial.css'
import artiimga from '../Images/Artificial.jpg'
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import img1 from '../Images/datacollection.jpg'
import img2 from '../Images/datapre.png'
import img4 from "../Images/ailabs.jpg"
import img3 from "../Images/modelevaluation.png"
export default function Artificial() {

  return (
    <div>
      
      {/* <div className="main__div2">
        <h3>
            Phoenix Labs Artificial Intelligence Center was created to further AI research and development. We believe that AI Research, tools, and laboratories should be accesible to marginalized groups. It is our goal to make the tools (code, datasets, models, etc.), and spaces available so that the aforementioned can easily access and use them to solve pressing problems.


            </h3>
            <div className="tomain">
                <p className='datacollection'>Data Collection</p>
        <div className='main'>
            
          <div className="Left_Part">
            <img src={artiimga} alt="" />
          </div>
          <div className="Right_Part">
            <p>
            Phoenix Labs provides data collection archives to individuals, businesses, and organizations within our network. Some of these data types include: speech, text, image, and video that can be utilized in a range of environments such as home, studio, office, vehicles, and public spaces. Our Dataset collection is ethically sourced and fits any use case that one may have. Our datasets are delivered through our state-of-the-art digitally managed data dispensary.
            </p>

          </div>

        </div>
        <Link to='/artificialintellicenter/page2' style={{
          textDecoration: "none"  
        }}>
        <div className="btn">
        <button type="button" class="btn btn-danger">Enroll</button>
    

        </div>
        </Link>
            
       
        </div>
      </div> */}
      <Header/>
      <div className="artificialcontainer">
        <div className="content">
          <h3>Build and deploy</h3>
          <h1>
            <span>PheonixLabs</span> ai <br></br>application
          </h1>
          <p>
          Phoenix Labs Artificial Intelligence Center was created to further AI research and development. We believe that AI Research, tools, and laboratories should be accesible to marginalized groups. It is our goal to make the tools (code, datasets, models, etc.), and spaces available so that the aforementioned can easily access and use them to solve pressing problems.
          </p>
          {/* <a href="#" className="btn">
            EXPLORE MORE
          </a> */}
          {/* <Link to='/cryptointellicenter/all-coins' className="btn"> */}
          <Link to='/artificialintellicenter/page2'className="btn" style={{
          textDecoration: "none"  
        }}>
            ENROLL
          </Link>
        </div>
          
          <a href='#theme'>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        </a>
        
       
      </div>
      <div className="ai-theme" id='theme'>
        <div className="ai-theme-first">
        <div className="ai-theme-first-left">
            <div className="ai-theme-first-img">
                <img src={img1} alt="" />
            </div>

            <div className="content-button">
            <div className="ai-theme-first-content">
            <h3>
            Data Collection
              </h3>
              <p>Phoenix Labs provides data collection archives to individuals, businesses, and organizations within our network. Some of these data types include: speech, text, image, and video that can be utilized in a range of environments such as home, studio, office, vehicles, and public spaces. Our Dataset collection is ethically sourced and fits any use case that one may have. Our datasets are delivered through our state-of-the-art digitally managed data dispensary.</p>
            </div>
            <div className="learn-more">
              <Link to='#'  className='todatapreparationmore'>
              <button className='btn btn-success'>Learn More<ArrowRightAltIcon/></button>
              </Link>

            </div>
            </div>

          </div>
          <div className="ai-theme-first-left">
            

            <div className="content-button">
            <div className="ai-theme-first-content">
            <h3>
                Data Preparation
              </h3>
              <p>Our innovative platform and Machine Learning tools allow those within our network to upload their data to our global lexicon to provide annotations, judgments, and labels, creating extremely high-quality labeled data for others models within the network. We then provide leading knowledge graphs and support to ensure that data becomes intelligence.</p>
            </div>
            <div className="learn-more">
              <Link to='#'  className='todatapreparationmore'>
              <button className='btn btn-success'>Learn More<ArrowRightAltIcon/></button>
              </Link>

            </div>
            </div>
            <div className="ai-theme-first-img">
                <img src={img2} alt="" />
            </div>

          </div>
          <div className="ai-theme-first-left">
          <div className="ai-theme-first-img">
                <img src={img3} alt="" />
            </div>

            <div className="content-button">
            <div className="ai-theme-first-content">
              
              <h3>
              Model Evaluation
              </h3>
              <p>Our ground-breaking platform offers real-world model performance validation and verification across a range of use cases. We provide realistic, real-world environments to test AI models. We accomplish this by providing dynamic elements and components so that our testing environments reflect real-world deployment environments. Using our state-of-the-art benchmarks, we compare model performance with other industry models to ensure superior results.</p>
            </div>
            <div className="learn-more">
              <Link to='#'  className='todatapreparationmore'>
              <button className='btn btn-success'>Learn More<ArrowRightAltIcon/></button>
              
              </Link>

            </div>
            </div>
            

          </div>
          <div className="ai-theme-first-left">
            

            <div className="content-button">
            <div className="ai-theme-first-content">
              <h3>
              AI Labs
              </h3>
              <p>Welcome to our Artificial Intelligence Labs. It is here that we research and deploy complex workflows, algorithms, and projects that can and will change our future. Our AI Labs Platform consists of three different laboratories that were created to focus on real-world problems that require real-world solutions.</p>
            </div>
            <div className="learn-more">
              <Link to='#'  className='todatapreparationmore'>
              <button className='btn btn-success'>Learn More<ArrowRightAltIcon/></button>
              </Link>

            </div>
            </div>
            <div className="ai-theme-first-img">
                <img src={img4} alt="" />
            </div>

          </div>
          
          
        </div>
       
      </div>
    </div>
  )
}
