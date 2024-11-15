import React, { useState } from "react";
import { toast } from "react-toastify";


export default function Add() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [release_year, setRelease_year] = useState('');
  const [rating, setRating] = useState('');
  const [image_url, setImage_url] = useState('');
  const [director, setDirector] = useState('');
  const [duration, setDuration] = useState('');
  const [language, setLanguage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    fetch('https://cinema-1-b4fr.onrender.com/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure you're sending JSON data
      },
      body: JSON.stringify({
        title,
        category,
        release_year,
        rating,
        director,
        duration,
        language,
        image_url,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
        toast.success("Movie added succesfully!")
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="form-control" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input 
            type="text" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="form-control" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input 
            type="url" 
            value={image_url} 
            onChange={(e) => setImage_url(e.target.value)} 
            className="form-control" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Year of Release</label>
          <input 
            type="number" 
            value={release_year} 
            onChange={(e) => setRelease_year(e.target.value)} 
            className="form-control" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input 
            type="number" 
            value={rating} 
            onChange={(e) => setRating(e.target.value)} 
            className="form-control" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Director</label>
          <input 
            type="text" 
            value={director} 
            onChange={(e) => setDirector(e.target.value)} 
            className="form-control" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration (minutes)</label>
          <input 
            type="number" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            className="form-control" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Language</label>
          <input 
            type="text" 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)} 
            className="form-control" 
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Displaying the image preview */}
      {image_url && (
        <div className="mt-4">
          <h5>Preview Image:</h5>
          <img src={image_url} alt="Movie" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}
