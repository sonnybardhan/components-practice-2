import './autocomplete.css';
// const URL = 'https://restcountries.com/v2/all';
const URL = 'https://restcountries.com/v3.1/name/';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Autocomplete = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [resultDetail, setResultDetail] = useState({});
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (query.length >= 3) {
      debounce(search)(query); //wrap in debounce
    } else if (!query.length) {
      setQuery('');
      setDisplay(false);
    }

    return () => {};
  }, [query]);

  useEffect(() => {
    if (results.length) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [results]);

  function search(term) {
    console.log('called');
    fetch(URL + term)
      .then((res) => res.json())
      .then(transformResults)
      .catch((err) => console.log(err));
    // .then(setResults)
  }

  function transformResults(data) {
    const tempResults = [];
    data.forEach((result) => {
      tempResults.push(result);
    });
    setResults(tempResults);
  }

  function handleResultClick(e, result) {
    setQuery(result.name.common);
    setResults([]);
    setResultDetail(result);
  }

  const resultElements = results.map((result) => (
    <div
      className='search-result-row'
      key={result.ccn3}
      onClick={(e) => handleResultClick(e, result)}
    >
      {result.name.common}
    </div>
  ));

  const resultDetailElements = (
    <div className=''>
      <h4>{resultDetail?.name?.common}</h4>
      <div className=''>{resultDetail?.region}</div>
      <div className=''>{resultDetail?.status}</div>
    </div>
  );

  return (
    <div className='autocomplete-container'>
      <input
        className='autocomplete-input'
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='start typing ... '
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

function debounce(fn, delay = 500) {
  let timerId;
  console.log('input ... ');
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      console.log('making API call ... ');
      fn.apply(this, args);
    }, delay);
  };
}
