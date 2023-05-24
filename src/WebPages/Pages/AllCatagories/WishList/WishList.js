import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SetWishList from './SetWishList';

const WishList = () => {
    const {wishlistItems}= useSelector((state)=>state.wishlist)
    return (
        <div>
            <Container className=" ">
        <h5>— New Collection</h5>
        <h1>Trending Products</h1>

        <Row xs={1} s={2} md={2} lg={4} className="g-4">
          {wishlistItems?.map((wishlist) => (
            <SetWishList
              key={wishlist._id}
              wishlist={wishlist}
            ></SetWishList>
          ))}
        </Row>
      </Container>
        <button className="mt-5 productBTN">View All Product</button>

        </div>
    );
};

export default WishList;