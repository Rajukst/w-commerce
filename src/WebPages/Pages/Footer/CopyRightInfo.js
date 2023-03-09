import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./CopyRightInfo.css"
import SSLLogo from "../../../Assets/Icons/SSLlogo.png"
const CopyRightInfo = () => {
    return (
        <div className='copyRight'>
            <Container className='pt-5'>
                <Row>
                    <Col xs={12} md={6} lg={6} >&copy; All Right Reserved; This site is made by Raju Ahammed</Col>
                    <Col xs={12} md={6} lg={6} >
                    <img className='img-fluid' src={SSLLogo} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CopyRightInfo;