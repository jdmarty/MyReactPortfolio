import React from "react";
import "./style.css";
import ProjectsCard from "../ProjectsCard";

const ProjectsRow = (props) => {
  const renderProjectCards = (projects, images) => {
    const projectNames = Object.keys(projects);
    return projectNames.map((name) => {
      return (
        <ProjectsCard 
            project={projects[name]}
            image={images[projects[name].image.src]}
            onClick={props.onClick} />
      )
    });
  };

  return (
    <section class="row my-3" id="projects-card-row">
      <h1 class="col-12 text-center display-4">
        Click on a project to view details
      </h1>
      {renderProjectCards(props.projects, props.images)}
    </section>
  );
};

export default ProjectsRow;