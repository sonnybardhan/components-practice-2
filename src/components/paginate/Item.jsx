import React from 'react';

const Item = ({ content }) => {
  const { id, title, body } = content;

  return (
    <div className='content-block'>
      <h3>
        {id} {title}
      </h3>
      <p>{body}</p>
    </div>
  );
};

export default Item;
