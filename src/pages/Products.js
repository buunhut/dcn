import React from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import "./products.scss";
import Footer from "../component/Footer";
import Caterogy from "../component/Caterogy";

const Products = () => {
  let { id } = useParams();

  const listProducts = [
    {
      caterogy: "cloud-platform",
      productName: "Bộ phát wifi",
      price: 5000000,
      img: "sp1.jpeg",
      detail: "mô tả chi tiết NW5678",
    },
    {
      caterogy: "cloud-platform",
      productName: "Thiết bị chuyển mạch hiệu DCN NW9978",
      price: 7000000,
      img: "",
      detail: "mô tả chi tiết NW9978",
    },
    {
      caterogy: "cloud-platform",
      productName: "Thiết bị chuyển mạch hiệu DCN NW5678",
      price: 5000000,
      img: "",
      detail: "mô tả chi tiết NW5678",
    },
    {
      caterogy: "cloud-platform",
      productName: "Thiết bị chuyển mạch hiệu DCN NW9978",
      price: 9000000,
      img: "",
      detail: "mô tả chi tiết NW9978",
    },
    {
      caterogy: "cloud-platform",
      productName: "Thiết bị chuyển mạch hiệu DCN NW5678",
      price: 5000000,
      img: "",
      detail: "mô tả chi tiết NW5678",
    },
    {
      caterogy: "cloud-platform",
      productName: "SWITCH KHÔNG QUẢN LÝ 8 CỔNG 10/100M DCN ES1008D",
      price: 324000,
      img: "sp2.jpeg",
      detail: "mô tả chi tiết NW9978",
    },
  ];

  return (
    <div className="content">
      {id}
      <div className="productContent">
        {listProducts?.map((item, index) => {
          const { productName, price, img, detail } = item;
          console.log(img);
          return (
            <div key={index} className="productItem">
              <div className="img">
                <img src={`/img/${img === "" ? "noImg.png" : img}`} alt="" />
              </div>
              <h3>{productName.toUpperCase()}</h3>
              <p>{price.toLocaleString()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
