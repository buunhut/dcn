import React from "react";
import "./products.scss";
import { useSelector } from "react-redux";
import ProductItem from "../component/ProductItem";

const Products = () => {
 
  const { listProducts } = useSelector((state) => state.dataSlice);
  return (
    <div className="content">
      {listProducts?.map((item, index) => {
        return <ProductItem item={item} key={index} />;
      })}
    </div>
  );
};

export default Products;
