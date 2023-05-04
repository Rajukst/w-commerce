import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogDetails from './BlogDetails/BlogDetails';

const Blogs = () => {
    const [blogs, setBlogs]= useState([])
    useEffect(()=>{
fetch("http://localhost:5000/blogs")
.then(res=>res.json())
.then(data=>setBlogs(data))

    },[])
    return (
          <>
        <Container>
        <h6>— Fashion Blog</h6>
            <h1>Latest News Feed</h1>
        <Row xs={1} md={3} lg={3} className="g-4">
        {
            blogs.slice(0,3).map(getBlogs=> <BlogDetails
            key={getBlogs._id}
            bloglist={getBlogs}
            ></BlogDetails> )
        }
  </Row>
  <Link to="/blogs"><button className='mt-5 productBTN'>View All Blogs</button></Link>
        </Container>
        
        </>
    );
};

export default Blogs;