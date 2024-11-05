import { useState, useEffect } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
const apiKey = "98e3fb1f";

const [movie, setMovie] = useState(null);

async function getMovie(searchTerm){
  let res;

  try{

  if(searchTerm == ''){
    let min = 1000000;
    let max = 5000000;

    let randNum = Math.round(Math.random() * (max - min)) + min;

    let url = `http://www.omdbapi.com/?apikey=${apiKey}&i=tt${randNum}`;
    
    res = await fetch (url);

  } else {

  res = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
  )
}

  const data = await res.json();
  setMovie(data);

  } catch(err){
    console.error(err)
  }

};

useEffect(() => {
  getMovie('');
}, []);

// //Alternative:
// useEffect(() => {
//   const movies = `http://www.omdbapi.com/?apikey=${apikey}&`
//   const random = Math.floor(Math.random() * movies.length);
//   getMovie(random);
// }, []);

  return (
    <>
    <Form moviesearch={getMovie} />
    <MovieDisplay movie={movie} />
    </>
  )
}

export default App
