import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SetAllBlogs from "./SetAllBlogs";

const AllBlogs=()=>{
    const [allBlogs, setAllBlogs]= useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/blogs")
        .then(res=>res.json())
        .then(data=>setAllBlogs(data))
    },[])
    return(
        <>
        <Container>
        <h6>— Fashion Blog</h6>
            <h1>Latest News Feed</h1>
        <Row xs={1} md={3} lg={3} className="g-4">
        {
            allBlogs.map(getBlogs=> <SetAllBlogs
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