import React from "react";
import Header from "../Phoenix/Header";
import "./Webdevelopement.css";
import { Link } from "react-router-dom";
export default function Webdevelopement() {
  return (
    <div>
      <Header />
      <div className="react-banner">
        <div className="m-i">
          <div className="hero-banner__title">
            <h1>Mobile App Development</h1>
          </div>
          <div className="hero-banner__text">
            Success starts with the right development team. Our goal in this
            division is to design and develop high-performance, feature-packed
            web and mobile applications for all major platforms including
            Android and iOS.
          </div>
          <div className="hero-banner__button">
            {/* <a class="hero-btn btn-stl--red" href="https://www.digiteum.com/contact/" target="_self">Contact us</a> */}
            <Link className="webcontactbut"
              to="/webdevelopementcenter/contactus"
              style={{
                textDecoration: "none",
                
                
              }}
            >
              <div className="btn">
                <button type="button" className="btn  btn-danger">
                  Contact Us
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="section-landing">
        <section className="section section-custom-text">
            <div className="m-i">
                <div className="section__title">
                    <h2>Custom Mobile Application Developement</h2>
                </div>
                <div className="text-box">
                    <p>Our newest division creates apps that meet business and industry needs by continuing technical proficiency with ease of use.</p>
                    <p>Our agile development methodology is proven to create highly flexible engagement models which encompass a comprehensive evaluation of a business's requirements and goals to ensure an ultimate solution that is both cost-effective and efficient</p>
                </div>
            </div>
            <div className="m-i">
                <div className="section__title">
                    <h2>Our Process</h2>
                </div>
                <div className="text-box">
                    <p>You share your goals and vision. When clients share ideas, requirements, and expectations, we then have the framework in which we can develop greatness.</p>
                    
                </div>
            </div>
            <div className="m-i">
                <div className="section__title">
                    <h2>We Proceed</h2>
                </div>
                <div className="text-box">
                    <p>We review and investigate your requirements thoroughly. We test your ideas and do a deep code review to identify the best possible tech solutions for your project.</p>
                </div>
            </div>
            <div className="m-i">
                <div className="section__title">
                    <h2>We Provide</h2>
                </div>
                <div className="text-box">
                    <p>Detailed project scope through various stories.</p>
                    <p>Cost and time estimations.</p>
                    <p> Professional analysis and consultation on client projects.</p>
                    <p>Suggestions on tools, methods, and solutions needed.</p>
                </div>
            </div>
            <div className="m-i">
                <div className="section__title">
                    <h2>Our New Division's Focus</h2>
                </div>
                <div id="services" className="offers-tabcontent active">
                    <div className="tabcontent-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="82" viewBox="0 0 85 82" class="offer-image replaced-svg"><defs><filter id="a" width="104.3%" height="113.3%" x="-2.1%" y="-5.8%" filterUnits="objectBoundingBox"><feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="7.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(-385 -47)"><path stroke="#323232" d="M451.478 110h-46.956c-1.945 0-3.522-1.562-3.522-3.488v-2.326h21.13l1.174 1.163h9.392l1.174-1.163H455v2.326c0 1.926-1.577 3.488-3.522 3.488zm-46.956-5.814v-3.488 3.488zm21.13-31.395h23.478a2.336 2.336 0 0 1 2.348 2.325v29.07"></path><path stroke="#1476F2" d="M423.304 86.744v9.303a2.336 2.336 0 0 1-2.347 2.325h-17.61A2.336 2.336 0 0 1 401 96.047V62.326A2.336 2.336 0 0 1 403.348 60h17.609a2.336 2.336 0 0 1 2.347 2.326v17.441"></path><path stroke="#1476F2" stroke-linejoin="round" d="M401 91.395h22.304m0-25.581H401m9.391 29.07h3.522"></path><path stroke="#1476F2" d="M433.87 83.256h-21.13m3.52 3.488l-3.52-3.488 3.52-3.489m14.088 6.977l3.522-3.488-3.522-3.489"></path></g></svg>
                    <div className="offer-content">
                        <h3 className="offer-content-title">Cross Platform App Development</h3>
                        <p className="offer-content-description">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    </div>

                    </div>
                    <div className="tabcontent-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="71" viewBox="0 0 85 71" class="offer-image replaced-svg"><defs><filter id="a" width="104.3%" height="113.3%" x="-2.1%" y="-5.8%" filterUnits="objectBoundingBox"><feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="7.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(-754 -39)"><path stroke="#494946" d="M798.174 74.455v7.09a2.355 2.355 0 0 0 2.348 2.364h16.435a2.355 2.355 0 0 0 2.347-2.364v-20.09a2.355 2.355 0 0 0-2.347-2.364h-16.435a2.355 2.355 0 0 0-2.348 2.364v5.909m3.522 16.545V91h14.087v-7.09m0-24.82V52h-14.087v7.09"></path><path stroke="#494946" d="M808.74 70.91h-28.175m3.522 3.545l-3.522-3.546 3.522-3.545m21.13 7.09l3.522-3.545-3.522-3.545m16.435 0h1.174c.648 0 1.174.53 1.174 1.181v4.728c0 .652-.526 1.182-1.174 1.182h-1.174"></path><path stroke="#1476F2" stroke-linejoin="round" d="M770 83.91h22.304m0-26H770m9.391 29.545h3.522"></path><path stroke="#1476F2" d="M792.304 74.455v14.181A2.355 2.355 0 0 1 789.957 91h-17.61A2.355 2.355 0 0 1 770 88.636V54.364A2.355 2.355 0 0 1 772.348 52h17.609a2.355 2.355 0 0 1 2.347 2.364v13"></path></g></svg>
                    <div className="offer-content">
                        <h3 className="offer-content-title">Mobile App Development</h3>
                        <p className="offer-content-description">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    </div>

                    </div>
                    <div className="tabcontent-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="72" viewBox="0 0 84 72" class="offer-image replaced-svg"><defs><filter id="a" width="104.3%" height="113.3%" x="-2.1%" y="-5.8%" filterUnits="objectBoundingBox"><feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="7.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(-755 -218)"><path stroke="#323232" d="M824 263.941h-21.13l-2.348 2.353h-5.87l-3.522-2.353H770v2.353a4.701 4.701 0 0 0 4.696 4.706h44.608a4.701 4.701 0 0 0 4.696-4.706v-2.353z"></path><path stroke="#323232" d="M820.478 263.941v-30.588A2.35 2.35 0 0 0 818.13 231h-42.26a2.35 2.35 0 0 0-2.348 2.353v30.588"></path><path stroke="#1476F2" d="M782.913 239.235l2.348 2.353 4.696-4.706M782.913 247.47l2.348 2.354 4.696-4.706M782.913 255.706l2.348 2.353 4.696-4.706M793.478 239.235h16.435M793.478 247.47h16.435M793.478 255.706h16.435"></path></g></svg>
                    <div className="offer-content">
                        <h3 className="offer-content-title">E-Commerce/Web Development</h3>
                        <p className="offer-content-description">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    </div>

                    </div>
                    <div className="tabcontent-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="81" viewBox="0 0 77 81" class="offer-image replaced-svg"><defs><filter id="a" width="104.3%" height="113.3%" x="-2.1%" y="-5.8%" filterUnits="objectBoundingBox"><feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="7.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g fill="none" fill-rule="evenodd" stroke-linejoin="round" filter="url(#a)" transform="translate(-7 -223)"><path stroke="#323232" d="M45.5 232v10.34V232zm-12.75 3.386l5.216 8.956-5.216-8.956zm-9.334 9.252l9.035 5.17-9.035-5.17zM20 257.277h10.432H20zm3.416 12.638l9.035-5.17-9.035 5.17zm44.168 0l-9.035-5.17 9.035 5.17zM71 257.277H60.568 71zm-3.416-12.639l-9.035 5.17 9.035-5.17zm-9.334-9.252l-5.216 8.956 5.216-8.956z"></path><path stroke="#1476F2" d="M38.545 275.66h13.91M38.545 280.255h13.91M38.545 257.277c0-3.808 3.114-6.894 6.955-6.894"></path><path stroke="#323232" d="M42.023 260.723l3.477 3.447 3.477-3.447M45.5 264.17v8.043"></path><path stroke="#1476F2" d="M50.136 284.851h-1.159L47.818 286h-4.636l-1.16-1.149h-1.158M51.295 272.213v-1.15c0-2.074.728-3.987 2.182-5.458 2.19-2.214 3.614-4.953 3.614-8.328 0-6.346-5.19-11.49-11.591-11.49-6.402 0-11.59 5.144-11.59 11.49 0 3.375 1.424 6.114 3.613 8.328 1.454 1.47 2.182 3.384 2.182 5.459v1.149"></path></g></svg>
                    <div className="offer-content">
                        <h3 className="offer-content-title">Dev Ops and Infrastructure Management</h3>
                        <p className="offer-content-description">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    </div>

                    </div>
                    <div className="tabcontent-item">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 85 84" viewBox="0 0 85 84" class="offer-image replaced-svg"><g fill="none"><g stroke="#505050"><path d="m49.2 67.2-4.7 4.6 4.7 4.7"></path><path d="m44.5 71.8h26.3c2.6 0 4.6-2.1 4.6-4.7v-27.9"></path><path d="m36.8 14.4 4.7-4.6-4.7-4.7"></path><path d="m41.5 9.8h-26.3c-2.6 0-4.6 2.1-4.6 4.7v27.9"></path></g><path d="m19.8 61h46.4v-40.4h-46.4z" stroke="#1476f2"></path><path d="m24.5 25.3h3.1m1.5 0h3.1m-12.4 4.6h46.4" stroke="#1476f2"></path><path d="m26 54.8h15.5v-18.7h-15.5z" stroke="#505050"></path><path d="m46.1 36.1h15.5m-15.5 6.3h15.5m-15.5 6.2h9.3m20.1-12.5v-3.1m0-3.1v-3.1m-65 28v-3.1m0-3.1v-3.1" stroke="#505050"></path></g></svg>
                    <div className="offer-content">
                        <h3 className="offer-content-title">UX/UI Design</h3>
                        <p className="offer-content-description">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    </div>

                    </div>
                    <div className="tabcontent-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="72" viewBox="0 0 84 72" class="offer-image replaced-svg"><defs><filter id="a" width="104.3%" height="113.3%" x="-2.1%" y="-5.8%" filterUnits="objectBoundingBox"><feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="7.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(-755 -218)"><path stroke="#323232" d="M824 263.941h-21.13l-2.348 2.353h-5.87l-3.522-2.353H770v2.353a4.701 4.701 0 0 0 4.696 4.706h44.608a4.701 4.701 0 0 0 4.696-4.706v-2.353z"></path><path stroke="#323232" d="M820.478 263.941v-30.588A2.35 2.35 0 0 0 818.13 231h-42.26a2.35 2.35 0 0 0-2.348 2.353v30.588"></path><path stroke="#1476F2" d="M782.913 239.235l2.348 2.353 4.696-4.706M782.913 247.47l2.348 2.354 4.696-4.706M782.913 255.706l2.348 2.353 4.696-4.706M793.478 239.235h16.435M793.478 247.47h16.435M793.478 255.706h16.435"></path></g></svg>
                    <div className="offer-content">
                        <h3 className="offer-content-title">Quality Assurance</h3>
                        <p className="offer-content-description">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    </div>

                    </div>
                    

                </div>
                
            </div>
        </section>
      </div>
    </div>
  );
}
