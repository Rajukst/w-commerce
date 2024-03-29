import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./DynamicHome.css";
import { useDispatch } from "react-redux";
import { useProductsByIdQuery } from "../../../../redux/allFeatures/products/productApi";
import { addToCart } from "../../../../redux/allFeatures/Cart/cartSlice";
import { toast } from "react-hot-toast";
import { addToWishlist } from "../../../../redux/allFeatures/wishlist/wishlistSlice";

const DynamicHome = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: product } = useProductsByIdQuery(id) || {};
  console.log(product);
  const [qty, setqty] = useState(1);
  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, qty: Number(qty) }));
    toast.success("Cart added successfully");
    navigate("/cart");
  };
   // here is where the product is added to the wishlist
   const handleWishList=(product)=>{
    dispatch(addToWishlist(product))
    navigate("/wishlist")
  }
  return (
    <>
      <div className="main-containers">
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <div className="leftItems me-3">
                <img className="img-fluid" src={product?.image} alt="" />
              </div>
            </Col>
            <Col>
              <div className="rightItems mt-2">
                <h2>{product?.title}</h2>
                <div className="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="prices">
                  <h3>Tk {product?.salePrice}</h3>
                  <h5 className="mt-2 ps-4 pricesTwo priceOnes">
                    Tk {product?.regularPrice}
                  </h5>
                </div>
                <div className="availablity">
                  <h6>Availablity: {product?.stock}</h6>
                  <h6>Total Stock: {product?.quantity}</h6>
                </div>
                <div className="shortDes">
                  <p>Short Info: {product?.shortDes}</p>
                </div>
                <div className="shortDess">
                  <div className="colorNames">
                    <p>Avaiable Colors:</p>
                  </div>
                  <div className="colorGen">
                    <button
                      className="colorButtons"
                      style={{ backgroundColor: product?.color }}
                    ></button>
                  </div>
                </div>
                {/* Below Line is very Important.. so keep it safe */}
                <div className="productDes">
                  <p dangerouslySetInnerHTML={{ __html: product?.editor }}></p>
                </div>
                <div className="cartAndOther">
                  <div className="cartFunctions">
                    <button className="cartButtons">-</button>
                    <input
                      value={qty}
                      min={1}
                      onChange={(e) => setqty(e.target.value)}
                      type="number"
                      className="cartInput"
                    />
                    <button className="cartButtons">+</button>
                  </div>
                </div>
                <div className="cartAndOtherBtnss">
                  <div className="addToCartButnss">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-5 productBTNsw"
                    >
                      <i className="fa-solid fa-cart-shopping pe-2"></i>Add To
                      Cart
                    </button>
                  </div>
                  <div className="addToWishButnses">
                    <button onClick={()=>handleWishList(product)} className="mt-5 productBTNsw">
                      <i className="fa-regular fa-heart pe-2"></i>Add To
                      WishList
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
