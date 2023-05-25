import React from 'react';
import { useProductsQuery } from '../../../../redux/allFeatures/products/productApi';
import { Container, Row } from 'react-bootstrap';
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import SetGIrls from './SetGIrls';
const Girls = () => {
    const {data:products, isLoading, isError}= useProductsQuery()
    return (
        <Container>
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
                products?.filter(catagory=>catagory.finalFatagory?.includes("Girls")).map((product)=><SetGIrls
                key={product._id}
                product={product}
                ></SetGIrls>)
            }
        </Row>
      </Container>
    );
};

export default Girls;