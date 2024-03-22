import React, { useEffect, useState } from 'react';
import ParallaxTilt from 'react-parallax-tilt';
import './Services.css'; 
import 'boxicons/css/boxicons.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    // State variables for managing modal content and its visibility
    const [modalContent, setModalContent] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Initializinggit add  AOS library on component mount
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Function to set modal content based on the selected service
    const servicesRendered = (service) => {
        if (service === "Backend") {
            setModalContent("Experienced back-end developer with proficiency in Python, Java, and Node.js, skilled in database management, scalable applications, server technologies, RESTful APIs, and cloud platforms. Skilled in troubleshooting, debugging, and security measures, committed to efficient, reliable solutions.");
        } else if (service === "Frontend") {
            setModalContent("Dedicated front-end developer with expertise in HTML, CSS, JavaScript, popular frameworks like React, BootStrap, adept at creating visually appealing user interfaces, optimizing web performance, and staying current with design trends, adept at working collaboratively in cross-functional teams.");
        } else {
            setModalContent("Detail-oriented UI/UX professional, specializing transforming complex concepts into intuitive, visually appealing interfaces. They are committed to staying updated with industry trends and technologies, ensuring their work remains at the forefront of modern design practice");
        }
        setShowModal(true); // Show modal after setting content
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section className="services" id="services">
            <div className="heading">
                <h2>Services</h2>
                <span>I offer</span>
            </div>
            <div className="services-content" data-aos="zoom-in">
                {/* Service Box 1 */}
                <ParallaxTilt className="services-box" perspective={1000} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1} transitionSpeed={800}>
                    <i className='bx bx-code-alt'></i>
                    <h3>Web Development</h3>
                    <span className="learn-more-link" onClick={() => servicesRendered('Frontend')}>Learn more</span>
                </ParallaxTilt>
                {/* Service Box 2 */}
                <ParallaxTilt className="services-box" perspective={1000} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1} transitionSpeed={800}>
                    <i className='bx bx-server'></i>
                    <h3>Backend Development</h3>
                    <span className="learn-more-link" onClick={() => servicesRendered('Backend')}>Learn more</span>
                </ParallaxTilt>
                {/* Service Box 3 */}
                <ParallaxTilt className="services-box" perspective={1000} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1} transitionSpeed={800}>
                    <i className='bx bx-brush'></i>
                    <h3>UI/UX Design</h3>
                    <span className="learn-more-link" onClick={() => servicesRendered('UI/UX')}>Learn more</span>
                </ParallaxTilt>
            </div>
            {/* Modal for displaying service details */}
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
