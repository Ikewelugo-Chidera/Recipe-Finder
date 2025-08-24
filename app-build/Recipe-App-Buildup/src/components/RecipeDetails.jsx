function RecipeDetails({ recipe, onBack }) {
  if (!recipe) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(measure ? `${ingredient} - ${measure}` : ingredient);
    }
  }

  let youtubeEmbed = null;
  if (recipe.strYoutube) {
    const videoId = recipe.strYoutube.split("v=")[1]?.split("&")[0];
    if (videoId) {
      youtubeEmbed = `https://www.youtube.com/embed/${videoId}`;
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
        <strong>Category:</strong> {recipe.strCategory} | <strong>Cuisine:</strong> {recipe.strArea}
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Ingredients:</h3>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Instructions:</h3>
      <p className="mb-4 whitespace-pre-line">{recipe.strInstructions}</p>

      {youtubeEmbed && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Video Tutorial:</h3>
          <iframe
            width="100%"
            height="315"
            src={youtubeEmbed}
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