import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeProductList.css";
import ShowingProductTwo from "./ShowingProductTwo/ShowingProductTwo";
import { useProductsQuery } from "../../../redux/allFeatures/products/productApi";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

const HomeProductList = () => {
  const { data: products, isLoading, } = useProductsQuery() || {};

  
  return (
    <>
      <Container fluid className=" ">
        <h5>— New Collection</h5>
        <h1>Trending Products</h1>
        {isLoading && (
          <div className="loadingAnimations">
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_a2chheio.json"
              style={{ height: "300px", width: "300px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
        )}

        <Row xs={1} s={2} md={2} lg={4} className="g-4">
          {products?.slice(0, 4).map((product) => (
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
