import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../Redux/Features/BlogDataSlice";

const AddBlogs = () => {


  return (
    <div>
      <div className="addProduct-image">
        <h1 className="pt-5"> Add Blog</h1>
        <form onSubmit={handleBlogSubmit}>
          <input
            type="text"
            name="blogName"
            id=""
            placeholder="Blog Name"
            required
            onChange={getBlogData}
          />
          <br />
          <br />
          <input
            type="text"
            name="blogImage"
            id=""
            placeholder="Blog Image or Url"
            required
            onChange={getBlogData}
          />
          <br />
          <br />
          <textarea
            placeholder="Short Description"
            id=""
            name="description"
            rows=""
            cols=""
            onChange={getBlogData}
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
