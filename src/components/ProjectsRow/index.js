import React from "react";
import Project from "../Project";

const ProjectsRow = (props) => {
  // render projects from the project.js file
  const renderProjectCards = (projects, images) => {
    // pull out the key names for the projects object
    const projectNames = Object.keys(projects);
    // map out all project names
    return projectNames.map((name, index) => {
      // Create a project card for each name
      return (
        <Project
            // get project data 
            project={projects[name]}
            // pull the appropriate image out of the props array
            image={images[projects[name].image.src]}
            // Pass the on click event handler
            onClick={props.onClick}
            // Set the animation based on order in CSS file
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
