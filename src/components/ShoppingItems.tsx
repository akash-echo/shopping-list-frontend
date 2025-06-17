import React from "react";

interface Props {
  item: { _id: string; name: string; bought: boolean };
  onToggle: (id: string, bought: boolean) => void;
  onDelete: (id: string) => void;
}

const ShoppingItem: React.FC<Props> = ({ item, onToggle, onDelete }) => (
  <div className="flex items-center justify-between p-2 border rounded mb-2 bg-white">
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => onToggle(item._id, !item.bought)}
      />
      <span
        className={item.bought ? "text-gray-500 line-through" : "text-gray-900"}
      >
        {item.name}
      </span>
    </label>
    <button
      className="text-red-500 hover:text-red-700 text-sm"
      onClick={() => onDelete(item._id)}
    >
      Delete
    </button>
  </div>
);

export default ShoppingItem;
