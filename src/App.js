import React from "react";
import Header from "./component/Header";
import "./app.scss";
import "animate.css";

import Banner from "./component/Banner";
import Advancon from "./component/Advancon";
import Caterogy from "./component/Caterogy";
import News from "./component/News";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";
import ContactItem from "./component/ContactItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DangNhap from "./pages/DangNhap";
import Products from "./pages/Products";
import Index from "./pages/Index";
import Partners from "./pages/Partners";
import ContactUs from "./pages/ContactUs";
import Solutions from "./pages/Solutions";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Index />} />
          <Route path="log-in" element={<DangNhap />} />
          <Route path="products" element={<Products />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="partners" element={<Partners />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
