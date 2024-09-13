# Novel Hub Pro

**Novel Hub Pro** is a React-based single-page application designed to help book enthusiasts manage and enjoy their book collections. With features like a dynamic book list, cart management, and favorites, this app aims to offer a comprehensive book browsing and organizing experience.

---
## Features

-   **Browse Books**: View a list of books with detailed information such as title, genre, cover image, price (in KES), and rating.
-   **Add to Cart**: Easily add books to your cart for potential future purchases.
-   **Favorites**: Mark books as favorites to easily revisit them later.
-   **Ratings**: Check out ratings for books and sort them based on user ratings.
-   **Prices**: All book prices are displayed in Kenyan Shillings (KES).
-   **Remove from Cart**: Manage your cart by removing books as needed.
-   **Discounts**: Highlight books with discount offers.
-   **Top Picks**: Explore a selection of top recommended books.

## Features

1.  **Client-Side Routing**:
    
    -   **Home**: Displays the book list.
    -   **Cart**: Shows books added to the cart.
    -   **Favorites**: Lists favorite books.
    -   **Add Book**: Form to add new books to the database.
2.  **Components**:
    
    -   **Navbar**: Navigation bar to switch between different sections of the app.
    -   **BookList**: Displays available books with options to add to cart or favorites.
    -   **Cart**: Lists items currently in the cart and allows removal.
    -   **Favorites**: Displays favorite books.
    -   **Form**: Allows users to add new books to the collection.
3.  **Backend**:
    
    -   **JSON Server**: Provides a mock backend API with endpoints for CRUD operations on book data.
4.  **Styling**:
    
    -   Custom CSS for a modern, responsive design.

## Setup

### Frontend Setup

1.  **Create React App**: Initialize the project using Create React App.
    
2.  **Install Dependencies**: React Router for client-side routing.
              
3.  **Create Components**: Add the necessary React components (`Navbar`, `BookList`, `Cart`, `Favorites`, `Form`) and the CSS file into the `src` directory.
    
4.  **Run the App**: `npm start` 
    

### Backend Setup

1.  **Create `db.json`**: Use the provided JSON structure to mock the book database.
    
2.  **Install JSON Server**: `npm install -g json-server` 
    
3.  **Run JSON Server**: `json-server --watch db.json` 
    

## Deployment

1.  **Frontend**: Deploy the React app using a service like Netlify.
2.  **Backend**: Deploy the JSON server using a service like Render.

## Environment Variables

-   **Development**: Configure `.env.development` for local API URL.
-   **Production**: Configure `.env.production` for the deployed backend URL.

