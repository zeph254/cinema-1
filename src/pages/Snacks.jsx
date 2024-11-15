import React, { useState } from 'react';  

function Snacks() {
  // Declare state to hold the array of snacks with stock property
  const [snacks, setSnacks] = useState([
    { image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMHwjSbOOYXY0m-By0IhD0JnixgLBTAA-0A&s", id: 1, name: 'Almonds', stock: 5 },
    { image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBu7EriZyErkcLgor6lD1VLIURAkRNWKAmow&s", id: 2, name: 'Popcorn', stock: 3 },
    { image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpa0rwlDSwYuDX8CaYKeAw2PJz2tQjm4Afw&s", id: 3, name: 'Hummus and Carrot Sticks', stock: 4 },
    { image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAutbB8oc3hDzSAklfj2bBstbpS_SESbmsw&s", id: 4, name: 'Greek Yogurt with Honey', stock: 2 },
    { image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYlFjzy9oSb1hfuqD_It7cWwMdv2l-ZnN3ig&s", id: 5, name: 'Cheese Cubes', stock: 6 },
    { image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Green_and_Black%27s_dark_chocolate_bar_2.jpg/800px-Green_and_Black%27s_dark_chocolate_bar_2.jpg", id: 6, name: 'Dark Chocolate', stock: 0 },
    { image_url: "https://jennifermaune.com/wp-content/uploads/2018/03/peanut-butter-banana-rice-cakes-2-720x405.jpg", id: 7, name: 'Rice Cakes with Peanut Butter', stock: 1 },
    { image_url: "https://therecipecritic.com/wp-content/uploads/2021/07/trailmix.jpg", id: 8, name: 'Trail Mix', stock: 5 },
    { image_url: "https://target.scene7.com/is/image/Target/GUEST_c0d470e8-edfa-4ae8-858b-3c94b4868375?wid=488&hei=488&fmt=pjpeg", id: 9, name: 'Veggie Sticks with Ranch Dip', stock: 4 },
    { image_url: "https://happihomemade.com/wp-content/uploads/2024/05/IMG_1100-500x500.jpg", id: 10, name: 'Fruit Salad', stock: 3 },
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
    <div className="card-body" >
          <div >
    <div>
      <h1>Snacks List</h1>
      <ul>
        {snacks.map(snack => (
          <li key={snack.id} className='food'>
           <div className=''>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div> 

  );
}  

export default Snacks;

