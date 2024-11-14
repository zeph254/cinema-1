import React, { useEffect, useState } from "react";  

function Search() {  
  const [movies, setMovies] = useState([]);  
  const [searchTerm, setSearchTerm] = useState('');  

  useEffect(() => {  
    fetch('http://localhost:3001/movies')  
      .then((response) => response.json())  
      .then((data) => {  
        setMovies(data);  
      });  
  }, []);  

  const handleSearch = (term) => {  
    setSearchTerm(term);  
  };  

  const filteredMovies = movies.filter((movie) =>  
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())  
  );  

  return (  
    <div className="searchbar">  
      <label htmlFor="search">Search Movies:</label>  
      <input  
        type="text"  
        id="search"  
        placeholder="Type a name to search..."  
        value={searchTerm}  
        onChange={(e) => handleSearch(e.target.value)}  
      />  
      <ul>  
        {filteredMovies.map((movie) => (  
          <li key={movie.id}>{movie.title}</li> // Assuming each movie has a unique id  
        ))}  
      </ul>  
    </div>  
  );  
}  

export default Search;