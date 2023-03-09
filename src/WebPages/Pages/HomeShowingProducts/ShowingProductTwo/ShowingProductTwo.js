import React from 'react';
import { Col } from 'react-bootstrap';
import "./ShowingProductTwo.css"
const ShowingProductTwo = ({productlist}) => {
    const {name, priceOne, priceTwo, image, description}= productlist;
    return (
        <>
        <Col>
        <div className="imagBody">
            <div className="headings">
                <img className='img-fluid' src={image} alt="" />
            </div>
            <h6>{name}</h6>
            <div className="TextBody">
                <div className="priceOne">
                    <p className='priceOnes'>{priceOne}</p>
                </div>
                <div className="priceOne">
                    <p>{priceTwo}</p>
                </div>
            </div>
            <div className="reviews">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            </div>
        </div>
        </Col>
        </>
        
        
    );
};

export default ShowingProductTwo;