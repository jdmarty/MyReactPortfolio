import React, { useState } from "react";
// Components
import Featured from "../../components/Featured";
import ProjectsRow from "../../components/ProjectsRow"
// thumbnails
import codeQuiz from "./images/codeQuiz.PNG";
import dreamTeam from "./images/dreamTeam.PNG";
import jammming from "./images/jammming_codecademy.png";
import nutriSpot from "./images/nutriSpot.PNG";
import workforce from "./images/workforce.PNG";
import consoleDotBlog from "./images/consoleDotBlog.PNG"
// projects data
import projects from "./projects";

const Portfolio = () => {
  const images = { codeQuiz, dreamTeam, jammming, nutriSpot, workforce, consoleDotBlog}
  const [featuredImage, setFeaturedImage] = useState(images.dreamTeam)
  const [featured, setFeatured] = useState(projects.dreamTeam);
  
  const handleProjectClick = (project) => {
    // set the featured project
    setFeatured(project)
    setFeaturedImage(images[project.image.src])
    // Hack to re-start the fade in animation
    const featured = document.querySelector("#featured")
    featured.classList.remove("fade-in")
    featured.classList.remove("d-none");
    void featured.offsetWidth;
    featured.classList.add("fade-in")
  }

  return (
    <main className="container-fluid px-1 px-lg-5">
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
      <ProjectsRow
        projects={projects} 
        images={images}
        onClick={handleProjectClick}/>
    </main>
  );
};

export default Portfolio;
