import React from "react";
import "./productdetail.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  
  const { id } = useParams();

  const { listProducts } = useSelector((state) => state.dataSlice);

  const find = listProducts.find((item) => item.productId === +id);
  const {
    img,
    productName,
    price,
    detail,
    tinhNang,
    congMang,
    khaNangChuyenMach,
    tocDoChuyenTiepGoi,
    tinhNangVLan,
    dhcp,
    quanLyCong,
    anToan,
    tinhNangPoe,
    quanLyVaVanHanh,
    tietKiemNangLuong,
    kichThuoc,
    moiTruongSuDung,
    nguonVao,
    congSuatTieuThu,
  } = find;

  return (
    <div className="content">
      <div className="img">
        <img src={`/img/${img === "" ? "noImg.png" : img}`} alt="" />
      </div>
      <div className="text">
        <h3>{productName?.toUpperCase()}</h3>
        <h4>{price?.toLocaleString()}đ</h4>
        <h1>Chi tiết</h1>
        <p>{detail}</p>
        <h1>Tính năng sản phẩm</h1>
        <p>{tinhNang}</p>
        <h1>Thông số kỹ thuật</h1>
        <table>
          <tbody>
            <tr>
              <td>Cổng mạng</td>
              <td>{congMang}</td>
            </tr>
            <tr>
              <td>Khả năng chuyển mạch</td>
              <td>{khaNangChuyenMach}</td>
            </tr>
            <tr>
              <td>Tốc độ chuyển tiếp gói</td>
              <td>{tocDoChuyenTiepGoi}</td>
            </tr>
            <tr>
              <td>Tính năng VLAN</td>
              <td>
                <ul>
                  {tinhNangVLan?.map((vlan, index) => (
                    <li key={index}>{vlan}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>DHCP</td>
              <td>{dhcp}</td>
            </tr>
            <tr>
              <td>Quản lý cổng</td>
              <td>
                <ul>
                  {quanLyCong?.map((cong, index) => (
                    <li key={index}>{cong}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>An toàn</td>
              <td>
                <ul>
                  {anToan?.map((anToan, index) => (
                    <li key={index}>{anToan}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Tính năng PoE</td>
              <td>
                <ul>
                  {tinhNangPoe?.map((poe, index) => (
                    <li key={index}>{poe}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Quản lý và Vận hành</td>
              <td>
                <ul>
                  {quanLyVaVanHanh?.map((vanHanh, index) => (
                    <li key={index}>{vanHanh}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Tiết kiệm năng lượng và bảo vệ môi trường</td>
              <td>
                <ul>
                  {tietKiemNangLuong?.map((tietKiem, index) => (
                    <li key={index}>{tietKiem}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Kích thước</td>
              <td>{kichThuoc}</td>
            </tr>
            <tr>
              <td>Môi trường sử dụng</td>
              <td>
                <ul>
                  {moiTruongSuDung?.map((moiTruong, index) => (
                    <li key={index}>{moiTruong}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Nguồn vào</td>
              <td>{nguonVao}</td>
            </tr>
            <tr>
              <td>Công suất tiêu thụ</td>
              <td>
                <ul>
                  {congSuatTieuThu?.map((congSuat, index) => (
                    <li key={index}>{congSuat}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <button>
          <i className="fa-solid fa-phone"></i> <a href="tel:+84919984877"></a>
          0919984877
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
