import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ShowingProductTwo.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/allFeatures/Cart/cartSlice";
const ShowingProductTwo = ({ product}) => {
  const dispatch= useDispatch()
  const { title, slug, shortDes, regularPrice, _id, salePrice,image } = product || {};
  // const addToCartHandler = (product) => {
  //     dispatch(addToCart({productlist, qty: Number(1)}))
  //   };
  //   const addWishListHandler = () => {
  //         console.log("productlist");
  //       };
  return (
    <>
      <Col>
        <div className="imagBody">
          <div className="headings">
            <img className="img-fluid homeImage" src={image} alt="dynamic-image" />
          </div>
          <Link className="titleLink" to={`/products/${_id}`}>
            <h6>{title}</h6>
          </Link>
          <div className="TextBody">
            <div className="priceOne">
            <p>${salePrice}</p> 
            </div>
            <div className="priceOne">
            <p className="priceOnes">${regularPrice}</p>
            </div>
          </div>
          <div className="reviews">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <div className="cartAndOtherBtn">
            <div className="addToCartButn">
              <button  className="mt-5 productBTN">
                <i className="fa-solid fa-cart-shopping pe-2"></i>Add To Cart
              </button>
            </div>
            <div className="addToWishButn">
              <button  className="mt-5 productBTN">
                <i className="fa-regular fa-heart pe-2"></i>Add To WishList
              </button>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ShowingProductTwo;
