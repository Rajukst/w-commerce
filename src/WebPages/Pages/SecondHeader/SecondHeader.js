import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SecondHeader.css";
import mobilePhoto from "../../../Assets/Icons/mobile.png";
import Logo from "../../../Assets/Icons/logo.jpg";
import ThirdHeader from "../Header/ThirdHeader/ThirdHeader";
const SecondHeader = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={12} md={4} lg={4} >
          <img src={Logo} alt="" height="70px" width="150px" />
          </Col>
          <Col xs={12} md={4} lg={4} >
            <div className="mobileSection">
              <div className="iconsItem">
                <img src={mobilePhoto} alt="" height="60px" width="35px" />
              </div>
              <div className="CallText">
                <p className="callNow">Call Us</p>
                <p className="callNum">+88001-3335-01133</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4} >
            <form>
              <input type="text" name="search" placeholder="Search.." />
            </form>
          </Col>
        </Row>
      </Container>
      <ThirdHeader></ThirdHeader>
    </>
  );
};

export default SecondHeader;
