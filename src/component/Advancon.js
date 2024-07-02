import React from "react";
import "./advancon.scss";

const Advancon = () => {
  return (
    <div id="advancon">
      <div className="advanIconWrap">
        <div className="advanIcon">
          <img
            src="./img/icon1.png"
            alt=""
            className="animate__animated animate__fadeInDown"
          />
        </div>
        <h3 className="animate__animated animate__fadeInUp">Solutions</h3>
      </div>
      <div className="advanIconWrap">
        <div className="advanIcon">
          <img
            src="./img/icon2.png"
            alt=""
            className="animate__animated animate__fadeInDown"
          />
        </div>
        <h3 className="animate__animated animate__fadeInUp">Services</h3>
      </div>
      <div className="advanIconWrap">
        <div className="advanIcon">
          <img
            src="./img/icon3.png"
            alt=""
            className="animate__animated animate__fadeInDown"
          />
        </div>
        <h3 className="animate__animated animate__fadeInUp">DCNet</h3>
      </div>
      <div className="advanIconWrap">
        <div className="advanIcon">
          <img
            src="./img/icon4.png"
            alt=""
            className="animate__animated animate__fadeInDown"
          />
        </div>
        <h3 className="animate__animated animate__fadeInUp">ECO-SYS</h3>
      </div>
      <div className="advanIconWrap">
        <div className="advanIcon">
          <img
            src="./img/icon5.png"
            alt=""
            className="animate__animated animate__fadeInDown"
          />
        </div>
        <h3 className="animate__animated animate__fadeInUp">DCN - Training</h3>
      </div>
    </div>
  );
};

export default Advancon;
