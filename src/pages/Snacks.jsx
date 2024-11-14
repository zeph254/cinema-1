import React, { useState, useEffect } from "react";

export default function Snacks() {
  const [snacks, setSnacks] = useState([]);
  const [loading, setLoading] = useState(true);  // To track loading state
  const [error, setError] = useState(null);  // To track errors

  useEffect(() => {
    // Fetch snack data from mock API (JSON Server)
    fetch('http://localhost:3000/snacks')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch snacks');
        }
        return response.json();
      })
      .then((data) => {
        setSnacks(data);   // Update state with fetched snacks data
        setLoading(false);  // Data has been loaded
      })
      .catch((error) => {
        setError(error.message);  // Handle any error that occurred during fetch
        setLoading(false);  // Stop loading even if an error occurs
      });
  }, []); // Empty dependency array ensures this runs once when component mounts

  // Loading state
  if (loading) {
    return <div>Loading snacks...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render snacks once data is loaded
  return (
    <div className="snacks-container">
      <h2>Available Snacks</h2>
      <ul className="cards">
        {snacks.map((snack) => (
          <li key={snack.id} className="card">
            <img
              src={snack.image || '/default-image.jpg'}  // Fallback image if none is provided
              alt={snack.name}
              className="snack-image"
            />
            <h4>{snack.name}</h4>
            <p><strong>Description:</strong> {snack.description}</p>
            <p><strong>Price:</strong> ${snack.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
