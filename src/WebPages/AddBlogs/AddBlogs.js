import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const AddBlogs = () => {
  const addBlogName = useRef();
  const addBlogText = useRef();
  const addBlogImage = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const blogName = addBlogName.current.value;
    const blogImage = addBlogImage.current.value;
    const blogDescription = addBlogText.current.value;
    const totalBlogs = { blogName, blogImage, blogDescription };
    console.log(totalBlogs);
    fetch("http://localhost:5000/add-blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalBlogs),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Blog Posted Successfully !!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <div className="addProduct-image">
        <h1 className="pt-5"> Add Blog</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name=""
            id=""
            ref={addBlogName}
            placeholder="Blog Name"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addBlogImage}
            placeholder="Blog Image or Url"
            required
          />
          <br />
          <br />
          <textarea
            placeholder="Short Description"
            id=""
            ref={addBlogText}
            name=""
            rows=""
            cols=""
          ></textarea>
          <br />
          <br />
          <Button type="submit" variant="outline-info">
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
