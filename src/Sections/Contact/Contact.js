import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import emailjs from 'emailjs-com';
import { Alert } from 'react-bootstrap';
// import ReCAPTCHA from "react-google-recaptcha";

// Modal component for displaying messages
function Modal({ message, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">

        {/* Close button for the modal */}
        <span className="close" onClick={onClose}>&times;</span>
        {/* Message to be displayed in the modal */}
        <p>{message}</p>
      </div>
    </div>
  );
}

// URL for Google Maps with encoded address
const mappedAddress = encodeURIComponent('Cape Town');
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mappedAddress}`;

function Contact() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '' // Adding subject field to the form data
  });
  // State for error message
  const [errorMessage, setErrorMessage] = useState('');
  // State for showing alert
  const [showAlert, setShowAlert] = useState(false);
  // State for ReCAPTCHA verification
  // const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  // State for showing modal
  const [showModal, setShowModal] = useState(false);
  // State for modal message
  const [modalMessage, setModalMessage] = useState('');

  // Function to handle input change in the form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle ReCAPTCHA change
  // const handleRecaptchaChange = (token) => {
  //   setRecaptchaVerified(true);
  // };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Checking ReCAPTCHA verification
    // if (!recaptchaVerified) {
    //   setErrorMessage('Please complete the ReCAPTCHA');
    //   setShowAlert(true);
    //   return;
    // }


    const { name, email, message, subject } = formData;     // Destructuring form data

    // Checking if all fields are filled out
    if (!name || !email || !message || !subject) {
      setErrorMessage('All fields must be filled out');
      setShowAlert(true);
      return;
    }

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validating email
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setShowAlert(true);
      return;
    }

    console.log('Form submitted:', formData);

    // Template parameters for emailjs
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      subject: subject 
    };

    // Sending email using emailjs
    emailjs.send("service_rjz6n3a", "template_oano9bq", templateParams, '9oU1xzcLnNXGvUlQv')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Clearing form fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
          subject: '' // Clearing subject field after successful submission
        });
        setErrorMessage('');
        // Showing success modal
        setShowModal(true);
        setModalMessage('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage('Failed to send email. Please try again later.');
        setShowAlert(true);
      });
  };

  // Rendering component
  return (
    <div className="contact-container" id='contact-container'>
      {/* Heading for contact section */}
      <div className="heading">
        <h2>Contact </h2>
        <span>Get in touch</span>
      </div>
      <div className='contact'>
        {/* Social icons section */}
        <div className="social-icons">
          <a href="https://github.com/MfidiV"><FontAwesomeIcon icon={faGithub} /></a>
          <a href={mapUrl}><FontAwesomeIcon icon={faMapMarkerAlt} /></a>
          <a href="https://www.linkedin.com/in/mfidi-vuyolwethu-577b3ba1/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        {/* Contact form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* Input field for name */}
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
            {/* Input field for email */}
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
            {/* Dropdown for subject */}
            <div className="select-wrapper">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                id='subject_dropdown'
              >
                {/* Default option */}
                <option value="">Select Subject</option>
                {/* Options for subject */}
                <option value="General Inquiry">General Inquiry</option>
                <option value="Collaboration">Collaboration</option>
            
            
                <option value="Job/Career growth">Job/Career growth</option>
                {/* Add more options as needed */}
              </select>
              {/* Arrow icon for dropdown */}
              <div className="arrow-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div className="form-group">
            {/* Textarea for message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              id='messagebox'
            />
          </div>
          {/* Alert for displaying error message */}
          {showAlert && <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>{errorMessage}</Alert>}
          {/* Modal for displaying success message */}
          {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
          <div className="Last-step">
            {/* ReCAPTCHA component */}
            {/* <ReCAPTCHA 
              sitekey="6LfRFnApAAAAAOU7KQ-o7Tn1I4unb4wsFA1FZknS"
              onChange={handleRecaptchaChange}
            /> */}
            {/* Submit button */}
            <button type="submit" className="btn1"> <FontAwesomeIcon icon={faPaperPlane} /></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
