import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Form from './components/Form';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/add-book" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
