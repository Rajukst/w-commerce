import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./SecondHeader.css";
import mobilePhoto from "../../../Assets/Icons/mobile.png";
import Logo from "../../../Assets/Icons/logo.jpg";
import ThirdHeader from "../Header/ThirdHeader/ThirdHeader";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logOut } from "../../../redux/allFeatures/Auth/authSlice";
import auth from "../../../Firebase/firebase.config";
const SecondHeader = () => {
  const dispatch= useDispatch()
  const {email}= useSelector(state=>state.auth)
const handleLogOut=()=>{
  signOut(auth)
  .then(()=>{
    dispatch(logOut())
  })
  toast.success("logout Success")
}
  return (
    <>
      <Container fluid className="mt-3">
        <Row>
          <Col xs={12} md={4} lg={4}>
            <img src={Logo} alt="" height="70px" width="150px" />
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="mobileSection">
              <div className="iconsItem">
                <img src={mobilePhoto} alt="" height="60px" width="35px" />
              </div>
              <div className="CallText">
                <p className="callNow">Call Us</p>
                <p className="callNum">+88001-3335-01133</p>
              </div>
            </div>
          </Col>
         <Col xs={12} md={4} lg={4} className="logOutCol">
         {email &&  <div className="wellcome-div"> <span className="wellcome-span me-1">WellCome: </span> {email}</div>}
          {email ? (
        <div>
            <button onClick={handleLogOut} variant="outline-info" className="ms-2 logOuts">
            LogOut
          </button>
        </div>
        ) : (
          <Link to="/login">
            <Button variant="outline-info" className="me-5">
              Login
            </Button>
          </Link>
        )}
         </Col>
        </Row>
      </Container>
      <ThirdHeader></ThirdHeader>
    </>
  );
};

export default SecondHeader;
