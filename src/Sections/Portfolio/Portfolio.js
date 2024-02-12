import React,{useState} from 'react'
import './Portfolio.css' ;
import 'bootstrap/dist/css/bootstrap.min.css'

// Import images
import blogImage from '../../components/assets/Portfolio/blog-6.jpg';
import taxCalcImage from '../../components/assets/Portfolio/TaxCalc.jpg';
import unitConvImage from '../../components/assets/Portfolio/UnitConv.png';


const Portfolio = () => {
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

            <div className="row" id="row1" style={{ display: showRow1 ? 'flex' : 'none' }}>
                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={blogImage} alt="Best Constructors" style={{ width: '100%' }} />
                        <div className="card-body">
                            <h4 className="card-title">Collaborative work</h4>
                            <p className="card-text">A responsive construction company website, "The Best Constructors".</p>
                            <div className="text-center">
                                <a href="https://thebestconstruction.netlify.app/#" className="btn1 btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={taxCalcImage} alt="Tax Calculator logo" style={{ width: '100%' }} />
                        <div className="card-body">
                            <h4 className="card-title">Tax Calculator</h4>
                            <p className="card-text">This Java Swing application for calculating income tax based inputs</p>
                            <div className="text-center">
                                <a href="https://github.com/MfidiV/Tax_Calculator" className="btn1 btn-success">Github</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={unitConvImage} alt="Converter app logo" style={{ width: '100%' }} />
                        <div className="card-body">
                            <h4 className="card-title">Unit Converter</h4>
                            <p className="card-text">This is a simple Java Swing application that serves as a unit converter.</p>
                            <div className="text-center">
                                <a href="https://github.com/MfidiV/Converter-App" className="btn1 btn-success">Github</a>
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
