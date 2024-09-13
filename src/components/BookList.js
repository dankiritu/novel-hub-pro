import React, { useState, useEffect } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const addToFavorites = (book) => {
    setFavorites([...favorites, book]);
  };

  const removeFromCart = (bookId) => {
    setCart(cart.filter(book => book.id !== bookId));
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
              <button className="button" onClick={() => addToCart(book)}>Add to Cart</button>
              <button className="button" onClick={() => addToFavorites(book)}>Add to Favorites</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;