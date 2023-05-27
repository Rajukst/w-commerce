import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Information.css"
const Information = () => {
    return (
        <div className='info-timeline pt-5 pb-5'>
            <Container fluid>
                <Row>
                    <Col xs={12} md={3} lg={3}>
                        <div className="allInfor">
                            <div className="infoIcon">
                            <i class="fa-solid fa-truck fa-2x"></i>
                            </div>
                            <div className="infoText">
                            <h5>Free Shipping</h5>
                            <h6>Free Shipping Offer Available</h6>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                    <div className="allInfor">
                            <div className="infoIcon">
                            <i class="fa-solid fa-hand-holding-dollar fa-2x"></i>
                            </div>
                            <div className="infoText">
                            <h5>Money Return</h5>
                            <h6>Return Money if not Satisifed</h6>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                   
                    <div className="allInfor">
                            <div className="infoIcon">
                            <i class="fa-solid fa-lock fa-2x"></i>
                            </div>
                            <div className="infoText">
                            <h5>Secure Payment</h5>
                            <h6>100% Secure Transection </h6>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                    <div className="allInfor">
                            <div className="infoIcon">
                            <i class="fa-solid fa-headset fa-2x"></i>
                            </div>
                            <div className="infoText">
                            <h5>24/7 Support</h5>
                            <h6>Provide Best Customer Support</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Information;