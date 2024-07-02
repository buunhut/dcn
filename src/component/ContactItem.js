import React, { useState } from "react";
import "./contactitem.scss";

const ContactItem = () => {
  const [small, setSmall] = useState(true);
  return (
    <div id="contactItem">
      <div className="contactWrap">
        <div className="contactContentItem">
          <i className="fa-regular fa-message"></i>
        </div>
        <div
          className="contactContentItem"
          style={{ display: small ? "none" : "flex" }}
        >
          <i className="fa-solid fa-mobile-screen-button"></i>
        </div>
        <div
          className="contactContentItem"
          style={{ display: small ? "none" : "flex" }}
        >
          <i className="fa-regular fa-file-lines"></i>
        </div>
        <div
          className="contactContentButton"
          onClick={() => {
            setSmall(!small);
          }}
        >
          {small ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
