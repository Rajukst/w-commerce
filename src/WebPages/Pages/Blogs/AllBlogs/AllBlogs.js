import React, { useEffect, useState } from "react";

const AllBlogs=()=>{
    const [allBlogs, setAllBlogs]= useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/blogs")
        .then(res=>res.json())
        .then(data=>setAllBlogs(data))
    },[])
    return(
            <div>

            </div>
    )
}
export default AllBlogs;