import React from 'react';
import { Col } from 'react-bootstrap';

const SetWishList = ({wishlist}) => {
    return (
        <Col>
        <div className="imagBody">
          <div className="headings">
            <img className="img-fluid homeImage" src={wishlist?.image} alt="dynamic-image" />
          </div>
        
            {/* <h6>{title}</h6> */}
          <div className="hoversBody">
          <div className="TextBody">
            <div className="priceOne">
            {/* <p>${salePrice}</p>  */}
            </div>
            <div className="priceOne">
            {/* <p className="priceOnes">${regularPrice}</p> */}
            </div>
          </div>
          <div className="reviews">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <div className="cartAndOtherBtns">
            <div className="addToCartButn">
             
            </div>
            <div className="addToCartButn">
            </div>
          </div>
          </div>
        </div>
      </Col>
    );
};

export default SetWishList;