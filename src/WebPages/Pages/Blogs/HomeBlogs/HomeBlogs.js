import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllHomeBlogs from "./AllHomeBlogs";
import { Link } from "react-router-dom";
const HomeBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setAllBlogs(data));
  }, []);
  return (
    <Container>
      <h6>— Fashion Blog</h6>
      <h1>Latest News Feed</h1>
      <Row xs={1} md={3} lg={3} className="g-4">
        {allBlogs.map((getAllBlogs) => (
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
