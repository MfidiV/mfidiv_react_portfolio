import React, { useState } from 'react';
import './Services.css'; // Assuming you have a CSS file named Services.css for the styles
import 'boxicons/css/boxicons.min.css';

const Services = () => {
    const [modalContent, setModalContent] = useState('');
    const [showModal, setShowModal] = useState(false);

    const servicesRendered = (event, service) => {
        event.preventDefault(); // Prevent the default form submission
        if (service === "Backend") {
            setModalContent("Experienced back-end developer with proficiency in Python, Java, and Node.js, skilled in database management, scalable applications, server technologies, RESTful APIs, and cloud platforms. Skilled in troubleshooting, debugging, and security measures, committed to efficient, reliable solutions.");
        } else if (service === "Frontend") {
            setModalContent("A dedicated front-end developer with expertise in HTML, CSS, JavaScript, popular frameworks like React and Angular, adept at creating visually appealing user interfaces, optimizing web performance, and staying current with design trends, adept at working collaboratively in cross-functional teams.");
        } else {
            setModalContent("The designer is a detail-oriented UI/UX professional with a keen eye for aesthetics and user-centric design principles. They specialize in transforming complex concepts into intuitive, visually appealing interfaces. They are committed to staying updated with industry trends and technologies, ensuring their work remains at the forefront of modern design practice");
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

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
                    <span className="learn-more-link" onClick={(event) => { event.preventDefault(); servicesRendered(event, 'Frontend'); }}>Learn more</span>
                </div>
                {/* Box 2 */}
                <div className="services-box">
                    <i className='bx bx-server'></i>
                    <h3>Backend Development</h3>
                    <span className="learn-more-link" onClick={(event) => { event.preventDefault(); servicesRendered(event, 'Backend'); }}>Learn more</span>
                </div>
                {/* Box 3 */}
                <div className="services-box">
                    <i className='bx bx-brush'></i>
                    <h3>UI/UX Design</h3>
                    <span className="learn-more-link" onClick={(event) => { event.preventDefault(); servicesRendered(event, 'UI/UX'); }}>Learn more</span>
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{modalContent}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services;
