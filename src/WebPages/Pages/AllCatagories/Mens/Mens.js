import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { useProductsQuery } from '../../../../redux/allFeatures/products/productApi';
import SetMens from './SetMens';

const Mens = () => {
    const {data:products, isLoading, isError}= useProductsQuery()

    return (
        <Container fluid>
        <h6>—Mens Collection</h6>
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
            {
                products?.filter(catagory=>catagory.finalFatagory?.includes("Mens")).map((product)=><SetMens
                key={product._id}
                product={product}
                ></SetMens>)
            }
        </Row>
      </Container>
    );
};

export default Mens;