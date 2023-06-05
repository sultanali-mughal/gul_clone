import React from "react";
import "../assets/css/footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div class="container">
          <div class="grid-item">
            <p className="para">ABOUT GULAHMED</p>
            <a className="link" href="#">ABOUT US</a>
            <a className="link" href="#">COMPANY</a>
            <a className="link" href="#">CAREERS</a>
            <a className="link" href="#">STORE LOCATOR</a>
          </div>
          <div class="grid-item">
            <p className="para">MY ACCOUNT</p>
            <a className="link" href="#">LOGIN</a>
            <a className="link" href="#">CREAT ACCOUNT</a>
            <a className="link" href="#">ACCOUNT INFO</a>
            <a className="link" href="#">ORDER HISTORY</a>
          </div>
          <div class="grid-item">
            <p className="para">CUSTOMER CARE</p>
            <a className="link" href="#">FAQ</a>
            <a className="link" href="#">SERVICES</a>
            <a className="link" href="#">CONTACT US</a>
            <a className="link" href="#">VISUAL SEARCH</a>
            <a className="link" href="#">PRIVACY POLICY</a>
            <a className="link" href="#">SHIPPING POLICY</a>
            <a className="link" href="#">REQUEST A CALL BACK</a>
          </div>
          <div class="grid-item">
            <p className="para">FIND US</p>
            
            <i className="fa-brands fa-facebook"></i>
            <a className="link social" href="#">FACEBOOK</a>
            <i className="fa-brands fa-instagram"></i>
            <a className="link social" href="#">INSTAGRAM</a>
            <i className="fa-brands fa-twitter"></i>
            <a className="link social" href="#">TWITTER</a>
            <i className="fa-brands fa-youtube"></i>
            <a className="link social" href="#">YOUTUBE</a>
            <i className="fa-brands fa-whatsapp"></i>
            <a className="link social" href="#">WHATSAPP</a>
          </div>
        </div>
      </div>
    </div>
  );
}