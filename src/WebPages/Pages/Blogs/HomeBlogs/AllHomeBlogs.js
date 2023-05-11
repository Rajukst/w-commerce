import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllHomeBlogs = ({blogs}) => {
    const {_id, blogName, blogImage}= blogs
    return (
        <Col>
        <div className="imagBodys">
            <div className="headingss">
                <img className='img-fluid hovrBlog' src={blogImage} alt="" />
            </div>
           <Link to={`/blogs/${_id}`}> <h4>{blogName}</h4></Link>
        </div>
        </Col>
    );
};

export default AllHomeBlogs;