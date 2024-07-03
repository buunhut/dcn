import React from "react";
import "./products.scss";
import { useSelector } from "react-redux";

const Products = () => {
  const { listProducts } = useSelector((state) => state.dataSlice);
  return (
    <div className="content">
      {listProducts?.map((item, index) => {
        const { productName, price, img, detail } = item;
        return (
          <div key={index} className="productItem">
            <div className="img">
              <img src={`/img/${img === "" ? "noImg.png" : img}`} alt="" />
            </div>
            <h3>{productName.toUpperCase()}</h3>
            <p>{price.toLocaleString()}đ</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
