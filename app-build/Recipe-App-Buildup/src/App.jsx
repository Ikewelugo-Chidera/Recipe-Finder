import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch(query) {
    try {
      setError("");
      setSelectedRecipe(null);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError("No recipes found.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  }

  function handleSelectRecipe(recipe) {
    setSelectedRecipe(recipe);
  }

  function handleBack() {
    setSelectedRecipe(null);
  }

  return (
    <div className="App max-w-6xl mx-auto px-4 min-h-screen bg-pink-50">
      <h1 className="text-4xl font-extrabold text-center mt-6 text-pink-600 drop-shadow-sm">
        🍓 Recipe Finder
      </h1>

      {}
      {!selectedRecipe && <SearchBar onSearch={handleSearch} />}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!selectedRecipe ? (
        <div className="flex flex-wrap justify-center">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onSelect={handleSelectRecipe}
            />
          ))}
        </div>
      ) : (
        <RecipeDetails recipe={selectedRecipe} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;