import React from "react";
import "./caterogy.scss";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const Caterogy = () => {
  const { listProducts } = useSelector((state) => state.dataSlice);
  return (
    <div id="category">
      <div className="leftContent">
        <h1>Caterogy</h1>
        <ul>
          <li>Cloud Platform</li>
          <li>Ethernet Switch</li>
          <li>Enterprise Wi-Fi</li>
          <li>Multi-core Edge</li>
          <li>Firewall</li>
          <li>Data Storage</li>
          <li>Eco-products</li>
          <li>Server</li>
        </ul>
      </div>
      <div className="mainContent">
        <div className="slider">
          {listProducts?.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Caterogy;
