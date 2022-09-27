import './tabs.css';
import React from 'react';
import { useState } from 'react';
import Tab from './Tab';

const Tabs = ({ contents }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const tabsToRender = contents.map((content, idx) => (
    <Tab
      key={content.id}
      idx={idx}
      content={content}
      selectedTab={selectedTab}
      handleTabClick={handleTabClick}
    />
  ));

  return (
    <div>
      <h1>Tabs Demo</h1>
      <div className='tabs-container'>{tabsToRender}</div>
      <div className='content-container'>{contents[selectedTab].body}</div>
    </div>
  );
};

export default Tabs;
