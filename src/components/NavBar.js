import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Novel Hub</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
