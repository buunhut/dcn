import React from "react";
import Header from "../component/Header";
import Banner from "../component/Banner";
import Advancon from "../component/Advancon";
import Caterogy from "../component/Caterogy";
import News from "../component/News";
import AboutUs from "../component/AboutUs";
import Footer from "../component/Footer";
import ContactItem from "../component/ContactItem";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <Banner />
      <Advancon />
      <Caterogy />
      <News />
      <AboutUs /> */}
      <Outlet />
      <Footer />
      <ContactItem />
    </div>
  );
};

export default HomePage;
