import React from 'react';
import { useState } from 'react';

const NestedFolders = ({ data }) => {
  const [display, setDisplay] = useState(false);

  const { type, name } = data;
  // for (let i = 0; i < levels; i++) {
  //   levelString += '';
  // }

  if (type === 'file') {
    return (
      <div style={{ marginLeft: '1em' }}>
        📝
        {name}
      </div>
    );
  }

  return (
    <div style={{ marginLeft: '1em' }} className='parent-nest'>
      <div onClick={() => setDisplay(!display)} className='parent-nest-name'>
        <span className='folder-icon'>{display ? '📂' : '📁'}</span>
        {name}
      </div>
      {display ? (
        <div>
          {data.contents.map((content) => (
            <NestedFolders data={content} key={Math.random()} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NestedFolders;
