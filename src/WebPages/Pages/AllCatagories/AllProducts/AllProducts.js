import React, { useEffect, useState } from "react";
import SetAllProducts from "./SetAllProducts";
import { Container, Row } from "react-bootstrap";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <>
      <Container>
        <h6>—New Collection</h6>
        <h1>Trending Products</h1>
        <Row xs={1} md={3} lg={3} className="g-4">
          {allProducts.map((getBlogs) => (
            <SetAllProducts
              key={getBlogs._id}
              productlist={getBlogs}
            ></SetAllProducts>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllProducts;
