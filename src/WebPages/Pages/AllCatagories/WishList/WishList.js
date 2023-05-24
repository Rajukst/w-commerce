import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SetWishList from './SetWishList';
import { clearAllWishlists } from '../../../../redux/allFeatures/wishlist/wishlistSlice';
import { toast } from 'react-hot-toast';

const WishList = () => {
    const {wishlistItems}= useSelector((state)=>state.wishlist)
    const dispatch = useDispatch();
    //
    const clearWishListHandler = () => {
      dispatch(clearAllWishlists());
      toast.success("WishList Cleared");
    };
    return (
        <div>
            <Container className="mt-5 mb-5 ">
        <h5>— WishList page</h5>
       {
        wishlistItems?.length==0 && <h1>Your WishList is Empty</h1>
       }
        <Row xs={1} s={2} md={2} lg={4} className="g-4">
          {wishlistItems?.map((wishlist) => (
            <SetWishList
              key={wishlist._id}
              wishlist={wishlist}
            ></SetWishList>
          ))}
        </Row>
      </Container>
      <div className="clrWishList">
          <button onClick={clearWishListHandler}>Clear Wishlist</button>
        </div>
        </div>
    );
};

export default WishList;