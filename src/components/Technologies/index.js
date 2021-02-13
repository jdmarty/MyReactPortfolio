import React from "react";
import "./style.css"
import TechCard from "../TechCard"

const Technologies = () => {
  return (
    <section className="row text-center pt-3 shifted-row">
      <div className="col-12 col-md-6 col-lg-3">
        <TechCard
          title="Languages"
          cardText={["HTML5", "CSS3", "JavaScript", "SQL"]}
          badges={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square"]}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <TechCard
          title="Front End Tools"
          cardText={["React", "Bootstrap", "Tailwind", "jQuery"]}
          badges={["fab fa-react", "fab fa-bootstrap", "fab fa-css3"]}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <TechCard
          title="Back End Tools"
          cardText={["Node.js", "Express.js", "MySQL", "MongoDB"]}
          badges={["fab fa-node", "fad fa-database", "fas fa-router"]}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <TechCard
          title="Development"
          cardText={["Github", "VSCode", "Heroku", "OAuth 2"]}
          badges={["fab fa-github", "fas fa-code-merge", "fas fa-layer-group"]}
        />
      </div>
    </section>
  );
};

export default Technologies;
