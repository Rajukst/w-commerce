import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
    <>
       <div className="main-containers">
    <Container className="mt-5 mb-5">
   
        <Row>
          <Col>
          <div className="leftItems me-3">
          <img className="img-fluid" src={products.image} alt="" />
        </div>
          </Col>
          <Col>
          <div className="rightItems mt-2">
          <h2>{products.title}</h2>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="prices">
            <h3>${products.salePrice}</h3>
            <h5 className="mt-2 ps-4 pricesTwo">${products.regularPrice}</h5>
          </div>
          <div className="availablity">
            <h6>Availablity: {products.catagory}</h6>
            <h6>Catagories:{products.selSize}</h6>
          </div>
          <div className="shortDes">
            <p>Short Info: {products.shortDes}</p>
          </div>
          {/* <div className="productDes">
            <p dangerouslySetInnerHTML={{ __html: products.editor }}></p>
            {products.description}
          </div> */}
          <div className="cartAndOther">
            <div className="cartFunctions">
              <button className="cartButtons">-</button>
              <input type="number" className="cartInput" />
              <button className="cartButtons">+</button>
            </div>
            <div className="selectedItems">
              <div class="dropdown">
                <button>HubSpot Resources</button>
                <div class="dropdown-content">
                  <p>{products.size}</p>
                </div>
              </div>
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
          <div className="shareBox mt-3 mb-3">
            <div className="shareText">
              <h6>Share it On:</h6>
            </div>
            <div className="iconics">
              <i
                className="fa-brands fa-facebook"
                style={{ color: "#4267B2" }}
              ></i>
              <i
                class="fa-brands fa-instagram"
                style={{ color: "#e95950" }}
              ></i>
              <i
                class="fa-brands fa-twitter"
                style={{ color: "#00acee" }}
              ></i>
              <i
                class="fa-brands fa-youtube"
                style={{ color: "#FF0000" }}
              ></i>
              <i
                class="fa-brands fa-linkedin-in "
                style={{ color: "#0072b1" }}
              ></i>
            </div>
          </div>
        </div>
          </Col>
        </Row>
     
    </Container>
    </div>
    </>
  );
};
export default DynamicHome;
