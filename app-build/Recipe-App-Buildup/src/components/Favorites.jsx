import RecipeCard from "./RecipeCard";

function Favorites({ favorites, onSelect, onRemove }) {
  if (favorites.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No favorites yet 💖</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
        My Favorite Recipes 💖
      </h2>
      <div className="flex flex-wrap justify-center">
        {favorites.map((recipe) => (
          <div key={recipe.idMeal} className="relative">
            <RecipeCard recipe={recipe} onSelect={onSelect} />
            <button
              onClick={() => onRemove(recipe.idMeal)}
              className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;