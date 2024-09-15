
// import React, { useState, useEffect } from 'react';

// function Favorites() {
//   const [favorites, setFavorites] = useState(() => {
//     const savedFavorites = localStorage.getItem('favorites');
//     return savedFavorites ? JSON.parse(savedFavorites) : [];
//   });

//   useEffect(() => {
    
//     fetch(`https://novel-hub-pro-db.onrender.com/favorites`)
//       .then(response => response.json())
//       .then(data => setFavorites(data));
//   }, []);


//   const removeFromFavorites = (bookId) => {
//     setFavorites(prevFavorites => prevFavorites.filter(book => book.id !== bookId));
//   };

//   return (
//     <div className="favorites">
//       <h2>Favorites</h2>
//       {favorites.length === 0 ? (
//         <p>You haven't added any favorites yet.</p>
//       ) : (
//         favorites.map(book => (
//           <div key={book.id} className="favorite-item">
//             <img src={book.coverImage} alt={book.title} className="book-cover" />
//             <div>
//               <h3>{book.title}</h3>
//               <p>Price: KES {book.price.toFixed(2)}</p>
//               <p>Rating: {book.rating} ★</p>
//               <button className="button remove" onClick={() => removeFromFavorites(book.id)}>Remove from Favorites</button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Favorites;

import React, { useState, useEffect } from 'react';

function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const removeFromFavorites = (bookId) => {
    setFavorites(prevFavorites => prevFavorites.filter(book => book.id !== bookId));
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        favorites.map(book => (
          <div key={book.id} className="favorite-item">
            <img src={book.coverImage} alt={book.title} className="book-cover" />
            <div>
              <h3>{book.title}</h3>
              <p>Price: KES {book.price.toFixed(2)}</p>
              <p>Rating: {book.rating} ★</p>
              <button className="button remove" onClick={() => removeFromFavorites(book.id)}>Remove from Favorites</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;