
import React, { useState, useEffect } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    fetch('https://novel-hub-pro-db.onrender.com/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (book) => {
    setCart(prevCart => {
      if (!prevCart.some(item => item.id === book.id)) {
        return [...prevCart, book];
      }
      return prevCart;
    });
  };

  const addToFavorites = (book) => {
    setFavorites(prevFavorites => {
      if (!prevFavorites.some(item => item.id === book.id)) {
        return [...prevFavorites, book];
      }
      return prevFavorites;
    });
  };

  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book-item">
          <img src={book.coverImage} alt={book.title} className="book-cover" />
          <div className="book-details">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-genre">Genre: {book.genre}</p>
            <p className="book-price">Price: KES {book.price.toFixed(2)}</p>
            <p className="book-rating">Rating: {book.rating} ★</p>
            <div className="book-actions">
              <button 
                className="button" 
                onClick={() => addToCart(book)}
                disabled={cart.some(item => item.id === book.id)}
              >
                {cart.some(item => item.id === book.id) ? 'In Cart' : 'Add to Cart'}
              </button>
              <button 
                className="button like-button" 
                onClick={() => addToFavorites(book)}
                disabled={favorites.some(item => item.id === book.id)}
              >
                {favorites.some(item => item.id === book.id) ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;