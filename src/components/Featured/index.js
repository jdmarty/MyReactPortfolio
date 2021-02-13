import React from "react";

const Featured = (props) => {
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
        ></div>
        <div className="text-center">
          <a
            href={props.deployedLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg rounded-pill btn-success my-4 mx-4"
            id="featured-deployed-link"
          >
            Live Link
          </a>
          <a
            href={props.repoLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg rounded-pill btn-warning my-4 mx-4"
            id="featured-repo-link"
          >
            Repository
          </a>
        </div>
      </article>
    </section>
  );
};

export default Featured;
