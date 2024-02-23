import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import emailjs from 'emailjs-com';
import { Alert } from 'react-bootstrap';
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
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mappedAddress}`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '' // Add subject field to the form data
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaVerified) {
      setErrorMessage('Please complete the ReCAPTCHA');
      setShowAlert(true);
      return;
    }

    const { name, email, message, subject } = formData;
    if (!name || !email || !message || !subject) {
      setErrorMessage('All fields must be filled out');
      setShowAlert(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setShowAlert(true);
      return;
    }

    console.log('Form submitted:', formData);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      subject: subject // Include subject in the template parameters
    };

    emailjs.send("service_rjz6n3a", "template_oano9bq", templateParams, '9oU1xzcLnNXGvUlQv')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormData({
          name: '',
          email: '',
          message: '',
          subject: '' // Clear subject field after successful submission
        });
        setErrorMessage('');
        setShowModal(true);
        setModalMessage('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage('Failed to send email. Please try again later.');
        setShowAlert(true);
      });
  };

  return (
    <div className="contact-container" id='contact-container'>
      <div className="heading">
        <h2>Contact </h2>
        <span>Get in touch</span>
      </div>
      <div className='contact'>
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
              className="form-control"
              id='text_name'
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
              id='email_details'
            />
          </div>
          <div className="form-group">
  <div className="select-wrapper">
    <select
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      className="form-control"
      id='subject_dropdown'
    >
      <option value="">Select Subject</option>
      <option value="General Inquiry">General Inquiry</option>
      <option value="Collaboration">Collaboration</option>
      <option value="Job/Career growth">Job/Career growth</option>
      {/* Add more options as needed */}
    </select>
    <div className="arrow-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  </div>
</div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              id='messagebox'
            />
          </div>
          
          {showAlert && <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>{errorMessage}</Alert>}
          {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
          <div className="Last-step">
            <ReCAPTCHA 
              sitekey="6LfRFnApAAAAAOU7KQ-o7Tn1I4unb4wsFA1FZknS"
              onChange={handleRecaptchaChange}
              // size="compact"
              // explicit
            />
            <button type="submit" className="btn1"> <FontAwesomeIcon icon={faPaperPlane} /></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
