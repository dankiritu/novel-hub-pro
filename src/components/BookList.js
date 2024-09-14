import React, { useState, useEffect } from 'react';


function BookList() {
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    console.log('Fetching books...');
    fetch(`https://novel-hub-pro-db.onrender.com/books`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched books:', data);
        setBooks(data);
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  console.log('Rendering BookList, books:', books);

  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>Loading books...</p>
      ) : (
        books.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.coverImage} alt={book.title} className="book-cover" />
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-genre">Genre: {book.genre}</p>
              <p className="book-price">Price: KES {book.price.toFixed(2)}</p>
              <p className="book-rating">Rating: {book.rating} ★</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;