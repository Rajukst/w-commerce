import React from "react";
import SetAllProducts from "./SetAllProducts";
import { Container, Row } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { useProductsQuery } from "../../../../redux/allFeatures/products/productApi";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

const AllProducts = () => {
  const dispatch= useDispatch()
  const {data:products, isLoading, isError}= useProductsQuery()
  console.log(products)
  return (
    <>
      <Container>
        <h6>—New Collection</h6>
        <h1>Trending Products</h1>
        {
          isLoading && <div className="loadingAnimations">
          <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_a2chheio.json"
        style={{ height: "300px", width: "300px", }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      </div>
        }
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
