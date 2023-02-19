import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/pages/shared/Footer";
import Navbar from "../Components/pages/shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
