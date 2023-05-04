import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleDynamicBlog = () => {
    const {id}= useParams()
    const [myBlogs, setMyBlogs]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/blogs/${id}`)
        .then(res=>res.json())
        .then(data=>setMyBlogs(data))
    },[]);
    
    return (
        <Container>
            <img className='img-fluid' src={myBlogs.blogImage} alt="" />
            <h1>{myBlogs.blogName}</h1>
            <p>{myBlogs.blogDescription}</p>
        </Container>
    );
};

export default SingleDynamicBlog;