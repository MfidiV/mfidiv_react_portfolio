import React from 'react';
import './Services.css'; 

const Services = () => {
   

    return (
        <section className="services" id="services">
            <div className="heading">
                <h2>Services</h2>
                <span>I offer</span>
            </div>
            <div className="services-content">
                {/* Box 1 */}
                <div className="services-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Web Development</h3>
                    learn more
                </div>
                {/* Box 2 */}
                <div className="services-box">
                    <i className='bx bx-server'></i>
                    <h3>Backend Development</h3>
                    learn more
                </div>
                {/* Box 3 */}
                <div className="services-box">
                    <i className='bx bx-brush'></i>
                    <h3>UI/UX Design</h3>
                    learn more
                </div>
            </div>
          
        </section>
    );
};

export default Services;
