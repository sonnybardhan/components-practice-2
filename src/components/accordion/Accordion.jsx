import './accordion.css';
import React from 'react';
import { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div className='accordion'>
      <h3 className='accordion-title'>
        {title}
        <span onClick={() => setDisplay(!display)}>{display ? '-' : '+'}</span>
      </h3>
      {display ? <div className='accordion-content'>{content}</div> : null}
    </div>
  );
};

export default Accordion;
