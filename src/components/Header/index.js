import React from "react";
import "./style.css"

const Header = (props) => {
  return (
    // Navbar header
    <nav className="navbar navbar-expand-lg navbar-dark py-3">
      {/* Brand link to homepage */}
      <a className="navbar-brand" href="/">
        <i className="far fa-2x fa-otter"></i>
      </a>
      {/* Navbar Toggler for Mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* Navigation links collapsed on mobile */}
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav ml-auto mr">
          {/* Home page linke */}
          <li className={`nav-item ${props.page === "home" && "active"}`}>
            <a className="nav-link" href="/">
              Home {props.page === "home" && <span className="sr-only">(current)</span>}
            </a>
          </li>
          {/* Portfolio Link */}
          <li className={`nav-item ${props.page === "portfolio" && "active"}`}>
            <a className="nav-link" href="/portfolio">
              Portfolio {props.page === "portfolio" && <span className="sr-only">(current)</span>}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
