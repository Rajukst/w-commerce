import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOut from "./CheckOut";
import { useEffect } from "react";
import {
  calculateTotalAmount,
  clearAllCart,
} from "../../redux/allFeatures/Cart/cartSlice";
import { Col, Container, Row } from "react-bootstrap";
import { useCityApiQuery } from "../../redux/allFeatures/Auth/authApi";
import { useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutCreate = () => {
  const addName = useRef();
  const addEmail = useRef();
  const addPhone = useRef();
  const addAddress = useRef();
  const addCity = useRef();
  const addState = useRef();
  const addZip = useRef();
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state?.carts);
  const { cartTotalAmount } = useSelector((state) => state.carts);
const navigate= useNavigate()
  console.log(cartItems?.product?.qty);
  const { data } = useCityApiQuery();
  console.log(typeof data);
  // get the subtotal from the cart
  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cartItems]);
  console.log(cartItems);

  const submitOrder = (e) => {
    e.preventDefault();
    const name = addName.current.value;
    const emails = addEmail.current.value;
    const phone = addPhone.current.value;
    const address = addAddress.current.value;
    const city = addCity.current.value;
    const state = addState.current.value;
    const zip = addZip.current.value;

    const allData = {
      name,
      emails,
      phone,
      address,
      city,
      state,
      zip,
      cartItems,
      orderStatus:"pending",
    };

    fetch("https://service-yvt2.onrender.com/add-order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Created Successfully !!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
    console.log(e);
    dispatch(clearAllCart());
    navigate("/")
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={6}>
          <h6 className="orders">Order Summery</h6>
        </Col>
        <Col lg={2}>
          <h6 className="allInfo">Quantity</h6>
        </Col>
        <Col lg={2}>
          <h6 className="allInfo"> Sale Price</h6>
        </Col>
        <Col lg={2}>
          <h6 className="allInfo">Unit Total</h6>
        </Col>

        {cartItems?.map((cart) => (
          <CheckOut key={cart._id} cart={cart}></CheckOut>
        ))}
        <div className="cartTotal">
          <h6>Total Cost Amount: {cartTotalAmount}</h6>
        </div>
      </Row>

      <Row>
        <div className="AddressInfo">
          <h4>Billing Address</h4>
          <div className="blogComment">
            <form onSubmit={submitOrder}>
              <div className="nameNdEmail">
                <div className="name">
                  <div className="mainInfo">
                    <div className="infoHead">
                      <div className="title">
                        <h6>Name:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                          ref={addName}
                        />
                      </div>
                      <div className="title">
                        <h6>Phone:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                          ref={addPhone}
                        />
                      </div>
                      <div className="title">
                        <h6>Email:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type="email"
                          name=""
                          id=""
                          required
                          defaultValue={email}
                          ref={addEmail}
                        />
                      </div>
                      <div className="title">
                        <h6>Address:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                          ref={addAddress}
                        />
                      </div>
                      <div className="titles">
                        <h6>Select District:</h6>
                      </div>
                      <div className="inputTitles">
                        <select ref={addCity} name="stock" id="cars">
                          {data?.map((getCountry) => (
                            <option value={getCountry?.bn_name}>
                              {getCountry?.bn_name}
                            </option>
                          ))}
                        </select>
                        <br />
                      </div>
                      <div className="title">
                        <h6>State:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                          ref={addState}
                        />
                      </div>
                      <div className="title">
                        <h6>Zip Code:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="productInput"
                          type=""
                          name=""
                          id=""
                          required
                          ref={addZip}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="postCMNT">
                <button type="submit" className="mb-5 shopBTN">
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default CheckoutCreate;
