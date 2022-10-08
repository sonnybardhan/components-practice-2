import './typeahead.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';

const URL = `https://restcountries.com/v3.1/name/`;

const TypeAhead = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState('');
  const [display, setDisplay] = useState(false);
  const suggestionsRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        !suggestionsRef.current.contains(e.target) &&
        e.target !== suggestionsRef.current
      ) {
        setDisplay(false);
      }
    };

    document.documentElement.addEventListener('click', handleClick);

    return () => {
      document.documentElement.removeEventListener('click', handleClick);
    };
  }, []);

  const debouncedFetchCountries = useCallback(debounce(fetchCountries), []);

  useEffect(() => {
    if (!input.length) {
      setResults([]);
    }

    if (input.length < 3) {
      return;
    }

    debouncedFetchCountries(input, setResults);
  }, [input]);

  useEffect(() => {
    if (results.length) {
      setDisplay(true);
    }
  }, [results]);

  const handleSelection = (selection) => {
    setSelectedResult(selection);
    setDisplay(false);
  };

  const resultsToRender = results.length
    ? results.map((item) => {
        const name = item.name.common;
        const flag = item.demonyms.flag;
        return (
          <li key={name} onClick={() => handleSelection(name)}>
            {name}
          </li>
        );
      })
    : null;

  return (
    <div className='typeahead-container'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='search ... '
        className='input-box'
      />
      <div
        className='suggestions-container'
        ref={suggestionsRef}
        style={{
          display: `${display ? 'block' : 'none'}`,
        }}
      >
        {resultsToRender}
      </div>
      <div className='selection-container'>
        <h3>{selectedResult}</h3>
      </div>
    </div>
  );
};

export default TypeAhead;

function debounce(fn, delay = 500) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      console.log('args: ', args);
      fn.apply(this, args);
    }, delay);
  };
}
async function fetchCountries(value, setter) {
  const res = await fetch(URL + value);
  const data = await res.json();
  setter(data);
}
