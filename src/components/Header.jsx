import React from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import "../assets/css/header.css";

export default function Header() {
  return (
    <div>
      <div className="headerTop">
        <div className="left">
          <div className="idea">
            <i
              className="fa-regular fa-lightbulb"
              style={{ fontSize: "13px" }}
            ></i>
            <a href="#">IDEA REWARD</a>
          </div>
          <div className="idea">
            <i className="fa-solid fa-recycle" style={{ fontSize: "13px" }}></i>
            <a href="#">RETURN & EXCHANGES</a>
          </div>
          <div className="idea">
            <i
              className="fa-solid fa-book-open"
              style={{ fontSize: "13px" }}
            ></i>
            <a href="#">LOOKBOOK</a>
          </div>
        </div>

        <div className="right">
          <button className="sign">Sign In</button>

          <div className="dropdown">
            <button className="dropbtn">Currancy</button>
            <div className="dropdown-content">
              <a href="#/AUD">AUD</a>
              <a href="#/GBP">GBP</a>
              <a href="#/CAD">CAD</a>
              <a href="#/PAR">PAR</a>
              <a href="#/SAR">SAR</a>
              <a href="#/USD">USD</a>
              <a href="#/AED">AED</a>
            </div>
          </div>

          {/* <div className="dropdown">
          <DropdownButton className="dropbtn" title="Currancy">
            <Dropdown.Item href="#/AUD">AUD</Dropdown.Item>
            <Dropdown.Item href="#/GBP">GBP</Dropdown.Item>
            <Dropdown.Item href="#/CAD">CAD</Dropdown.Item>
            <Dropdown.Item href="#/PAR">PAR</Dropdown.Item>
            <Dropdown.Item href="#/SAR">SAR</Dropdown.Item>
            <Dropdown.Item href="#/USD">USD</Dropdown.Item>
            <Dropdown.Item href="#/AED">AED</Dropdown.Item>
            </DropdownButton>
            </div> */}
        </div>
      </div>

      <div className="headerCenter">
        <div className="logo15">
          <img
            className="logo"
            src={require("../assets/images/ideas-logo.webp")}
            alt="Logo"
          />
        </div>

        <input type="text" className="search" placeholder="Search" />
        <i className="fa-solid fa-cart-plus"></i>
      </div>

      <div className="headerButtom">
        links
        <div className="dropdown1">
          <button className="dropbtn1">GREAT SUMMER SALE</button>
          <div className="row">
            <div className="colum1">
              <div className="dropdown1-content">
                <a href="#/AUD">UNSTITCHED</a>
                <a href="#/GBP">IDEAS PRET</a>
                <a href="#/CAD">IDEAS MAN</a>
                <a href="#/PAR">IDEAS HOME</a>
                <a href="#/SAR">KIDS</a>
                <a href="#/USD">SHOES & BAGS</a>
              </div>
            </div>
          </div>
          <div className="colum2">
            <div className="dropdown1-content">
              {/* <a href="#/AUD">UNSTITCHED</a> */}
              <a href="#/GBP">IDEAS PRET</a>
              <a href="#/CAD">IDEAS MAN</a>
              <a href="#/PAR">IDEAS HOME</a>
              <a href="#/SAR">KIDS</a>
              <a href="#/USD">SHOES & BAGS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
