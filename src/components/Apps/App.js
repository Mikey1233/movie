import "./App.css";
import Movie from "../Movie";
import { useState, useEffect } from "react";
import search from "../search.svg";




//
const API_URL = `http://www.omdbapi.com/?apikey=9c6d4110&`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async function (input) {
    const response = await fetch(`${API_URL}s=${[input]}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };
  
  console.log(movies);
  useEffect(() => {
    searchMovies(searchTerm);
  }, []);
  return (
    <div className="app">
      <div>
        <h1>MOVIE_BOX</h1>
      </div>
      <div className="search">
        <form  onSubmit={
            (e)=>{
              e.preventDefault()
              document.querySelector("input").value = "";
              searchMovies(searchTerm);
            } 
         }>
        <input
          placeholder="search for movie"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
         
        />
          <img
          src={search}
          className="searchBar"
          alt="search-button"
          onClick={(e) => {
            document.querySelector("input").value = "";
            searchMovies(searchTerm);
          }}
        />
        </form>
       
      
      </div>
      <div className="container">
        {movies?.length > 0 ? (
          movies.map((arr) => <Movie movie={arr} />)
        ) : (
          <div className="empty">
            <h2>no movie found</h2>
          </div>
        )}
      </div>
    </div>
  );
}
// eslint-disable-next-line

export default App;
