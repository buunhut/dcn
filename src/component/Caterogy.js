import React from "react";
import "./caterogy.scss";

const Caterogy = () => {
  return (
    <div id="category">
      <div className="leftContent">
        <h1>Caterogy</h1>
        <ul>
          <li>Cloud Platform</li>
          <li>Ethernet Switch</li>
          <li>Enterprise Wi-Fi</li>
          <li>Multi-core Edge</li>
          <li>Firewall</li>
          <li>Data Storage</li>
          <li>Eco-products</li>
          <li>Server</li>
        </ul>
      </div>
      <div className="mainContent">Products slider</div>
    </div>
  );
};

export default Caterogy;
