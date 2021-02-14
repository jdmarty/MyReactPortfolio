import React from "react";
import ProjectsCard from "../ProjectsCard";

const ProjectsRow = (props) => {
  const renderProjectCards = (projects, images) => {
    const projectNames = Object.keys(projects);
    return projectNames.map((name, index) => {
      return (
        <ProjectsCard 
            project={projects[name]}
            image={images[projects[name].image.src]}
            onClick={props.onClick}
            animation={"fade-slide"+(index+1)}
            key={"project" + index} />
      )
    });
  };

  return (
    <section className="row my-3" id="projects-card-row">
      <h1 className="col-12 text-center display-4">
        Click on a project to view details
      </h1>
      {renderProjectCards(props.projects, props.images)}
    </section>
  );
};

export default ProjectsRow;
