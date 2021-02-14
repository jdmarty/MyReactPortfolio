import React from "react";
import "./style.css";
import computer from "./computer.svg";

const Hero = () => {
  return (
    // Hero computer display with stacked link screen
    <div className="row text-center">
      <div className="col-12">
        {/* Image Stack */}
        <div className="image-stack py-3">
          {/* Top Image div with link button */}
          <div className="image-stack_item image-stack__item--top">
            <div className="screen-box bg-secondary fade-in">
              <p className="screen-text text-white my-0 my-lg-2">My Projects</p>
              <a
                href="/portfolio"
                id="screen-button"
                className="btn btn-primary screen-button"
              >
                Check 'em Out!
              </a>
            </div>
          </div>
          {/* Bottom Image computer svg */}
          <div className="image-stack_item image-stack__item--bottom">
            <img
              src={computer}
              className="scale-img"
              alt="computer"
              role="presentation"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
