import React from "react"; 
import { useEffect,useState } from "react";


export default function About() {  
  const [movies, setMovie]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then((data) => setMovie(data))
  } ,[]);



  return (  
  
<ul className="cards">
    {movies.map((movie) => (
      <li key={movie.id}>  
        <img src={movie.image_url} alt={movie.title} />  
        <h4>{movie.title}</h4>  
        <p>{movie.category}</p>  
        <p>{movie.release_year}</p>  
        <p>{movie.rating}</p>  
        <h5>{movie.director}</h5>  
        <p>{movie.duration} minutes</p>  
        <h5>{movie.language}</h5>  
      </li>
    ))}  
</ul>

  );  
} 