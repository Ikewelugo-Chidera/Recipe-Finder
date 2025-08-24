function RecipeCard({ recipe, onSelect }) {
  return (
    <div
      className="border rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transform transition m-2 w-full sm:w-80 bg-white"
      onClick={() => onSelect(recipe)}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-pink-600 mb-2">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-600 mb-2">
          🍽 {recipe.strArea} • {recipe.strCategory}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(recipe);
          }}
          className="mt-2 bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;