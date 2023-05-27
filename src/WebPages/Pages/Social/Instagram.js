import React from 'react';
import "./Instagram.css"
import { Col, Container, Row } from 'react-bootstrap';
import socialOne from "../../../Assets/Icons/social1.jpg"
import socialTwo from "../../../Assets/Icons/social2.jpg"
import socialThree from "../../../Assets/Icons/social3.jpg"
import socialFour from "../../../Assets/Icons/social4.jpg"
import InstaIcon from "../../../Assets/Icons/instagram_logo.png"
const Instagram = () => {
    return (
        <div className='socialIconics'>
            <Container fluid className='myCont'>
                <Row>
                    <Col xs={12} md={2} lg={2}>
                    <img className='img-fluid' src={socialOne} alt="" />
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                    <img className='img-fluid' src={socialTwo} alt="" />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                    <div className="iconsInsta">
                        <div className="instaImg">
                            <img className='img-fluid myImgs' src={InstaIcon} alt="" />
                        </div>
                        <div className="instaText">
                            <h4>Follow Us on</h4>
                            <h2>Instagram</h2>
                        </div>
                    </div>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                    <img className='img-fluid' src={socialThree} alt="" />
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                    <img className='img-fluid' src={socialFour} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Instagram;