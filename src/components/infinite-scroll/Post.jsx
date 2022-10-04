import React from 'react';

const Post = ({ postContent }) => {
  const { id, title, body } = postContent;

  return (
    <div className='post-container'>
      <h3>
        {id} {title}
      </h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
