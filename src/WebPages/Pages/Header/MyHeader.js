import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecondHeader from "../SecondHeader/SecondHeader";
import "./MyHeader.css";
const MyHeader = () => {
  return (
    <>
      <Container fluid className="myHeading">
        <Row>
          <Col xs={12} md={12} lg={6} >
          <p id="leftSide">Welcome to Our store Ekocart</p>
          </Col>
          <Col xs={12} md={12} lg={6} >
          <div className="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
          </div>
          </Col>
        </Row>
      </Container>
      <SecondHeader></SecondHeader>
    </>
  );
};

export default MyHeader;
