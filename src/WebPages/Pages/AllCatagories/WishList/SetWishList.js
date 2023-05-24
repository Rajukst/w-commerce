import React from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/allFeatures/Cart/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { removeWishListItem } from '../../../../redux/allFeatures/wishlist/wishlistSlice';
import { toast } from 'react-hot-toast';

const SetWishList = ({wishlist}) => {
  const { _id, title, image, salePrice, regularPrice}= wishlist || {};
const dispatch = useDispatch();
const navigate= useNavigate()
  const addCartFromWishlist = (wishlist)=>{
    dispatch(addToCart({product: wishlist, qty: Number(1)}))
    navigate('/cart')
    toast.success("Item added successfully")
  }
  const removeWishListHandler=(wishlist)=>{
dispatch(removeWishListItem(wishlist))
toast.success("Item removed from wishlist")
  }
    return (
        <Col>
        <div className="imagBody">
          <div className="headings">
            <img className="img-fluid homeImage" src={image} alt="dynamic-image" />
          </div>
          <Link className="titleLink" to={`/products/${_id}`}>
            <h6>{title}</h6>
          </Link>
          <div className="hoversBody">
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
          <div className="cartAndOtherBtns">
            <div className="addToCartButn">
              <button onClick={()=>addCartFromWishlist(wishlist)} className=" productsss">
                <i className="fa-solid fa-cart-shopping pe-2"></i>
              </button>
            </div>
            <div className="addToCartButn">
              <button onClick={()=>removeWishListHandler(wishlist)} className=" productsss">
              <i class="fa-solid fa-trash pe-2"></i>
              </button>
            </div>
          </div>
          </div>
        </div>
      </Col>
    );
};

export default SetWishList;