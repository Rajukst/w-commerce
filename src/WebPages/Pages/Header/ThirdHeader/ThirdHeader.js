import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ThirdHeader.css"
const ThirdHeader = () => {
    return (
        <>
            <Container className='ThirdContainer'>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                    <div className="myNavbar">
                      <Link to="/" className='anchorLink'>Home</Link>
                      <Link to="/mens" className='anchorLink'>Mens</Link>
                      <Link className='anchorLink'>Blog</Link>
                      <Link className='anchorLink'>Contact</Link>
                    </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <div className="user_cart">
                    <i className="fa-regular fa-user userList"></i>
                    <i className="fa-regular fa-heart userList"></i>
                    <i className="fa-solid fa-cart-shopping userList"></i>
                    </div>
                   
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ThirdHeader;