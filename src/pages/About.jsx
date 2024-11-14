import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  

export default function About() {
  const [movies, setMovies] = useState([]); // Changed setMovie to setMovies
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors  

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data); // Changed setMovie to setMovies
        setLoading(false); // Data has been loaded
      })
      .catch((error) => {
        setError(error.message); // Handle errors
        setLoading(false); // Even if error occurs, stop loading
      });
  }, []);  

  // Loading state
  if (loading) {
    return <div>Loading...</div>;  
  }  

  // Error state
  if (error) {
    return <div>Error: {error}</div>;  
  }  

  return (
    <div className="container-fluid">
      <ul className="cards">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="card"> {/* Corrected to use backticks */}
            <img
              src={movie.image_url || 'default-image.jpg'} // Add default image if missing
              alt={movie.title}
              className="movie-image" // Adjusted class name
            />
            <h4>{movie.title}</h4>
            <p><strong>Category:</strong> {movie.category}</p>
            <p><strong>Release Year:</strong> {movie.release_year}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <h5><strong>Director:</strong> {movie.director}</h5>
            <p><strong>Duration:</strong> {movie.duration} minutes</p>
            <h5><strong>Language:</strong> {movie.language}</h5>
          </Link>
        ))}
      </ul>
    </div>
  ); 
}