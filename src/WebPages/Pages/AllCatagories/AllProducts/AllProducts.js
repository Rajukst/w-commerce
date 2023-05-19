import React, { useEffect, useState } from "react";
import SetAllProducts from "./SetAllProducts";
import { Container, Row } from "react-bootstrap";

import CustomLoader from "../../../CustomLoader/CustomLoader";
import { useDispatch, useSelector } from "react-redux";
import { useProductsQuery } from "../../../../redux/allFeatures/products/productApi";

const AllProducts = () => {
  const dispatch= useDispatch()
  const {data:products, isLoading, isError}= useProductsQuery()
  console.log(products)
  return (
    <>
      <Container>
        <h6>—New Collection</h6>
        <h1>Trending Products</h1>
      
        <Row xs={1} md={3} lg={4} className="g-4 mt-3 mb-3">
       
          {products?.map((product) => (
            <SetAllProducts
              key={product._id}
              product={product}
            ></SetAllProducts>
          ))} 
        </Row>
      </Container>
    </>
  );
};

export default AllProducts;
