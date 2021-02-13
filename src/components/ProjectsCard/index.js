import React from "react";

const ProjectsCard = (props) => {
  return (
    <article className="col-12 col-lg-3 project-card fade-rise" onClick={() => props.onClick(props.project)}>
        <img className="scale-img" src={props.image} alt={props.project.image.alt}/>
    </article>
  );
};

export default ProjectsCard;
