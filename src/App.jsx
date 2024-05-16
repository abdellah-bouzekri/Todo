import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleAdd() {
    if (input.trim()) {
      setItems((prev) => [...prev, input.trim()]);
      setInput("");
    }
  }
  function handelDelete(index) {
    const supprimer = items.filter((_, id) => id !== index);
    setItems(supprimer);
  }
  function handelUpdate(index, newvalue) {
    const updatedItesms = [...items];
    updatedItesms[index] = newvalue;
    setItems(updatedItesms);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Add To List
        </h1>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Enter your item..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          onClick={handleAdd}
          className="w-full py-2 px-4 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300">
          Add Item
        </button>
        <div className="mt-6">
          <p className="text-gray-600">Items in the list:</p>
          <ul className="mt-2">
            {items.map((item, index) => (
              <li key={index} className="text-gray-800 font-medium">
                {item}
                <button
                  className="w-full py-2 px-4 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300"
                  onClick={() => handelDelete(index)}>
                  Delete
                </button>
                <button
                  onClick={() => handelUpdate(index, prompt("inter...."))}
                  className="ml-2 px-2 py-1 bg-green-500 text-white rounded">
                  Update
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
