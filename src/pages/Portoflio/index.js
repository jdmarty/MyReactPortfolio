import React, { useState } from "react";
// Components
import Featured from "../../components/Featured";
// thumbnails
import codeQuiz from "./images/codeQuiz.PNG";
import dreamTeam from "./images/dreamTeam.PNG";
import jammming from "./images/jammming_codecademy.png";
import nutriSpot from "./images/nutriSpot.PNG";
// projects data
import Projects from "./projects";

const Portfolio = () => {
  const images = { codeQuiz, dreamTeam, jammming, nutriSpot}
  const [featuredImage, setFeaturedImage] = useState(images.dreamTeam)
  const [featured, setFeatured] = useState(Projects.dreamTeam);
  

  return (
    <main className="container-fluid px-0 px-lg-5">
      <Featured
        image={featuredImage}
        alt={featured.image.alt}
        title={featured.title}
        description={featured.description}
        descriptionCont={featured.descriptionCont}
        tech={featured.tech}
        deployedLink={featured.deployedLink}
        repoLink={featured.repoLink}
      />
    </main>
  );
};

export default Portfolio;
