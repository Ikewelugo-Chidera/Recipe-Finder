function Favourites({ favorites, onSelect }) {
  if (favorites.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No favorites yet ❤
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {favorites.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="m-2 cursor-pointer"
          onClick={() => onSelect(recipe)}
        >
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-32 h-32 object-cover rounded shadow"
          />
          <p className="text-center mt-2 text-sm font-semibold text-pink-600">
            {recipe.strMeal}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Favourites;