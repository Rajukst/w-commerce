import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import "./CheckOut.css"
import { useState } from 'react';
import { useEffect } from 'react';

const CheckOut = ({cart}) => {
    const [citys, setSities]= useState([])
    const dispatch= useDispatch()
    console.log(cart);

    // unit total amount
    const unitTotal = cart?.product?.salePrice * cart?.qty;

    return (
        <>
    <Row className='mb-2'>
    <Col lg={6}>
            <div className="fistCols">
                <div className="imageCol">
                <img src={cart?.product?.image} alt="" />
                </div>
                <div className="nameInformation">
                <h6>Name: {cart?.product?.title}</h6>
                <h6>Size: {cart?.product?.selSize}</h6>
                </div>
            </div>
          </Col>
          <Col lg={2}>
            <h6 className='allInfo'>{cart?.qty}</h6>
          </Col>
          <Col lg={2}>
            <h6 className='allInfo'>{cart?.product?.salePrice}</h6>
          </Col>
          <Col lg={2}>
            <h6 className='allInfos'>{unitTotal}</h6>
          </Col>
    </Row>

        </>
    );
};

export default CheckOut;
