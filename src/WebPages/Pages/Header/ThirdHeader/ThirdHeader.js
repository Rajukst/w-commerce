import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ThirdHeader.css";
const ThirdHeader = () => {
  return (
    <>
      <Container className="ThirdContainer">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="myNavbar">
              <Link to="/" className="anchorLink">
                Home
              </Link>
              <Link to="/mens" className="anchorLink">
                Mens
              </Link>
              <Link to="/blogs" className="anchorLink">
                Blog
              </Link>
              <Link className="anchorLink">Contact</Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="user_cart">
              <Link to="/login">
                <i class="fa-solid fa-user usrLogin"></i>
              </Link>
              <Link to="/wishlist">
                <i class="fa-regular fa-heart wishList"></i>
              </Link>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping userList"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThirdHeader;
