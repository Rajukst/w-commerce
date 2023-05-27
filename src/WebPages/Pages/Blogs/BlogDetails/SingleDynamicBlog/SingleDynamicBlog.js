import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./SingleDynamicBlog.css";
import { useRef } from "react";
import Swal from "sweetalert2";
import Comments from "./Comments";
import { useCommentsQuery, useSingleBlogQuery } from "../../../../../redux/allFeatures/products/productApi";
const SingleDynamicBlog = () => {
    const addName = useRef();
    const addEmail = useRef();
    const addComment = useRef();
  const { id } = useParams();
  // displaying all blog entries
  const {data: blogs}= useSingleBlogQuery(id)
  //displaying all comments
  const {data: comments}= useCommentsQuery();
  // posting comment
const handleCommentSubmit=e=>{
    e.preventDefault()
    const name = addName.current.value;
    const email = addEmail.current.value;
    const comment = addComment.current.value;
    const totalComment={name, email, comment}
    console.log(totalComment);
    fetch("https://service-yvt2.onrender.com/add-comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Comment Posted Successfully !!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
}
  return (
    <Container>
      <img className="img-fluid" src={blogs?.Image} alt="" />
      <div className="headingInfo">
        <h1>{blogs?.title}</h1>
        <p>{blogs?.shortDesOne}</p>
        <p>{blogs?.shortDesTwo}</p>
      </div>
      <div className="statusInfo">
        <p className="statusName">{blogs?.status}</p>
        <p className="statuss">"{blogs?.statusName}"</p>
      </div>
      <div className="shareInfo">
        <div className="leftSite">
          <p>ShareIt</p>
        </div>
        <div className="rightSite">
          <p>Tags</p>
        </div>
      </div>
      {/* displaying all Comments */}
      <div className="commenHeading">
        <h1>All Comments</h1>
        {
            comments?.map((getComment)=> <Comments
            key={getComment._id}
            comments={getComment}
            ></Comments> )
        }
      </div>
      <div className="commentInfo mt-5">
        <h1 className="leaveCmnt ms-4">Leave A Comment</h1>
      </div>
      <div className="blogComment">
        <form onSubmit={handleCommentSubmit}>
          <div className="nameNdEmail">
            <div className="name">
              <div className="mainInfo">
                <div className="infoHead">
                  <div className="title">
                    <h6>Name:</h6>
                  </div>
                  <div className="inputTitle">
                    <input
                      className="productInput"
                      type=""
                      name=""
                      id=""
                      required
                      ref={addName}
                    />
                  </div>
                  <div className="title">
                    <h6>Email:</h6>
                  </div>
                  <div className="inputTitle">
                    <input
                      className="productInput"
                      type="email"
                      name=""
                      id=""
                      required
                      ref={addEmail}
                    />
                  </div>
                  <div className="title">
                    <h6>Comment:</h6>
                  </div>
                  <div className="inputTitle">
                    <textarea ref={addComment} name="" id="" cols="" rows="" required></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="postCMNT">
          <button type="submit" className="mb-5 shopBTN">Post Comment</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SingleDynamicBlog;
