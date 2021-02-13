import React from "react";
import "./style.css"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3">
        <a className="navbar-brand" href="/">
            <i className="far fa-2x fa-otter"></i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto mr">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Nav;
