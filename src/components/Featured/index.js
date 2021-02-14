import React from "react";
import "./style.css"

const Featured = (props) => {
  // Function to render tech buttons from information in projects file
  const renderTechButtons = (tech) => {
    // Map the tech buttons array
    return tech.map((item, index) => {
      // For image badges from https://github.com/Ileriayo/markdown-badges
      if (item.type === "image") {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={"tb" + index}
            className="featured-tech"
          />
        );
      // For spans without icons
      } else if (item.type === "span") {
        return (
          <span className={item.class} key={"tb" + index}>
            {item.text}
          </span>
        );
      // For spans with icons
      } else if (item.type === "icon-span") {
        return (
          <span className={item.class} key={"tb" + index}>
            <i className={item.iconClass}></i>
            {item.text}
          </span>
        );
      }
    })
  }
  
  return (
    // Featured project jumbotron
    <section className="row py-2 bg-secondary fade-in d-none" id="featured">
      {/* Thumbnail image */}
      <aside className="col-lg-6 col-12">
        <img
          src={props.image}
          className="scale-img"
          id="featured-image"
          alt={props.alt}
        />
      </aside>
      {/* Main project Display */}
      <article className="col-lg-6 col-12 px-0 p-lg-4">
        {/* Project Title */}
        <h3 className="display-4 text-center" id="featured-title">
          {props.title}
        </h3>
        {/* Project Description */}
        <p className="lead" id="featured-description">
          {props.description}
        </p>
        {/* Project Description Continued */}
        <p className="lead" id="featured-description-cont">
          {props.descriptionCont}
        </p>
        {/* Tech Button Container */}
        <div
          className="d-flex justify-content-center flex-wrap"
          id="featured-tech-cont"
        >
          {renderTechButtons(props.tech)}
        </div>
        {/* Deployed and Repo Links */}
        <div className="text-center link-buttons">
          {/* Deployed Link */}
          <a
            href={props.deployedLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success featured-link"
          >
            Live Link
          </a>
          {/* Repo Link */}
          <a
            href={props.repoLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-warning featured-link"
          >
            Repository
          </a>
        </div>
      </article>
    </section>
  );
};

export default Featured;
