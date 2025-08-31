import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";
import Favorites from "./components/Favorites";
import Categories from "./components/Categories";
import ShoppingList from "./components/ShoppingList"; // 👈 new

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [shoppingList, setShoppingList] = useState([]); // 👈 new state
  const [loading, setLoading] = useState(false);

  async function handleSearch(query) {
    try {
      setError("");
      setSelectedRecipe(null);
      setLoading(true);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      if (!response.ok) throw new Error("Search request failed");

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
    } finally {
      setLoading(false);
    }
  }

  async function handleSelectCategory(category) {
    try {
      setError("");
      setSelectedRecipe(null);
      setLoading(true);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (!response.ok) throw new Error("Category request failed");

      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError(`No recipes found for ${category}`);
      }
    } catch (err) {
      setError("Oops! Something went wrong while loading category recipes.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // ⭐ Favorites
  function handleToggleFavorite(recipe) {
    const exists = favorites.find((fav) => fav.idMeal === recipe.idMeal);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.idMeal !== recipe.idMeal));
    } else {
      setFavorites([...favorites, recipe]);
    }
  }

  // 🛒 Shopping list
  function handleAddToShoppingList(item) {
    if (!shoppingList.includes(item)) {
      setShoppingList([...shoppingList, item]);
    }
  }

  function handleRemoveFromShoppingList(item) {
    setShoppingList(shoppingList.filter((i) => i !== item));
  }

  // 📖 Recipe selection
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

      {/* 🔍 Search + Categories */}
      {!selectedRecipe && (
        <>
          <SearchBar onSearch={handleSearch} />
          <Categories onSelectCategory={handleSelectCategory} />
        </>
      )}

      {/* ⚠ Error */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* ⏳ Loading */}
      {loading && <p className="text-center mt-4">Loading recipes... ⏳</p>}

      {/* 🧾 Recipes or Details */}
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
        <RecipeDetails
          recipe={selectedRecipe}
          onBack={handleBack}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={favorites.some((fav) => fav.idMeal === selectedRecipe.idMeal)}
          onAddToShoppingList={handleAddToShoppingList} // 👈 pass to details
        />
      )}

      {}
      {!selectedRecipe && favorites.length > 0 && (
        <Favorites
          favorites={favorites}
          onSelect={handleSelectRecipe}
          onRemove={handleToggleFavorite}
        />
      )}

      {}
      {!selectedRecipe && shoppingList.length > 0 && (
        <ShoppingList
          items={shoppingList}
          onRemove={handleRemoveFromShoppingList}
        />
      )}
    </div>
  );
}

export default App;