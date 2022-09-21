import './autocomplete.css';
// const URL = 'https://restcountries.com/v2/all';
const URL = 'https://restcountries.com/v3.1/name/';
import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useRef } from 'react';

// const debouncedSearch = debounce(search);

const Autocomplete = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [resultDetail, setResultDetail] = useState({});
  const [display, setDisplay] = useState(false);
  const [rowSelected, setRowSelected] = useState(0);
  const inputRef = useRef();

  const debouncedSearch = useCallback(debounce(search), []);

  function debounce(fn, delay = 700) {
    let timerId;

    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        console.log('called with args: ', args);
        fn.apply(this, args);
      }, delay);
    };
  }

  function transformResults(data) {
    const tempResults = [];
    data.forEach((result) => {
      tempResults.push(result);
    });
    setResults(tempResults);
  }

  function search(term) {
    fetch(URL + term)
      .then((res) => res.json())
      .then(transformResults)
      .catch((err) => console.log(err));
    // .then(setResults)
  }

  useEffect(() => {
    const handleBlur = (e) => {
      setDisplay(false);
    };
    inputRef.current.addEventListener('blur', () => handleBlur);

    return () => inputRef.current.removeEventListener('blur', handleBlur);
  }, []);

  useEffect(() => {
    if (query.length >= 3) {
      if (query?.toLowerCase() === resultDetail?.name?.common?.toLowerCase())
        return;

      debouncedSearch(query);
      setRowSelected(0);
    } else if (!query.length) {
      // setQuery('');
      setDisplay(false);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      console.log(e.key);
      if (e.key === 'Escape') {
        setDisplay(false);
      } else if (e.key === 'ArrowUp') {
        setRowSelected((previousRow) => {
          if (previousRow - 1 < 0) {
            return results.length - 1;
          } else {
            return previousRow - 1;
          }
        });
      } else if (e.key === 'ArrowDown') {
        setRowSelected((previousRow) => {
          if (previousRow + 1 > results.length - 1) {
            return 0;
          } else {
            return previousRow + 1;
          }
        });
      } else if (e.key === 'Enter') {
        console.log('rowSelected: ', rowSelected);
        setResultDetail(results[rowSelected]);
        setDisplay(false);
        setQuery(results[rowSelected].name.common);
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [results, rowSelected]);

  useEffect(() => {
    if (results.length) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [results]);

  function handleResultClick(e, result) {
    setQuery(result.name.common);
    // setQuery('');
    setResults([]);
    setResultDetail(result);
    // inputRef.current.blur();
    // setDisplay(false);
  }

  const resultElements = results.map((result, idx) => (
    <div
      className={
        idx === rowSelected ? 'search-result-row-selected' : 'search-result-row'
      }
      key={result.ccn3}
      onClick={(e) => handleResultClick(e, result)}
    >
      {result.name.common}
    </div>
  ));

  const resultDetailElements = resultDetail.name ? (
    <div className=''>
      <h4>{resultDetail.name.common}</h4>
      <div className=''>{resultDetail.region}</div>
      <div className=''>{resultDetail.status}</div>
    </div>
  ) : null;

  return (
    <div className='autocomplete-container'>
      <input
        className='autocomplete-input'
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='start typing ... '
        ref={inputRef}
      />
      {display ? <div className='search-results'>{resultElements}</div> : null}
      {Object.keys(resultDetail).length ? (
        <div className='autocomplete-result-details'>
          {resultDetailElements}
        </div>
      ) : null}
    </div>
  );
};

export default Autocomplete;
