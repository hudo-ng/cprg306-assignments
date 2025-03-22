"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import ItemForm from "./itemForm";
import Meals from "./meal-ideas";
import { useUserAuth } from "../_utils/authContext";
import {
  getItems,
  addItem,
  getItem,
  deleteItem,
} from "../_services/shopping-list-service";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [showMeals, setShowMeals] = useState(false);

  async function logIn() {
    return await gitHubSignIn();
  }

  async function logOut() {
    return await firebaseSignOut();
  }

  async function handleAddItem(item) {
    try {
      const newItemId = await addItem(user.uid, item);
      const newItem = await getItem(user.uid, newItemId);
      const newItemList = [...items, newItem];
      setItems(newItemList);
    } catch (error) {
      console.error(error);
    }
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

  async function loadItems() {
    try {
      const itemsData = await getItems(user.uid);
      setItems(itemsData);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleItemDelete(itemId) {
    try {
      await deleteItem(user.uid, itemId);
      const deletedItem = items.filter((item) => item.id === itemId)[0];
      const newItemsList = items.filter((item) => item.id !== itemId);
      deletedItem.name === ingredient && setShowMeals(false);
      setItems(newItemsList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  if (!user) {
    return (
      <div>
        <p>Log in to see this page</p>
        <button onClick={logIn}>Log in with GitHub</button>
      </div>
    );
  }
  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <h1 className="font-bold text-4xl text-blue-800 p-5">Shopping List</h1>
      <button
        className="font-light text-1xl text-blue-200 pb-3"
        onClick={logOut}
      >
        Logout
      </button>
      <div className="flex gap-6">
        <div>
          <ItemForm onAddItem={handleAddItem} />
          <ItemList
            items={items}
            handleIngredientCick={handleItemClick}
            onItemDelete={handleItemDelete}
          />
        </div>
        <Meals ingredient={ingredient} showSuggestedMeals={showMeals} />
      </div>
    </div>
  );
}
