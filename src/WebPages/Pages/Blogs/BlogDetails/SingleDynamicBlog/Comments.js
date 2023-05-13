import React from 'react';

const Comments = ({ comments}) => {
    const {name, comment}= comments;
    return (
        <div>
            <div className="commentHead mt-4">
            <div className="cmntName">
                <h6>{name}</h6>
            </div>
            <div className="cmntDate ms-3">
                <small>Date</small>
            </div>
        </div>
        <p>{comment}</p>
        <button className='replyBtn'><i className="fa-regular fa-comment-dots pe-1"></i>Reply</button>
        </div>
    );
};

export default Comments;