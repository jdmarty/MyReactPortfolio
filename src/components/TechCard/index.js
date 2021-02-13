import React from "react";
import { useInView } from "react-intersection-observer";


const TechCard = (props) => {
  const { ref, inView } = useInView();

  const renderCardText = (textArray) => {
    return textArray.map((item, index) => {
      return (
        <div key={index * Math.random()}>
          {item}
          <br></br>
        </div>
      );
    });
  };

  const renderBadges = (badgesArray) => {
      return badgesArray.map((item, index) => {
          return <i className={`fa-lg ${item} mx-3`} key={index * Math.random()}></i>
      })
  }

  return (
      <article className={"card my-3 tech-card "+ (inView && "fade-rise"+props.delay)} ref={ref}>
        <header className="card-header pb-0 bg-primary">
          <h5 className="card-title">{props.title}</h5>
        </header>
        <main className="card-body">
          <div className="card-text">{renderCardText(props.cardText)}</div>
        </main>
        <footer className="card-footer tech-card-footer">
          {renderBadges(props.badges)}
        </footer>
      </article>
  );
};

export default TechCard;
