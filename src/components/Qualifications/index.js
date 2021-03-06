import React from "react";
import resume from "./JoshuaMartyResume.pdf"

const Qualifications = () => {
  return (
    // Qualifications section with resume link
    <section className="row text-center py-5 bg-secondary">
      <article className="col-12 pb-5 pt-3 px-5">
        <h3>Full Stack Web Development Bootcamp Certificate - UC Irvine</h3>
        <p className="lead">
          I specialized in building APIs, polished UI's, and
          databases to serve elegantly efficient applications
        </p>
        {/* Resume link */}
        <a href={resume} download>
          Check out my resume!
        </a>
      </article>
    </section>
  );
};

export default Qualifications;
