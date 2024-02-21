import React from "react";
import logo from "../assets/logo.svg";
import home from "../assets/Home, House, Line.png";
import money from "../assets/accounting-calculator-circle.png";
import sales from "../assets/Sales.png";
import marketing from "../assets/marketing.png";
import humans from "../assets/humans.png";
import settings from "../assets/settings.png";
import twoLast from "../assets/twoLast.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="nav_button">
        <img src={twoLast} alt="icon" />
      </button>
      <div className="top_navbar">
        <img src={logo} width={40} alt="logo" />
        <div className="top_navbar_div">
          <button className="navbar_btn">
            <img src={home} width={22} alt="nav_icon" />
            <p>ACADEMY</p>
          </button>
          <button className="navbar_btn">
            <img src={money} width={22} alt="nav_icon" />
            <p>ACCOUNT</p>
          </button>
          <button className="navbar_btn">
            <img src={sales} width={22} alt="nav_icon" />
            <p>SALES</p>
          </button>
          <button className="navbar_btn">
            <img src={marketing} width={22} alt="nav_icon" />
            <p>MARKETING</p>
          </button>
          <button className="navbar_btn">
            <img src={humans} width={22} alt="nav_icon" />
            <p>HUMANS</p>
          </button>
        </div>
      </div>
      <div className="bottom_navbar">
        <button className="navbar_btn">
          <img src={settings} width={22} alt="" />
          <p>SETTINGS</p>
        </button>
        <p>{">"}</p>
      </div>
    </div>
  );
};

export default Navbar;
