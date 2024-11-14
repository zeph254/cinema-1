import React from "react"; 
import { useEffect,useState } from "react";
import Search from "./Search";

export default function About() {  
  const [movies, setMovie]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/movies')
    .then(response => response.json())
    .then((data) => setMovie(data))
  } ,[]);



  return (  
  <>
    <Search/>
  
  
<ul className="cards">
    {movies.map((movie) => (
    <div className="card"   key={movie.id}>
    <div className="card__border"></div>
    <div className="card_title__container">
      <span className="card_title">{movie.title}</span>
      <p className="card_paragraph">
        {movie.category}
      </p>
       <img src={movie.image_url} alt={movie.title} />  
    </div>
    <hr className="line" />
    <ul className="card__list">
      <li className="card__list_item">
        <span className="check">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="check_svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span className="list_text">{movie.release_year}</span>
      </li>
      <li className="card__list_item">
        <span className="check">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="check_svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span className="list_text">{movie.rating}</span>
      </li>
      <li className="card__list_item">
        <span className="check">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="check_svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span className="list_text">{movie.director}</span>
      </li>
       <li className="card__list_item">
        <span className="check">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="check_svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span className="list_text">{movie.category}</span>
      </li>
      <li className="card__list_item">
        <span className="check">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="check_svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span className="list_text">{movie.duration} minutes</span>
      </li>
      <li className="card__list_item">
        <span className="check">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="check_svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span className="list_text">{movie.language}</span>
      </li>
    </ul>
    <button className="button">
      {movie.movie_url} </button>
  </div>
  
    ))}  
</ul>
</>
  );  
} 