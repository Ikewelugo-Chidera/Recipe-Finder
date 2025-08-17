import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    try {
      setError("");
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
  };

  const handleSelectRecipe = (recipe) => {
    console.log("Selected recipe:", recipe);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center mt-6">Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="flex flex-wrap justify-center">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onSelect={handleSelectRecipe}
          />
        ))}
      </div>
    </div>
  );
}

export default App;