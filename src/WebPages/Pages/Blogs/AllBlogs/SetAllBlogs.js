import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SetAllBlogs = ({bloglists}) => {
    const {_id, Image,shortDesOne,shortDesTwo,status,statusName,title}= bloglists;
    
    return (
        <Col>
        <div className="imagBodys">
        <div className="headings">
          <Link className="titleLink" to={`/blogs/${_id}`}>
            <img
              className="img-fluid homeImage imgRound"
              src={Image}
              alt="dynamic-image"
            />
          </Link>
        </div>
         <div className="titles">
         <h4>{shortDesOne.slice(0, 30)}</h4>
         </div>
        </div>
        </Col>
    );
};

export default SetAllBlogs;