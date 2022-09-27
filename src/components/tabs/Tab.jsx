import React from 'react';

const Tab = ({ content, idx, handleTabClick, selectedTab }) => {
  return (
    <span
      className={idx === selectedTab ? 'tab active' : 'tab'}
      onClick={() => handleTabClick(idx)}
    >
      {content.title}
    </span>
  );
};

export default Tab;
