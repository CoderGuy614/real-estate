import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-item a">A</div>
      <div className="contact-item b">
        <ContactForm />
      </div>
      <div className="contact-item c">C</div>
      <div className="contact-item d">D</div>
      <div className="contact-item e">E</div>
      <div className="contact-item f">F</div>
    </div>
  );
};

export default Contact;
