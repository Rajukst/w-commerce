import React from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../../redux/allFeatures/Cart/cartSlice';

const SetAllProducts = ({product}) => {
    const {title, regularPrice, _id, salePrice,image}= product|| {};
    const dispatch= useDispatch()
    const handleAddToCart = (product) => {
      dispatch(addToCart({product, qty: 1}))
    }
    return (
        <>
        <Col>
        <div className="imagBody">
            <div className="headings">
                <img className='img-fluid' src={image} alt="dynamic-image" />
            </div>
           <Link className='titleLink' to={`/products/${_id}`}> <h6>{title}</h6></Link>
            <div className="TextBody">
                <div className="priceOne">
                <p>${salePrice}</p>   
                </div>
                <div className="priceOne">
                <p className='priceOnes'>${regularPrice}</p>
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
              <button onClick={()=>handleAddToCart(product)} className="mt-5 productBTN">
                <i className="fa-solid fa-cart-shopping pe-2"></i>Add To Cart
              </button>
            </div>
            <div className="addToWishButn">
              <button className="mt-5 productBTN">
                <i className="fa-regular fa-heart pe-2"></i>Add To WishList
              </button>
            </div>
          </div>
        </div>
        </Col>
        </>
    );
};

export default SetAllProducts;