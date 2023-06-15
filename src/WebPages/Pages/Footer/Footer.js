import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container className=" pb-5 pt-5 myCont">
        <Row>
          <Col xs={12} md={6} lg={3}>
            <h4 className="myHI">
              E-<span className="Commerce">Commerce</span>
            </h4>
            <p className="pargagraph">
              Ekocart - Multi-purpose E-commerce Html5 Template Is fully
              responsible, Build whatever you like with the Ekocart, Ekocart is
              the creative, modern HTML5 Template suitable for Your business.
            </p>
            <div className="iconic">
              <i class="fa-brands fa-facebook "></i>
              <i class="fa-brands fa-instagram "></i>
              <i class="fa-brands fa-twitter "></i>
              <i class="fa-brands fa-youtube "></i>
              <i class="fa-brands fa-linkedin-in "></i>
            </div>
          </Col>
          <Col  xs={12} md={6} lg={3}>
            <div className="links">
              <h4>Quick Links</h4>
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Shop</Link>
              <Link>Faq</Link>
              <Link>Blogs</Link>
              <Link>Contact Us</Link>
            </div>
          </Col>
          <Col  xs={12} md={6} lg={3}>
            <div className="links">
              <h4>Features</h4>
              <Link>Term Of Service</Link>
              <Link>Privacy Policy</Link>
              <Link>Support</Link>
              <Link>Shipping & Returns</Link>
              <Link>Careers</Link>
              <Link>Quick Links</Link>
              <Link>Our Story</Link>
            </div>
          </Col>
          <Col  xs={12} md={6} lg={3}>
            <div className="allInformations">
              <div className="storeInfo">
                <div className="iconics">
                  <i class="fa-solid fa-map fa-2x"></i>
                </div>
                <div className="textInformations">
                  <h5>Store Address</h5>
                  <p>423B, Road Wordwide Country, USA</p>
                </div>
              </div>
              <div className="storeInfo">
                <div className="iconics">
                  <i class="fa-regular fa-envelope fa-2x"></i>
                </div>
                <div className="textInformations">
                  <h5>Email Address</h5>
                  <p>someone@someone.com</p>
                </div>
              </div>
              <div className="storeInfo">
                <div className="iconics">
                <i class="fa-solid fa-mobile-screen-button fa-2x"></i>
                </div>
                <div className="textInformations">
                  <h5>Phone Number</h5>
                  <p>+8801456245863</p>
                </div>
              </div>
              <div className="storeInfo">
                <div className="iconics">
                  <i class="fa-regular fa-clock fa-2x"></i>
                </div>
                <div className="textInformations">
                  <h5>Working Time</h5>
                  <p>Mon - Fri: 10AM - 7PM</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="messengerChat">
      <MessengerCustomerChat
    pageId="109000364982910"
    appId="220451756907901"
  />
      </div>
 
    </div>
  );
};

export default Footer;
