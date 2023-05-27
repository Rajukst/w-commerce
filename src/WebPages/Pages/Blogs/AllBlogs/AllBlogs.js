import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SetAllBlogs from "./SetAllBlogs";
import { useFetchBlogsQuery } from "../../../../redux/allFeatures/products/productApi";

const AllBlogs=()=>{
  const {data: blogs}= useFetchBlogsQuery() || {};
    return(
        <>
        <Container>
        <h6>— Fashion Blog</h6>
            <h1>Latest News Feed</h1>
        <Row xs={1} md={3} lg={3} className="g-4">
        {
            blogs.map(getBlogs=> <SetAllBlogs
            key={getBlogs._id}
            bloglists={getBlogs}
            ></SetAllBlogs> )
        }
  </Row>
        </Container>
        
        </>
    )
}
export default AllBlogs;