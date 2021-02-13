import React, { useState } from "react";
import Featured from "../../components/Featured"
import dreamTeam from "./images/dreamTeam.PNG"
import Projects from "./projects"

const Portfolio = () => {
    const [featured, setFeatured] = useState(Projects.dreamTeam)
    
  return (
    <main className="container-fluid px-0 px-lg-5">
      <Featured
        image={dreamTeam}
        alt={featured.image.alt}
        title={featured.title}
        description={featured.description}
        descriptionCont={featured.descriptionCont}
        deployedLink={featured.deployedLink}
        repoLink={featured.repoLink}
      />
    </main>
  );
};

export default Portfolio;
