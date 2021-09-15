import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMsg, setFormMsg] = useState("");

  const nameHandler = (e) => {
    setFormName(e.target.value);
  };

  const emailHandler = (e) => {
    setFormEmail(e.target.value);
  };

  const msgHandler = (e) => {
    setFormMsg(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formName === "" || formEmail === "" || formMsg === "") {
      alert("Please fill out all fields");
      return;
    }

    emailjs
      .sendForm(
        "service_9ul8r17",
        "template_3r1v02n",
        e.target,
        "user_Fcx9uicacK02ImGOiwyZX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    setFormName("");
    setFormEmail("");
    setFormMsg("");

    alert(
      "I have received your email and will get back to you as soon as possible."
    );
  };

  return (
    <div className="page-container" id="contact">
      <div className="section-container form-container">
        <form
          className="contact-form"
          onSubmit={sendEmail}
          data-aos="fade-right"
        >
          <h1 className="contact-form-title">Get in Touch</h1>
          <p className="contact-form-description">
            Fill out the form below and I'll respond as soon as possible!
          </p>
          <input type="hidden" name="contact_number" />
          <input
            autoComplete="off"
            className="contact-form-text"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formName}
            onChange={nameHandler}
          />
          <input
            autoComplete="off"
            className="contact-form-text"
            type="email"
            placeholder="Your Email"
            name="email"
            value={formEmail}
            onChange={emailHandler}
          />
          <textarea
            autoComplete="off"
            className="contact-form-text"
            placeholder="Type your message here"
            name="message"
            value={formMsg}
            onChange={msgHandler}
          />
          <input
            className="contact-form-btn animated-btn"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
