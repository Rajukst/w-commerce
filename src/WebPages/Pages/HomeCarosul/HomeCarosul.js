import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeCarosul.css";
import carImgs from "../../../Assets/Icons/edited.png";
import carImgsTwo from "../../../Assets/Icons/edited2.png";
import carImgsThree from "../../../Assets/Icons/edited3.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import 'animate.css';
const HomeCarosul = () => {
  AOS.init();
  const settings = {
    dots: false,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  };
  return (
    <>
      <Container fluid className="homeCarsuls mb-2">
        <Row className="g-4">
          <Col xs={12} md={3} lg={3} className="left-col">
            <div className="allCatagoriesss">
              <div className="listItemsss">
                <h5 className="allCatagoris">Catagories</h5>
                <Link to="/mens" className="myLink">
                  <h6>Men</h6>
                </Link>
                <Link to="/womens" className="myLink">
                  <h6>Women</h6>
                </Link>
                <Link to="/boys" className="myLink">
                  <h6>Boys</h6>
                </Link>
                <Link to="/girls" className="myLink">
                  <h6>Girls</h6>
                </Link>
                <Link className="myLink">
                  <h6>Accessories</h6>
                </Link>
                <Link className="myLink">
                  <h6>Footwear</h6>
                </Link>
                <Link className="myLink">
                  <h6>Jewellery</h6>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={9}>
            <div className="backCover">
            <Slider className="" {...settings}>
          <div className="slidersImages">
            <div className="textseffects">
             <h1>New Arrival</h1>
             <button className="shopBTN"><Link className="carosulLink" to="/products">Shop Now</Link></button>
            </div>
            <div className="textseffects">
             <img src={carImgs} alt="" />
            </div>
          </div>
          <div className="slidersImages">
            <div className="textseffects">
            <h1>Exclusive Fashion</h1>
            <button className="shopBTN"><Link className="carosulLink" to="/products">Shop Now</Link></button>
            </div>
            <div className="textseffects">
            <img src={carImgsTwo} alt="" />
            </div>
          </div>
          <div className="slidersImages">
            <div className="textseffects">
            <h1>Wonderfull Collection</h1>
            <button className="shopBTN"><Link className="carosulLink" to="/products">Shop Now</Link></button>
            </div>
            <div className="textseffects">
            <img src={carImgsThree} alt="" />
            </div>
          </div>
        </Slider>
            </div>
         
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeCarosul;

