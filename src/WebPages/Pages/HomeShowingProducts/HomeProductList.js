import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./HomeProductList.css"
import ShowingProductTwo from './ShowingProductTwo/ShowingProductTwo';
const HomeProductList = () => {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    },[])
    return (
        <>
        <Container className=' '>
        <h5>— New Collection</h5>
            <h1>Trending Products</h1>
        <Row xs={1} s={2} md={2} lg={4} className="g-4">
        {
            products.slice(0,4).map(getProducts=> <ShowingProductTwo
            key={getProducts._id}
            productlist={getProducts}
            ></ShowingProductTwo> )
        }
  </Row>
        </Container>
        <Link to="/products"><button className='mt-5 productBTN'>View All Product</button></Link>
        </>
    );
};

export default HomeProductList;