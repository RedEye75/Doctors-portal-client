import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import InfoCards from "./InfoCards";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <AboutUs></AboutUs>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
