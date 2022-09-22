import './navbar.css';
import React from 'react';
import { useState } from 'react';
import { LeftArrow, RightArrow } from './icons';

const Navbar = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div className={display ? 'navbar-container' : 'navbar-container hide'}>
      <div className='handle-icon' onClick={() => setDisplay(!display)}>
        <span className={display ? 'flip' : null}>
          <RightArrow />
        </span>
      </div>
      <div className='navbar-item'>Home</div>
      <div className='navbar-item'>About</div>
      <div className='navbar-item'>Contact Us</div>
      <div className='navbar-item'>Our Team</div>
      <div className='navbar-item'>Apply</div>
    </div>
  );
};

export default Navbar;

//☰
// {
//   display ? <LeftArrow /> : <RightArrow />;
// }
