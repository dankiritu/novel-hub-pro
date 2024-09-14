
import React, { useState, useEffect } from 'react';

function Cart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(book => book.id !== bookId));
  };

  const total = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(book => (
            <div key={book.id} className="cart-item">
              <img src={book.coverImage} alt={book.title} className="book-cover" />
              <div>
                <h3>{book.title}</h3>
                <p>Price: KES {book.price.toFixed(2)}</p>
                <button className="button remove" onClick={() => removeFromCart(book.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: KES {total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;