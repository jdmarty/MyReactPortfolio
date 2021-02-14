import React from "react";

const Footer = (props) => {
  return (
    <div className="mt-4 footer">
      <span className="float-right">
        Projects by Josh
        <a
          className="text-white mx-4"
          href="https://github.com/jdmarty/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-sm fa-github contact-github"></i>
        </a>
        <a
          className="text-white mx-2"
          href="https://www.linkedin.com/in/joshua-marty-22a544a2/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-sm fa-linkedin contact-linkedin"></i>
        </a>
      </span>
    </div>
  );
};

export default Footer;
