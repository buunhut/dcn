import React from "react";
import "./products.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { listProducts } = useSelector((state) => state.dataSlice);
  const navigate = useNavigate();
  const handleClickDetail = (productId) => {
    navigate(`/product-detail/${productId}`);
  };
  return (
    <div className="content">
      {listProducts?.map((item, index) => {
        const { productId, productName, price, img, detail } = item;
        return (
          <div
            key={index}
            className="productItem"
            onClick={() => handleClickDetail(productId)}
          >
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
