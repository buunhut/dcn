import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item }) => {
  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  };

  const navigate = useNavigate();

  const { productId, productName, price, img, detail } = item;

  const handleClickDetail = (productId) => {
    navigate(`/product-detail/${productId}`);
  };

  return (
    <div className="productItem" onClick={() => handleClickDetail(productId)}>
      <div className="img">
        <img src={`/img/${img === "" ? "noImg.png" : img}`} alt="" />
      </div>
      <h3>{truncateString(productName, 50).toUpperCase()}</h3>
      <p>{price.toLocaleString()}đ</p>
    </div>
  );
};

export default ProductItem;
