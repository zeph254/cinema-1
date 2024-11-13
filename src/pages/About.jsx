import React, { useEffect, useState } from "react";

export default function About() {
  const [movies, setMovie] = useState([]);
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
        setMovie(data);
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
    <ul className="cards">
      {movies.map((movie) => (
        <li key={movie.id} className="card">
          <img
            src={movie.image_url || 'default-image.jpg'} // Add default image if missing
            alt={movie.title}
            className="movie-image"
          />
          <h4>{movie.title}</h4>
          <p><strong>Category:</strong> {movie.category}</p>
          <p><strong>Release Year:</strong> {movie.release_year}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <h5><strong>Director:</strong> {movie.director}</h5>
          <p><strong>Duration:</strong> {movie.duration} minutes</p>
          <h5><strong>Language:</strong> {movie.language}</h5>
        </li>
      ))}
    </ul>
  );
}
