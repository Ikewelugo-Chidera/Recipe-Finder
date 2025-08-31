🍓 Recipe Finder App

A simple Recipe Finder Web App built with React + TailwindCSS.
It allows users to search recipes from TheMealDB API, view details, add recipes to favourites, explore categories, and manage a shopping list.

Features

Search Recipes – Search meals by name using TheMealDB API.

 Recipe Details – Click a recipe card to see full details (ingredients, instructions, image).

 Favourites – Add and remove recipes from your favourites list.

Categories – Browse recipes by categories.
Shopping List– Save ingredients into a shopping list.

Beautiful UI – Styled with Tailwind CSS for a clean and responsive design.
Okay 
Tech Stack

React – Frontend framework

Tailwind CSS – Styling

TheMealDB API – Recipe data source

Vite – Fast build tool

Project Structure

src/
│── App.jsx              Main app logic
│── main.jsx             Entry point
│
├── components/
│   ├── SearchBar.jsx     Search input + button
│   ├── RecipeCard.jsx    Recipe preview card
│   ├── RecipeDetails.jsx Detailed recipe view
│   ├── Favourites.jsx    Favourite recipes section
│   ├── Categories.jsx    Recipes by category
│   ├── ShoppingList.jsx  Ingredients shopping list
└── index.css    
 Tailwind base styles

Open in browser
Visit  http://localhost:5173

 Future Improvements
Add category-based browsing

Persistent favourites (store in localStorage)

Fully functional shopping list with add/remove ingredients

Routing (Home /Favourites /Categories /Shopping List)

Acknowledgments

TheMealDB for providing free recipe API.

React and Tailwind CSS for frontend framework