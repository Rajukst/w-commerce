import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllHomeBlogs from "./AllHomeBlogs";
import { Link } from "react-router-dom";
import { useFetchBlogsQuery } from "../../../../redux/allFeatures/products/productApi";
const HomeBlogs = () => {
const {data: blogs}= useFetchBlogsQuery() || {};
  return (
    <Container fluid>
      <h6 className="pt-5">— Fashion Blog</h6>
      <h1>Latest News Feed</h1>
      <Row xs={1} md={4} lg={4} className="g-4">
        {blogs?.slice(0,4).map((getAllBlogs) => (
          <AllHomeBlogs
            key={getAllBlogs._id}
            blogs={getAllBlogs}
          ></AllHomeBlogs>
        ))}
      </Row>
      <Link to="/blogs">
        <button className="mt-5 productBTN">View All Blogs</button>
      </Link>
    </Container>
  );
};

export default HomeBlogs;
