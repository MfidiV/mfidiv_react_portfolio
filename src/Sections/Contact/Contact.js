import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './Contact.css'; // Import CSS file for styling
import emailjs from 'emailjs-com';
import { Alert } from 'react-bootstrap'; // Import Alert component from react-bootstrap
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const onChange = () =>{

  }
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State to control whether to show alert or not

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setErrorMessage('All fields must be filled out');
      setShowAlert(true); // Show alert
      return;
    }

    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setShowAlert(true); // Show alert
      return;
    }

    // Add your logic to send the form data
    console.log('Form submitted:', formData);
    // Send email using EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    emailjs.send("service_rjz6n3a", "template_oano9bq", templateParams, '9oU1xzcLnNXGvUlQv')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Clear the form fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setErrorMessage('');
        setShowAlert(true); // Show alert
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage('Failed to send email. Please try again later.');
        setShowAlert(true); // Show alert
      });
  };


  return (
    <div className="contact-container" id='contact-container'>
      <div className="heading">
        <h2>Contact </h2>
        <span>Get in touch</span>
      </div>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            className="form-control"
          />
        </div>
    
        {showAlert && <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>{errorMessage}</Alert>}
        <div className="form-group">
          <ReCAPTCHA
            sitekey="6LeuYHIpAAAAADY0i14Bn22sXmzCS4HJRLrc4yYK"
            onChange={onChange}
          />
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
