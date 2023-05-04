import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ShowingProductTwo.css";
const ShowingProductTwo = ({ productlist }) => {
  const { name, priceOne, priceTwo, image, _id } = productlist;
  return (
    <>
      <Col>
        <div className="imagBody">
          <div className="headings">
            <img className="img-fluid" src={image} alt="dynamic-image" />
          </div>
          <Link to={`/home-product/${_id}`}>
            <h6>{name}</h6>
          </Link>
          <div className="TextBody">
            <div className="priceOne">
              <p className="priceOnes">${priceOne}</p>
            </div>
            <div className="priceOne">
              <p>${priceTwo}</p>
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
