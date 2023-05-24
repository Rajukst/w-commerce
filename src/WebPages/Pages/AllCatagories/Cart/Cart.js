import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { Col, Container, Row } from "react-bootstrap";
import RenderCart from "./RenderCart";
import {
  calculateTotalAmount,
  clearAllCart,
} from "../../../../redux/allFeatures/Cart/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state?.carts);
  console.log(cartItems?.product?.qty);

  // get the subtotal from the cart
  const { cartTotalAmount } = useSelector((state) => state.carts);
  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cartItems]);
  // empty cart
  const clearCartHandler = () => {
    dispatch(clearAllCart());
    toast.success("Cart Cleared");
  };
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6} lg={8}>
            <div className="CartInfo">
              <div className="cartHeading">
                <div className="leftHeading">
                  <h6>Shopping Cart Details</h6>
                </div>
                <div className="rightHeading">
                  <h6>
                    <span className="me-1">{cartItems.length}</span> Items In
                    Cart
                  </h6>
                </div>
              </div>
              {cartItems?.map((cart) => (
                <RenderCart key={cart._id} cart={cart}></RenderCart>
              ))}
             <div className="clrCart">
             <button className="clearCart" onClick={clearCartHandler}>Clear Cart</button>
             </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="checkOutInfos">
              <h1>Order Summary</h1>
              <div className="headingText">
                <div className="leftText">
                  <h6>Items</h6>
                </div>
                <div className="leftText">
                  <h6>Total</h6>
                </div>
              </div>
              <div className="blogComments">
                <div className="nameNdEmails">
                  <div className="names">
                    <div className="mainInfos">
                      <div className="infoHeads">
                        <div className="titles">
                          <h6>Got a Promotional Code?</h6>
                        </div>
                        <div className="inputTitles">
                          <input
                            className="productInputs"
                            type=""
                            name=""
                            id=""
                            placeholder="Enter your code"
                          />
                        </div>
                        <div className="applyCodeBTN">
                          <button className="mb-5 applyBTN ">Apply code</button>
                        </div>
                      </div>
                      <div className="subTotals">
                        <div className="subtotalText">
                          <h6>SubTotal</h6>
                        </div>
                        <div className="subtotalText">
                          <h6>${cartTotalAmount}</h6>
                        </div>
                      </div>
                      <div className="delevaryInfo">
                        <p>(Excluding Delevary)</p>
                      </div>
                      {/*  */}
                      <div className="subTotals">
                        <div className="subtotalText">
                          <h6>Total Cost</h6>
                        </div>
                        <div className="subtotalText">
                          <h6>{cartTotalAmount}/=</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="postCMNTs">
                <Link to="/checkout">  <button type="submit" className="mb-5 shopBTN">
                    CheckOut
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
