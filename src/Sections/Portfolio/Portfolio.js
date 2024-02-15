import React,{useState,useEffect} from 'react'
import './Portfolio.css' ;
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa, faEdge, faGithub } from '@fortawesome/free-brands-svg-icons';

// Import images
import blogImage from '../../components/assets/Portfolio/blog-6.jpg';
import taxCalcImage from '../../components/assets/Portfolio/TaxCalc.jpg';
import unitConvImage from '../../components/assets/Portfolio/UnitConv.png';
import chatAppImage from '../../components/assets/Portfolio/chatApp.jpg';
import weatherImage from '../../components/assets/Portfolio/weather.png';
import bankAppImage from '../../components/assets/Portfolio/pexels-obsahovka-obsahovka-4449784.jpg';

const Portfolio = () => {

    useEffect(()=>{
        AOS.init({duration:900})
    },[])

    const [showRow1, setShowRow1] = useState(true);

    const toggleRows = () => {
        setShowRow1(!showRow1);
    };
  return (
    <section className='portfolio' id='portfolio'>
        <div className="heading">
                <h2>Portfolio</h2>
                <span>Recent Work</span>
            </div>

            <div className="row" id="row2" data-aos="fade-right" style={{ display: showRow1 ? 'none' : 'flex' }}>
                <div className="col-lg-4 mt-4" data-aos="fade-right">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={blogImage} alt="Best Constructors" style={{ width: '100%' }} />
                        <div className="card-body">
                            <h4 className="card-title">Collaborative work</h4>
                            <p className="card-text">A responsive construction company website, "The Best Constructors".</p>
                            <div className="text-center">
                                <a href="https://thebestconstruction.netlify.app/#" className="btn1 btn-success"><FontAwesomeIcon icon={faEdge} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4" data-aos="fade-down">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={taxCalcImage} alt="Tax Calculator logo" style={{ width: '100%' }} />
                        <div className="card-body">
                            <h4 className="card-title">Tax Calculator</h4>
                            <p className="card-text">This Java Swing application for calculating income tax based on inputs</p>
                            <div className="text-center">
                                <a href="https://github.com/MfidiV/Tax_Calculator" className="btn1 btn-success"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4"data-aos="fade-left">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={unitConvImage} alt="Converter app logo" style={{ width: '100%' }} />
                        <div className="card-body">
                            <h4 className="card-title">Unit Converter</h4>
                            <p className="card-text">This is a simple Java Swing application that serves as a unit converter.</p>
                            <div className="text-center">
                                <a href="https://github.com/MfidiV/Converter-App" className="btn1 btn-success"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row" id="row1"  style={{ display: showRow1 ? 'flex' : 'none' }}>
                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={chatAppImage} alt="Chat app logo" style={{ width: '100%' }} />
                        <div className="card-body">
                            <h4 className="card-title">Chat App</h4>
                            <p className="card-text">This is a real-time chat app,It allows users to connect, chat, and exchange messages in real time.</p>
                            <div className="text-center">
                                <a href="https://theebestchat.netlify.app/" className="btn1 btn-success"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={weatherImage} alt="Weather app logo" style={{ width: '100%' }} />
                        <div className="card-body">
                            <h4 className="card-title">Weather App</h4>
                            <p className="card-text">A simple web application that allows users to retrieve current weather information for a specified location.</p>
                            <div className="text-center">
                                <a href="https://github.com/MfidiV/Weather_App" className="btn1 btn-success"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4" >
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={bankAppImage} alt="Bank app logo" style={{ width: '100%' }} />
                        <div className="card-body">
                            <h4 className="card-title">Bank App</h4>
                            <p className="card-text">An application for user experience with bank processes. It allows users to be in control of their money.</p>
                            <div className="text-center">
                                <a href="https://github.com/MfidiV/Bank_Application" className="btn1 btn-success"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="toggle">
                <button className="btn1" onClick={toggleRows}>See more</button>
            </div>


    </section>
  )
};

export default Portfolio
