function RecipeDetails({ recipe, onBack, onToggleFavorite, isFavorite, onAddToShoppingList }) {
  if (!recipe) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
      >
        ← Back to search
      </button>

      <h2 className="text-2xl font-bold mb-2">{recipe.strMeal}</h2>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p className="mb-2">
        <strong>Category:</strong> {recipe.strCategory} | <strong>Cuisine:</strong>{" "}
        {recipe.strArea}
      </p>

      {}
      <button
        onClick={() => onToggleFavorite(recipe)}
        className={`px-4 py-2 rounded mb-4 transition ${
          isFavorite ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </button>

      <h3 className="text-xl font-semibold mt-4 mb-2">Ingredients:</h3>
      <ul className="list-disc list-inside mb-4 space-y-2">
        {ingredients.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{item}</span>
            <button
              onClick={() => onAddToShoppingList(item)}
              className="ml-2 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition text-sm"
            >
              + Add
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Instructions:</h3>
      <p className="mb-4 whitespace-pre-line">{recipe.strInstructions}</p>

      {recipe.strYoutube && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Video Tutorial:</h3>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {recipe.strSource && (
        <p>
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Full Recipe Source
          </a>
        </p>
      )}
    </div>
  );
}

export default RecipeDetails;