import React from "react";
import "../assets/css/footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div class="container">
          <div class="grid-itemf">
            <p className="para">ABOUT GULAHMED</p>
            <a className="link1" href="#">
              ABOUT US
            </a>
            <a className="link1" href="#">
              COMPANY
            </a>
            <a className="link1" href="#">
              CAREERS
            </a>
            <a className="link1" href="#">
              STORE LOCATOR
            </a>
          </div>
          <div class="grid-itemf">
            <p className="para">MY ACCOUNT</p>
            <a className="link1" href="#">
              LOGIN
            </a>
            <a className="link1" href="#">
              CREAT ACCOUNT
            </a>
            <a className="link1" href="#">
              ACCOUNT INFO
            </a>
            <a className="link1" href="#">
              ORDER HISTORY
            </a>
          </div>
          <div class="grid-itemf">
            <p className="para">CUSTOMER CARE</p>
            <a className="link1" href="#">
              FAQ
            </a>
            <a className="link1" href="#">
              SERVICES
            </a>
            <a className="link1" href="#">
              CONTACT US
            </a>
            <a className="link1" href="#">
              VISUAL SEARCH
            </a>
            <a className="link1" href="#">
              PRIVACY POLICY
            </a>
            <a className="link1" href="#">
              SHIPPING POLICY
            </a>
            <a className="link1" href="#">
              REQUEST A CALL BACK
            </a>
          </div>
          <div class="grid-itemf">
            <p className="para">FIND US</p>

            <i className="fa-brands fa-facebook"></i>
            <a className="link social" href="#">
              FACEBOOK
            </a>
            <i className="fa-brands fa-instagram"></i>
            <a className="link social" href="#">
              INSTAGRAM
            </a>
            <i className="fa-brands fa-twitter"></i>
            <a className="link social" href="#">
              TWITTER
            </a>
            <i className="fa-brands fa-youtube"></i>
            <a className="link social" href="#">
              YOUTUBE
            </a>
            <i className="fa-brands fa-whatsapp"></i>
            <a className="link social" href="#">
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
