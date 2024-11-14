import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3000/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data);
        setLoading(false); 
      } catch (error) {
        setError(error.message); 
        setLoading(false); 
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (  
    <div>
      <div className="container-fluid">
        <ul className="cards">
          {movies.map((movie) => ( 
            <Link to={`/movie/${movie.id}`} key={movie.id} className="card">  
              <img src={movie.image_url} alt={movie.title} className="col-md-3-md-4"/>  
              <h4>{movie.title}</h4>  
              <p>{movie.category}</p>  
              <p>{movie.release_year}</p>  
              <p>{movie.rating}</p>  
              <h5>{movie.director}</h5>  
              <p>{movie.duration} minutes</p>  
              <h5>{movie.language}</h5>  
            </Link>
          ))}  
        </ul>
      </div>
    </div>
  );  
}
