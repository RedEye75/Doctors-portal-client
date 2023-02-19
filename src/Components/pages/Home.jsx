import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Contact from "./Contact";
import InfoCards from "./InfoCards";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <AboutUs></AboutUs>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home;
