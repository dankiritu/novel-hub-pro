import React, { useState } from 'react';

const URL = process.env.REACT_APP_BASEURL

function Form() {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      coverImage,
      price: parseFloat(price),
      rating: parseFloat(rating),
      genre
    };

    fetch(`https://novel-hub-pro-db.onrender.com/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Book added:', data);
        // Optionally clear form fields or redirect
      });
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Cover Image URL</label>
          <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Price (KES)</label>
          <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input type="number" step="0.1" min="0" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
            <option value="">Select Genre</option>
            <option value="Classic">Classic</option>
            <option value="Romance">Romance</option>
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Political">Political</option>
            <option value="Historical">Historical</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Drama">Drama</option>
            <option value="Adventure">Adventure</option>
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Add Book" />
        </div>
      </form>
    </div>
  );
}

export default Form;