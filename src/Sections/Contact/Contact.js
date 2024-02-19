import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './Contact.css'; // Import CSS file for styling
import emailjs from 'emailjs-com';
import { Alert } from 'react-bootstrap'; // Import Alert component from react-bootstrap
import ReCAPTCHA from "react-google-recaptcha";

function Modal({ message, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
}

const mappedAddress = encodeURIComponent('Cape Town');
// Constructing the Google Maps URL with the mapped address
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mappedAddress}`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State to control whether to show alert or not
  const [recaptchaVerified, setRecaptchaVerified] = useState(false); // State to track ReCAPTCHA verification
  const [showModal, setShowModal] = useState(false); // State to control whether to show modal or not
  const [modalMessage, setModalMessage] = useState(''); // Message to be displayed in modal

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRecaptchaChange = (token) => {
    // You can handle the ReCAPTCHA token here if needed
    setRecaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if ReCAPTCHA is verified
    if (!recaptchaVerified) {
      setErrorMessage('Please complete the ReCAPTCHA');
      setShowAlert(true); // Show alert
      return;
    }

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
        setShowModal(true); // Show modal
        setModalMessage('Email sent successfully');
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
      <a href="https://github.com/MfidiV"><FontAwesomeIcon icon={faGithub} /></a>
      <a href={mapUrl}><FontAwesomeIcon icon={faMapMarkerAlt} /></a>
      <a href="https://www.linkedin.com/in/mfidi-vuyolwethu-577b3ba1/"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="form-control" id='text_name'
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control" id='email_details'
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="form-control" id='messagebox'
          />
        </div>

        {showAlert && <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>{errorMessage}</Alert>}
        {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
        <div className="Last-step">
          <ReCAPTCHA
            sitekey="6LeuYHIpAAAAADY0i14Bn22sXmzCS4HJRLrc4yYK"
            onChange={handleRecaptchaChange}
          />
          <button type="submit" className="btn"> <FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
