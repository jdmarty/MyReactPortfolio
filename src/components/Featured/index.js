import React from "react";
import "./style.css"

const Featured = (props) => {
  const renderTechButtons = (tech) => {
    return tech.map((item, index) => {
      if (item.type === "image") {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={"tb" + index}
            className="featured-tech"
          />
        );
      } else if (item.type === "span") {
        return (
          <span className={item.class} key={"tb" + index}>
            {item.text}
          </span>
        );
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
    <section className="row py-2 bg-secondary fade-in-fast" id="featured">
      <aside className="col-lg-6 col-12">
        <img
          src={props.image}
          className="scale-img"
          id="featured-image"
          alt={props.alt}
        />
      </aside>
      <article className="col-lg-6 col-12 px-0 p-lg-4">
        <h3 className="display-4 text-center" id="featured-title">
          {props.title}
        </h3>
        <p className="lead" id="featured-description">
          {props.description}
        </p>
        <p className="lead" id="featured-description-cont">
          {props.descriptionCont}
        </p>
        <div
          className="d-flex justify-content-center flex-wrap"
          id="featured-tech-cont"
        >
          {renderTechButtons(props.tech)}
        </div>
        <div className="text-center link-buttons">
          <a
            href={props.deployedLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success featured-link"
          >
            Live Link
          </a>
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
