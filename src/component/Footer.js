import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <h4>DCN Vietnam</h4>
      <p>
        <i className="fa-solid fa-envelope"></i>{" "}
        <a href="mailto:phong_chua@gmail.com">phong_chua@gmail.com</a>
        <span> - </span>
        <i className="fa-solid fa-phone"></i>{" "}
        <a href="tel:+84919984877"> 0919984877</a>
      </p>
      <p>
        <i className="fa-solid fa-location-dot"></i> Quận Tân Bình, Thành Phố Hồ
        Chí Minh, Việt Nam
      </p>
    </div>
  );
};

export default Footer;
