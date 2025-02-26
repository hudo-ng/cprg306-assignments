"use client";
import { useState } from "react";
import ItemList from "./item-list";
import ItemForm from "./itemForm";
import itemsData from "./items.json";
import Meals from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [ingredient, setIngredient] = useState("");
  const [showMeals, setShowMeals] = useState(false);
  function handleAddItem(item) {
    const newItemList = [...items, item];
    setItems(newItemList);
  }

  function handleItemClick(item) {
    const selectedIngredient = item
      .split(",")[0]
      .replace(
        /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]+/gu,
        ""
      )
      .trim();
    setIngredient(selectedIngredient);
    setShowMeals(true);
  }
  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <h1 className="font-bold text-4xl text-blue-800 p-5">Shopping List</h1>
      <div className="flex gap-6">
        <div>
          <ItemForm onAddItem={handleAddItem} />
          <ItemList items={items} handleIngredientCick={handleItemClick} />
        </div>
        <Meals ingredient={ingredient} showSuggestedMeals={showMeals} />
      </div>
    </div>
  );
}
