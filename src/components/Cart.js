import React, { useState, useEffect } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // This can be replaced with actual fetch from a server
    fetch('http://localhost:3000/cart')
      .then(response => response.json())
      .then(data => setCart(data));
  }, []);

  const removeFromCart = (bookId) => {
    setCart(cart.filter(book => book.id !== bookId));
    // Optionally send a request to the backend to update the cart
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? <p>No items in the cart.</p> : cart.map(book => (
        <div key={book.id} className="cart-item">
          <img src={book.coverImage} alt={book.title} className="book-cover" />
          <div>
            <h3>{book.title}</h3>
            <p>Price: KES {book.price.toFixed(2)}</p>
            <button className="button remove" onClick={() => removeFromCart(book.id)}>Remove from Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;