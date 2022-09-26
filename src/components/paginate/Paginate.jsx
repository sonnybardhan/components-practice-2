import './paginate.css';
import React from 'react';
import Item from './Item';
import Buttons from './Buttons';
import { useState } from 'react';
import { useEffect } from 'react';

const POSTS_TO_DISPLAY = 4;

const Paginate = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [startingPost, setStartingPost] = useState(0);

  useEffect(() => {
    setStartingPost(currentPage * POSTS_TO_DISPLAY);
  }, [currentPage]);

  const contentToDisplay = items
    .slice(startingPost, startingPost + POSTS_TO_DISPLAY)
    .map((item) => <Item content={item} key={item.id} />);

  const handleBtnClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      <div className='content-container'>{contentToDisplay}</div>

      <Buttons
        page={currentPage}
        items={items}
        btnClick={handleBtnClick}
        limit={POSTS_TO_DISPLAY}
        currentPage={currentPage}
      />
    </>
  );
};

export default Paginate;
