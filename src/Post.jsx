import React from 'react';
import './Post.css'

const Post = ({post}) => {
    const{userId,id,title,body}=post;
    return (
        <div className='post'>
            <h5>Title:{title}</h5>
            <p><small>userId:{userId}</small></p>
            <p><small>postId:{id}</small></p>
            <p>{body}</p>
        </div>
    );
};

export default Post;