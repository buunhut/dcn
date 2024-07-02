import React from "react";
import "./header.scss";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleDangNhap = () => {
    navigate("log-in");
  };
  const handleHomePage = () => {
    navigate("/");
  };
  const handleProductPage = () => {
    navigate("/products");
  };
  return (
    <div id="header">
      <div className="container">
        <div className="logo" onClick={handleHomePage}>
          {/* <h1>DCN</h1> */}
          {/* <p>Vietnam</p> */}
          <img src="./img/logo.png" alt="" />
        </div>
        <div className="menu">
          <ul className="menuContent">
            <li className="menuItem" onClick={handleProductPage}>
              Products
              {/* <i className="fa-solid fa-angle-down"></i> */}
              {/* <div className="dropDown">
                <ul className="ulDropDown">
                  <li className="liDropDown">
                    <NavLink to="/products/cloud-platform">
                      Cloud Platform
                    </NavLink>
                  </li>
                  <li className="liDropDown">
                    <NavLink to="/products/ethernet-switch">
                      Ethernet Switch
                    </NavLink>
                  </li>
                  <li className="liDropDown">
                    <NavLink to="/products/enterprise-wi-fi">
                      Enterprise Wi-Fi
                    </NavLink>
                  </li>
                  <li className="liDropDown">
                    <NavLink to="/products/multi-core-edge">
                      Multi-core Edge
                    </NavLink>
                  </li>
                  <li className="liDropDown">
                    <NavLink to="/products/firewall">Firewall</NavLink>
                  </li>
                  <li className="liDropDown">
                    <NavLink to="/products/data-storage">Data Storage</NavLink>
                  </li>
                  <li className="liDropDown">
                    <NavLink to="/products/eco-products">Eco-products</NavLink>
                  </li>
                  <li className="liDropDown">
                    <NavLink to="/products/server">Server</NavLink>
                  </li>
                </ul>
              </div> */}
            </li>
            <li className="menuItem">
              Solutions <i className="fa-solid fa-angle-down"></i>
              <div className="dropDown">
                <ul className="ulDropDown">
                  <li className="liDropDown">
                    <a href="">Campus Solution</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">Application Solution</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">ISP Solution</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">Data Center Solution</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">Retail Solution</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">Warehouse Solution</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">Case Study</a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className="menuItem">
              Support <i className="fa-solid fa-angle-down"></i>
              <div className="dropDown">
                <ul className="ulDropDown">
                  <li className="liDropDown">
                    <a href="">Downloads</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">DCN Training</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">Service Policy</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">Seri Check</a>
                  </li>
                </ul>
              </div>
            </li> */}
            <li className="menuItem">
              Partners
              {/* <i className="fa-solid fa-angle-down"></i> */}
              {/* <div className="dropDown">
                <ul className="ulDropDown">
                  <li className="liDropDown">
                    <a href="">DCNet</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">Vendor</a>
                  </li>
                </ul>
              </div> */}
            </li>
            <li className="menuItem">
              About Us
              {/* <i className="fa-solid fa-angle-down"></i> */}
              {/* <div className="dropDown">
                <ul className="ulDropDown">
                  <li className="liDropDown">
                    <a href="">DCN Brief</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">Parent Company</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">News</a>
                  </li>
                  <li className="liDropDown">
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div> */}
            </li>
          </ul>
        </div>
        <div className="menuExtra">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="langues">
            English <i className="fa-solid fa-angle-down"></i>
          </div>
          {/* <div className="login">
            <div className="icon" onClick={handleDangNhap}>
              <i class="fa-solid fa-user"></i>
            </div>
            Chưa đăng nhập
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
