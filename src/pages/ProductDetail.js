import React from "react";
import "./productdetail.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const { listProducts } = useSelector((state) => state.dataSlice);

  const find = listProducts.find((item) => item.productId === +id);
  console.log(find);
  const { img, productName, price, detail } = find;

  return (
    <div className="content">
      <div className="img">
        <img src={`/img/${img === "" ? "noImg.png" : img}`} alt="" />
      </div>
      <div className="text">
        <h3>{productName?.toUpperCase()}</h3>
        <h4>{price?.toLocaleString()}đ</h4>
        <h1>Thông tin chi tiết</h1>
        <p>{detail}</p>
        <button>
          <i className="fa-solid fa-phone"></i> <a href="tel:+84919984877"></a>
          0919984877
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
