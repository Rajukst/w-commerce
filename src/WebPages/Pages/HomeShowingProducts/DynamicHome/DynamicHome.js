import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const DynamicHome =()=>{
    const {id}= useParams()
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return(
        <div>
            <h1>{products.name}</h1>
        </div>
    )
}
export default DynamicHome;