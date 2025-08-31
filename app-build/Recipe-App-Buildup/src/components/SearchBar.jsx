import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) return;

    onSearch(query);

  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-l-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;