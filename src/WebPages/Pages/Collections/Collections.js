import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoOne from "../../../Assets/Icons/03.png"
import PhotoTwo from "../../../Assets/Icons/0134.png"
import "./Collection.css"
import { Link, useNavigate } from 'react-router-dom';
const Collections = () => {
    const navigate= useNavigate()
    return (
        <div className='mb-5 mt-5'>
            <Container>
                <Row className="g-4">
                    <Col xs={12} md={6} lg={6}>
                        <div className="collectionsOne">
                            <div className="collectionText">
                                <h5> Summer Collection</h5>
                                <h1> Women Fashion</h1>
                                <button className='shopNow'><Link className='myLinkCls' to="/womens">Shop Now</Link></button>
                            </div>
                            <div className="collectionImg">
                                <img className='img-fluid hoverImg' src={PhotoOne} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <div className="collectionsOne">
                            <div className="collectionText">
                                <h5>Bag Collection</h5>
                                <h1>Trend Fashion</h1>
                                <button className='shopNow'>Shop Now</button>
                            </div>
                            <div className="collectionImg">
                                <img className='img-fluid hoverImg' src={PhotoTwo} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Collections;