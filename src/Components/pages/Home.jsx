import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import InfoCards from "./InfoCards";
import Services from "./Services";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
