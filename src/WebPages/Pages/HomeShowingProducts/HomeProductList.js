import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeProductList.css";
import ShowingProductTwo from "./ShowingProductTwo/ShowingProductTwo";
import { useDispatch } from "react-redux";
import { useProductsQuery } from "../../../redux/allFeatures/products/productApi";

const HomeProductList = () => {
const {data: products, isLoading, isError}= useProductsQuery() ||{}
const dispatch= useDispatch()


  return (
    <>
      <Container className=" ">
        <h5>— New Collection</h5>
        <h1>Trending Products</h1>
        <Row xs={1} s={2} md={2} lg={4} className="g-4">
          {products?.slice(0,4).map((product) => (
                <ShowingProductTwo
                  key={product._id}
                  product={product}
                ></ShowingProductTwo>
              ))}
        </Row>
      </Container>
      <Link to="/products">
        <button className="mt-5 productBTN">View All Product</button>
      </Link>
    </>
  );
};

export default HomeProductList;
