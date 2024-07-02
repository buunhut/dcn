import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ContactItem from "../component/ContactItem";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ContactItem />
    </div>
  );
};

export default HomePage;
