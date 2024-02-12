import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReCAPTCHA from 'react-recaptcha'; // Import ReCAPTCHA component
import './Contact.css'; // Import CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

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
      return;
    }

    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Add your logic to send the form data
    console.log('Form submitted:', formData);

    // Clear the form fields after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Clear the error message
    setErrorMessage('');
  };

  const recaptchaLoaded = () => {
    console.log('reCAPTCHA loaded');
  };

  return (
    <div className="contact-container">
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
        <div className="form-group">
          {/* Add ReCAPTCHA component */}
          <ReCAPTCHA
            sitekey="6LfRFnApAAAAAOU7KQ-o7Tn1I4unb4wsFA1FZknS" // Test site key for localhost
            render="explicit"
            onloadCallback={recaptchaLoaded}
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
