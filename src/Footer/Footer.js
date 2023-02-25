import React from 'react'
import "./Footer.css"
import "./Responsive.css"
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro' 
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube,FaEnvelope ,FaArrowRight} from 'react-icons/fa'
export default function Footer() {
    return (
        <div>
            <footer>
                <div className="row">
                    <div className="row business">
                        <div className="col 6">
                            <h5>Business</h5>
                            <ul>
                                <li>
                                    <a href="">Technology</a>
                                </li>
                                <li>
                                    <a href="">Steel</a>
                                </li>
                                <li>
                                    <a href="">Automotive</a>
                                </li>
                                <li>
                                    <a href="">Consumer & Retail</a>
                                </li>
                                <li>
                                    <a href="">Infrastructure</a>
                                </li>
                                <li>
                                    <a href="">Financial Services</a>
                                </li>
                                <li>
                                    <a href="">                <a href="">Aerospace & Defence</a>
                                    </a>
                                </li>
                                <li>
                                    <a href="">Tourism & Travel</a>
                                </li>
                                <li>
                                    <a href="">Telecom & Media</a>
                                </li>
                                <li>
                                    <a href="">Trading & Investment</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col 6">
                            <h5>Community</h5>
                            <ul>
                                <li>
                                    <a href="">Health</a>
                                </li>
                                <li>
                                    <a href="">Education</a>
                                </li>
                                <li>
                                    <a href="">Empowerment</a>
                                </li>
                                <li>
                                    <a href="">Environment</a>
                                </li>

                            </ul>
                        </div>
                        <div className="col 6">
                            <h5>About</h5>
                            <ul>
                                <li>
                                    <a href="">The Phoenix group</a>
                                </li>
                                <li>
                                    <a href="">Phoenix Sons</a>
                                </li>
                                <li>
                                    <a href="">Values and Purpose</a>
                                </li>
                                <li>
                                    <a href="">Leadership</a>
                                </li>
                                <li>
                                    <a href="">Heritage</a>
                                </li>
                                <li>
                                    <a href="">Sustainability</a>
                                </li>
                                <li>
                                    <a href="">Sponsorships</a>
                                </li>
                                <li>
                                    <a href="">Investors</a>
                                </li>
                                <li>
                                    <a href="">Phoenix Code of Conduct
                                    </a>
                                </li>
                                <li>
                                    <a href="">Technology</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row newsroom email">

                        <div className="col context">
                            <p className="content">Newsroom</p>
                            <p className="content">Careers</p>
                            <p className="content">Jobs</p>
                            <p className="content">Equal Opportunity</p>
                            <p className="content">Privacy Policy</p>
                            <p className="content">Legal Disclaimer</p>
                        </div>
                        <div className="desktop-container vl hidden-xs hidden-sm"></div>

                        <div className="col newsletter">
                            <h3>Newsletter</h3>
                            <form >
                                <span className="material-symbols-outlined">
                                    {/* <FontAwesomeIcon icon="fa-regular fa-envelope" /> */}
                                    <FaEnvelope/>
                                    
                                </span>
                                <input type="email" aria-placeholder="Enter your email id" required />
                                <button type="submit">
                                    <span className="material-symbols-outlined">
                                        <FaArrowRight/>
                                    </span>
                                </button>
                            </form>
                            <div className="social-icons">
                                <i className="fa-brands fa-facebook-f"><FaFacebookF /></i>
                                <i className="fa-brands fa-linkedin-in"><FaLinkedinIn /></i>
                                <i className="fa-brands fa-twitter"><FaTwitter /></i>
                                <i className="fa-brands fa-youtube"><FaYoutube /></i>
                                <i className="fa-brands fa-instagram"><FaInstagram /></i>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <script src="https://kit.fontawesome.com/4c9f4dafea.js" crossorigin="anonymous"></script>

        </div>
    )
}
