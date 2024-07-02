import React from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import "./products.scss";
import Footer from "../component/Footer";

const Products = () => {
  let { id } = useParams();

  return <div className="content">Show products of {id}</div>;
};

export default Products;
