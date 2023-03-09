import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleDynamicBlog = () => {
    const {id}= useParams()
    console.log(id._id)
    const [myBlogs, setMyBlogs]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/blogs/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

    return (
        <div>
            <h1>This is Dynamic Blogs</h1>
        </div>
    );
};

export default SingleDynamicBlog;