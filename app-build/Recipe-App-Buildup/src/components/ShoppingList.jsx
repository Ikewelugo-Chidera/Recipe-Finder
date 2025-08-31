function ShoppingList({ list, removeItem, clearList }) {
  if (!list.length) return <p className="text-center mt-4">Your shopping list is empty.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Shopping List</h2>
      <ul className="list-disc list-inside mb-4">
        {list.map((item, index) => (
          <li key={index} className="flex justify-between mb-1">
            {item.name} - {item.quantity}
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 ml-2 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <button
          onClick={clearList}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Clear List
        </button>
      </div>
    </div>
  );
}

export default ShoppingList;