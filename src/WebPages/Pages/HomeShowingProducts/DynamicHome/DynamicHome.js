import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./DynamicHome.css";

const DynamicHome = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className="mt-5 mb-5">
      <div className="main-containers">
        <div className="leftItems me-3">
          <img className="img-fluid" src={products.image} alt="" />
        </div>
        <div className="rightItems mt-5">
          <h2>{products.name}</h2>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="prices">
            <h3>${products.priceOne}</h3>
            <h5 className="mt-2 ps-4 pricesTwo">${products.priceTwo}</h5>
          </div>
          <div className="availablity">
            <h6>Availablity:</h6>
            <h6>Catagories:</h6>
          </div>
          <div className="productDes">{products.description}</div>
          <div className="cartAndOther">
            <div className="cartFunctions">
              <button className="cartButtons">-</button>
              <input type="number" className="cartInput" />
              <button className="cartButtons">+</button>
            </div>
            <div className="selectedItems">
              <p>this is selected items</p>
            </div>
          </div>
          <div className="cartAndOtherBtn">
            <div className="addToCartButn">
              <button className="mt-5 productBTN">
                <i className="fa-solid fa-cart-shopping pe-2"></i>Add To Cart
              </button>
            </div>
            <div className="addToWishButn">
              <button className="mt-5 productBTN">
                <i className="fa-regular fa-heart pe-2"></i>Add To WishList
              </button>
            </div>
          </div>
          <div className="shareBox mt-5">
            <div className="shareText">
              <h5>Share it On:</h5>
            </div>
            <div className="iconics">
            <i className="fa-brands fa-facebook fa-2x"style={{color: "#4267B2"}}></i>
              <i class="fa-brands fa-instagram fa-2x"style={{color: "#e95950"}}></i>
              <i class="fa-brands fa-twitter fa-2x"style={{color: "#00acee"}}></i>
              <i class="fa-brands fa-youtube fa-2x"style={{color: "#FF0000"}}></i>
              <i class="fa-brands fa-linkedin-in fa-2x"style={{color: "#0072b1"}}></i>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default DynamicHome;
