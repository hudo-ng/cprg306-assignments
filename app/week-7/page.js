"use client";
import { useState } from "react";
import ItemList from "./item-list";
import ItemForm from "./itemForm";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  function handleAddItem(item) {
    const newItemList = [...items, item];
    setItems(newItemList);
  }
  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <h1 className="font-bold text-4xl text-blue-800 p-5">Shopping List</h1>
      <ItemForm onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
