import React from "react";
import "./style.css"

const Project = (props) => {
  return (
    // Article with unique animation delay and handler that will change the featured project
    <article className={`col-12 col-lg-3 project-card ${props.animation}`} onClick={() => props.onClick(props.project)}>
        <img className="scale-img grow" src={props.image} alt={props.project.image.alt}/>
    </article>
  );
};

export default Project;
