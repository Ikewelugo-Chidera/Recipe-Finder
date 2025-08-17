function RecipeCard({ recipe, onSelect }) {
  return (
    <div
      className="border rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition m-4 w-64"
      onClick={() => onSelect(recipe)}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{recipe.strMeal}</h2>
        <p className="text-gray-600">Category: {recipe.strCategory}</p>
        <p className="text-gray-600">Cuisine: {recipe.strArea}</p>
      </div>
    </div>
  );
}

export default RecipeCard;