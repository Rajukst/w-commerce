import React from "react";
import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./ShowingProductTwo.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/allFeatures/Cart/cartSlice";
import { toast } from "react-hot-toast";
import { addToWishlist } from "../../../../redux/allFeatures/wishlist/wishlistSlice";
const ShowingProductTwo = ({ product}) => {
  const dispatch= useDispatch()
  const navigate = useNavigate();
  const { title, slug, shortDes, regularPrice, _id, salePrice,image } = product || {};

  // here is where the product is added to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart({product, qty: 1}))
    toast.success("Cart added successfully")
  }
  
  // here is where the product is added to the wishlist
  const handleWishList=(product)=>{
    dispatch(addToWishlist(product))
    navigate("/wishlist")
  }
  return (
    <>
      <Col>
        <div className="imagBody">
          <div className="headings">
          <Link className="titleLink" to={`/products/${_id}`}>
          <img className="img-fluid homeImage" src={image} alt="dynamic-image" />
          </Link>
           
          </div>
          <div className="text">
          <h6>{title}</h6>
          </div>
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
              <button onClick={()=>handleAddToCart(product)} className=" productsss">
                <i className="fa-solid fa-cart-shopping pe-2"></i>
              </button>
            </div>
            <div className="addToCartButn">
              <button onClick={()=>handleWishList(product)} className=" productsss">
                <i className="fa-regular fa-heart pe-2"></i>
              </button>
            </div>
          </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ShowingProductTwo;
