import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './App.css';

import * as api from './api';
import { FilterProvider } from './FilterContext';
import FilterBar from './components/FilterBar';
import SearchResult from './components/SearchResult';
import AppBar from '@material-ui/core/AppBar';

function App() {

  const [subjects, setSubjects] = useState([{id: 0, slug: 'none', name: 'Loading'}]);
  const [result, setResult] = useState({});
  const [error, setError] = useState(null);
  const [rating, setRating] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [postcode, setPostcode] = useState('');
  const [subject, setSubject] = useState('');
  const [online, setOnline] = useState('all');

  function searchTutors() {
    api
    .searchTutors({ postcode, rating, subject, minPrice, maxPrice, online })
    .then(data => {
      setResult(data);
      setError(null);
    })
    .catch(err => {
      setError(err);
      setResult({});
    });
  }

  // Get a list of tutors on mount and subjects
  useEffect(searchTutors, []);
  useEffect(() => {
    api.getSubjectLevels()
    .then(data => setSubjects(data))
    .catch(() => [{id: 0, slug: 'none', name: 'Loading'}])
  }, []);

  const ctxValue = {
    rating,
    setRating,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    postcode,
    setPostcode,
    subject,
    setSubject,
    online,
    setOnline,
    searchTutors,
    subjects
  };

  return (
    <>
    <AppBar position="static" className="app-bar">
      <h3 className="app-header">Search for a Tutor</h3>
    </AppBar>
    <Container maxWidth="lg" className="main">
      <FilterProvider value={ctxValue}>
        <FilterBar />
      </FilterProvider>
      {error && <Typography color="error">Search Error! {error.message}</Typography>}
      <SearchResult data={result} />
    </Container>
    </>
  );
}

export default App;
