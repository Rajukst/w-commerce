import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';

const TopSeller = () => {
    const [states, setStates]= useState([])
    useEffect(()=>{
        fetch("https://service-yvt2.onrender.com/products")
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    var settings = {
        dots: false,
        infinite: true,
    
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <div>
            <h1>This is Top Seller</h1>
            <Container>
        <Row className="p-3">
            <Col>
           
            <Slider {...settings}>
            {/* {states.map(getStates=>   <div>
                    <h1>{getStates.image}</h1>
                </div>)} */}

          </Slider>
            </Col>
        </Row>
      </Container>
        </div>
    );
};

export default TopSeller;