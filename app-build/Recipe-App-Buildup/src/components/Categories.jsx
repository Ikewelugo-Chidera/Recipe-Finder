import { useEffect, useState } from "react";

function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data.categories || []);
      } catch (err) {
        setError("Could not load categories 😔");
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if (loading) return <p className="text-center mt-4">Loading categories... ⏳</p>;
  if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">Browse by Category 🍽</h2>
      <div className="flex flex-wrap justify-center">
        {categories.map((cat) => (
          <div
            key={cat.idCategory}
            className="border rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transform transition m-2 w-40 bg-white"
            onClick={() => onSelectCategory(cat.strCategory)}
          >
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className="w-full h-24 object-cover rounded-t"
            />
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold text-gray-700">{cat.strCategory}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;