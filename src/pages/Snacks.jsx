
import React, { useState } from 'react';  

function Snacks() {  
  // Declare state to hold the array of snacks with stock property  
  const [snacks, setSnacks] = useState([  
    { image_url: "/home/hp/Downloads/download.jpeg", id: 1, name: 'Almonds', stock: 5 },  
    { image_url: "/home/hp/Downloads/download (1).jpeg", id: 2, name: 'Popcorn', stock: 3 },  
    { image_url: "/home/hp/Downloads/download (2).jpeg", id: 3, name: 'Hummus and Carrot Sticks', stock: 4 },  
    { image_url: "/home/hp/Downloads/download (3).jpeg", id: 4, name: 'Greek Yogurt with Honey', stock: 2 },  
    { image_url: "/home/hp/Downloads/images.jpeg", id: 5, name: 'Cheese Cubes', stock: 6 },  
    { image_url: "/home/hp/Downloads/images (1).jpeg", id: 6, name: 'Dark Chocolate', stock: 0 },  
    { image_url: "/home/hp/Downloads/images (2).jpeg", id: 7, name: 'Rice Cakes with Peanut Butter', stock: 1 },  
    { image_url: "/home/hp/Downloads/download (4).jpeg", id: 8, name: 'Trail Mix', stock: 5 },  
    { image_url: "/home/hp/Downloads/download (5).jpeg", id: 9, name: 'Veggie Sticks with Ranch Dip', stock: 4 },  
    { image_url: "/home/hp/Downloads/download (6).jpeg", id: 10, name: 'Fruit Salad', stock: 3 },  
  ]);  

  const handleBuy = (id) => {  
    setSnacks(snacks.map(snack => {  
      if (snack.id === id) {  
        // Decrease stock if available  
        if (snack.stock > 0) {  
          return { ...snack, stock: snack.stock - 1 };  
        }  
      }  
      return snack;  
    }));  
  };  

  return (  
    <div>  
      <h1>Snacks List</h1>  
      <ul>  
        {snacks.map(snack => (  
          <li key={snack.id}>  
            <img  
              src={snack.image_url}  
              alt={snack.name}  
              style={{ width: '100px', height: '100px' }}  
            />  
            <p>{snack.name}</p>  
            <p>Stock: {snack.stock > 0 ? snack.stock : 'Out of Stock'}</p>  
            <button onClick={() => handleBuy(snack.id)} disabled={snack.stock === 0}>  
              Buy  
            </button>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
}  

export default Snacks;