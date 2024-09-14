import React, { useState, useEffect } from 'react';

const URL = process.env.REACT_APP_BASEURL

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // This can be replaced with actual fetch from a server
    fetch(`https://novel-hub-pro-db.onrender.com/favorites`)
      .then(response => response.json())
      .then(data => setFavorites(data));
  }, []);

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? <p>No favorite books yet.</p> : favorites.map(book => (
        <div key={book.id} className="favorite-item">
          <img src={book.coverImage} alt={book.title} className="book-cover" />
          <div>
            <h3>{book.title}</h3>
            <p>Price: KES {book.price.toFixed(2)}</p>
            <p>Rating: {book.rating} ★</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;