import './image-slider.css';
import React from 'react';
import { imageData } from './imageData';
import { useState } from 'react';

const ImageSlider = () => {
  const [imgIdx, setImgIdx] = useState(0);

  const handleLeftClick = () => {
    setImgIdx((idx) => (idx <= 0 ? imageData.length - 1 : idx - 1));
  };
  const handleRightClick = () => {
    setImgIdx((idx) => (idx >= imageData.length - 1 ? 0 : idx + 1));
  };

  return (
    <div className='image-slider-container'>
      <div
        className='image-container'
        style={{
          backgroundImage: `url(${imageData[imgIdx].img})`,
        }}
      >
        <div className='left-div' onClick={handleLeftClick}>
          {'<'}
        </div>
        <div className='center-div'></div>
        <div className='right-div' onClick={handleRightClick}>
          {'>'}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
