import React from "react";
import MainHeader from "../../components/MainHeader"
import Hero from "../../components/Hero"
import Description from "../../components/Description"
import Qualifications from "../../components/Qualifications"

const Home = () => {
  return (
    <main className="container-fluid px-0 px-lg-5">
        <MainHeader />
        <Hero />
        <Description />
        <Qualifications />
    </main>
  );
};

export default Home;
