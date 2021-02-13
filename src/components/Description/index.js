import React from "react";
import "./style.css"


const Description = () => {
  return (
    <section className="row text-center py-5">
      <div className="col-1 d-flex justify-content-center my-auto">
        <i className="fab fa-3x fa-react"></i>
      </div>
      <article className="col-10">
        <h3 className="self-description">
          I am a full-stack web developer passionate about building intuitive,
          feature rich applications
        </h3>
        <p>
          Software is for everyone! That's why I build each of my projects to be
          a cleanly designed experience for both user and developer.{" "}
        </p>
      </article>
      <div className="col-1 d-flex justify-content-center my-auto">
        <i className="fab fa-3x fa-js-square"></i>
      </div>
    </section>
  );
};

export default Description;
