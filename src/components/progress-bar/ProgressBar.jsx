import './progress-bar.css';

import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const ProgressBar = () => {
  const progressBarRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const innerHeight = window.innerHeight;
      const maxScrollHeight =
        document.documentElement.scrollHeight - innerHeight;
      // let progressPercent = Math.round((scrollTop / maxScrollHeight) * 100);
      let progressPercent = (scrollTop / maxScrollHeight) * 100;
      setProgress(progressPercent);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleProgressBarClick = (e) => {
      if (
        e.target === progressBarRef.current ||
        progressBarRef.current.contains(e.target)
      ) {
        const barClick =
          e.x - progressBarRef.current.getBoundingClientRect().left;
        const barWidth = progressBarRef.current.getBoundingClientRect().width;
        const percent = (barClick / barWidth) * 100;
        const innerHeight = window.innerHeight;
        const maxScrollHeight =
          document.documentElement.scrollHeight - innerHeight;
        const goTo = percent * maxScrollHeight * 0.01;
        window.scrollTo(0, goTo);
      }
    };

    document.addEventListener('click', handleProgressBarClick);
    return () => {
      document.removeEventListener('click', handleProgressBarClick);
    };
  }, [progress]);

  const CurrentProgressStyles = {
    backgroundColor: ' rgb(210, 255, 75)',
    height: '100%',
    width: `${progress}%`,
    borderRadius: '0.5rem',
  };

  return (
    <>
      <div className='progress-bar-container' ref={progressBarRef}>
        <div style={CurrentProgressStyles}></div>
      </div>
    </>
  );
};

export default ProgressBar;
