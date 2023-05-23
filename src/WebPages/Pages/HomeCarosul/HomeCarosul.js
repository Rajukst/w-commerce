import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeCarosul.css";
import carImg from "../../../Assets/Icons/013.png"
import { Link } from "react-router-dom";
const HomeCarosul = () => {
  
  return (
    <>
      <Container fluid className="homeCarsuls mb-2">
      <Row className="g-4">
      <Col xs={12} md={6} lg={3} className="left-col">
      <div className="allCatagoriesss">
                <div className="listItemsss">
                 <h5 className="allCatagoris">Catagories</h5>
                 <Link className="myLink"><h6>Men</h6></Link>
                <Link className="myLink"> <h6>Women</h6></Link>
                 <Link className="myLink"><h6>Kids</h6></Link>
                 <Link className="myLink"><h6>Accessories</h6></Link>
                 <Link className="myLink"><h6>Clothing</h6></Link>
                 <Link className="myLink"><h6>Bags</h6></Link>
                <Link className="myLink"> <h6>Footwear</h6></Link>
                 <Link className="myLink"><h6>Watches</h6></Link>
                 <Link className="myLink"><h6>Jewellery</h6></Link>
                </div>
            </div>
      </Col>
      <Col xs={12} md={6} lg={9}>
      <div className="rightCarosul">
                <div className="leftText">
                    <h1>Trendy</h1>
                    <h1>FASHION</h1>
                   <Link> <button className="shopBTN">Shop Now</button></Link>
                </div>
                <div className="rightCar">
                    <img className="img-fluid" src={carImg} alt="" />
                </div>
            </div>
      </Col>
      </Row>
      </Container>
    </>
  );
};

export default HomeCarosul;

/*
      <Row className="homeCarsulCont mb-5">
          <Col xs={12} md={4} lg={4} className="firstCol">
            <div className="allCatagoriesss">
                <div className="listItemsss">
                 <p className="allCatagoris">Catagories</p>
                 <p>Men</p>
                 <p>Women</p>
                 <p>Kids</p>
                 <p>Accessories</p>
                 <p>Clothing</p>
                 <p>Bags</p>
                 <p>Footwear</p>
                 <p>Watches</p>
                 <p>Jewellery</p>
                </div>
            </div>
          </Col>
          <Col xs={12} md={8} lg={8}  className="SecondtCol">
           
          </Col>
        </Row>
*/