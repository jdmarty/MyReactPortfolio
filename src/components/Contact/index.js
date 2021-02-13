import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <section className="row text-center pb-4 mt-n3">
      <div className="col-12">
        <h2 className="display-4">Let's work together!</h2>
        <p className="lead">
          Contact me through any of the methods below and let's start building!
        </p>
        <div className="bg-secondary d-flex justify-content-around contact-box">
          <a
            className="text-white"
            href="https://www.linkedin.com/in/joshua-marty-22a544a2/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-2x fa-linkedin"></i>
          </a>
          <a
            className="text-white"
            href="https://github.com/jdmarty/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-2x fa-github"></i>
          </a>
          <a href="mailto: joshua.dmarty@gmail.com" className="text-white">
            <i className="fas fa-2x fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
