import { useEffect, useState } from "react";
import axios from "axios";
import ShoppingItem from "./ShoppingItems";

const API_URL = import.meta.env.VITE_API_URL;

interface Item {
  _id: string;
  name: string;
  bought: boolean;
}

function ShoppingList() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");

  const fetchItems = async () => {
    const res = await axios.get(API_URL);
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async () => {
    if (!name.trim()) return;
    const res = await axios.post(API_URL, { name });
    setItems([res.data, ...items]);
    setName("");
  };

  const toggleItem = async (id: string, bought: boolean) => {
    const res = await axios.put(`${API_URL}/${id}`, { bought });
    setItems((prev) => prev.map((item) => (item._id === id ? res.data : item)));
  };

  const deleteItem = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    setItems((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">🛒 Shopping List</h1>
      <div className="flex mb-4">
        <input
          className="flex-1 border p-2 rounded-l"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add product..."
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r"
          onClick={addItem}
        >
          Add
        </button>
      </div>
      <div>
        {items.map((item) => (
          <ShoppingItem
            key={item._id}
            item={item}
            onToggle={toggleItem}
            onDelete={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
