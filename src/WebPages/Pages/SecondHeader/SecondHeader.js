import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./SecondHeader.css";
import mobilePhoto from "../../../Assets/Icons/mobile.png";
import Logo from "../../../Assets/Icons/logo.jpg";
import ThirdHeader from "../Header/ThirdHeader/ThirdHeader";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";
const SecondHeader = () => {
const {user, logOut}=useContext(AuthContext)
const handleLogOut=()=>{
  logOut()
  .then(()=>{
    toast.success('Log Out Success!')
  })
  .catch(err=>console.log(err))
}
  return (
    <>
      <Container fluid className="mt-3">
        <Row>
          <Col xs={12} md={4} lg={3}>
            <img src={Logo} alt="" height="70px" width="150px" />
          </Col>
          <Col xs={12} md={4} lg={3}>
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
          <Col xs={12} md={4} lg={3}>
            <form>
              <input name="search" placeholder="Search.." />
            </form>
          </Col>
         <Col xs={12} md={4} lg={3} className="logOutCol">
         {user?.email &&  <div className="wellcome-div"> <span className="wellcome-span me-1">WellCome: </span> {user.email}</div>}
          {user?.email ? (
          <button onClick={handleLogOut}  variant="outline-info" className="logOutBtn">
            LogOut
          </button>
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
