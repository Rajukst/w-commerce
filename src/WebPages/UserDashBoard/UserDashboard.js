import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./UserDashboard.css";
import { Link, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <>
   <Container fluid className="homeCarsuls mb-2">
      <Row className="g-4">
      <Col xs={12} md={6} lg={3} className="left-col">
      <div className="allCatagoriesss">
                <div className="listItemsss">
                 <h5 className="allCatagoris">UserDashboard</h5>
                 <Link to="orders" className="myLink"><h6>Orders</h6></Link>
                 <Link to="review" className="myLink"><h6>Review</h6></Link>
                 <Link to="address" className="myLink"><h6>Address</h6></Link>
                 <Link to="account" className="myLink"><h6>Account Details</h6></Link>
                 <Link to="cngpassword" className="myLink"><h6>Change Password</h6></Link>
                 <button className="LogOutButton">Log Out</button>
                </div>
            </div>
      </Col>
      <Col xs={12} md={6} lg={9}>
      <Outlet/>
      </Col>
      </Row>
      </Container>
   </>
  );
};

export default UserDashboard;
