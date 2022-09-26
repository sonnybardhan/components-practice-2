import React from 'react';

const Buttons = ({ items, limit, btnClick, currentPage }) => {
  let buttons = [];

  const numPages = Math.ceil(items.length / limit);

  for (let i = 0; i < numPages; i++) {
    const button = (
      <button
        className={i === currentPage ? 'page-btn active' : 'page-btn'}
        key={i}
        onClick={() => btnClick(i)}
      >
        {i + 1}
      </button>
    );
    buttons.push(button);
  }

  return (
    <div className='buttons-container'>
      <button className='page-btn end' onClick={() => btnClick(0)}>
        ‹‹
      </button>
      {buttons}
      <button
        className='page-btn end'
        onClick={() => {
          btnClick(numPages - 1);
        }}
      >
        ››
      </button>
    </div>
  );
};

export default Buttons;
