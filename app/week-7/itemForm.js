"use client";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const itemCategories = [
  "Produce",
  "Dairy",
  "Bakery",
  "Meat",
  "Frozen Foods",
  "Canned Goods",
  "Dry Goods",
  "Beverages",
  "Snacks",
  "Household",
  "Other",
];

export default function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleAdd() {
    quantity < 20 && setQuantity(quantity + 1);
  }
  function handleSubtract() {
    quantity > 1 && setQuantity(quantity - 1);
  }

  function handleInput(e) {
    setName(e.target.value);
  }
  function handleSelectedCategory(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      name: name,
      quantity: quantity,
      category: category,
      id: uuid(),
    };
    onAddItem(newItem);
    setName("");
    setCategory("produce");
    setQuantity(1);
  }
  return (
    <div className="flex flex-col bg-gray-500 p-2 items-center content-center max-h-fit">
      <h2 className="font-bold text-3xl text-white m-2">Add a product</h2>
      <form
        onSubmit={handleSubmit}
        className="p-3 flex flex-col items-center content-center"
      >
        <div className="mb-3 p-2 border-b-2">
          <label htmlFor="itemName" className="block pb-1 text-white text-xl">
            Item name
          </label>
          <input
            id="itemName"
            className="p-1 border rounded w-80 bg-gray-200 active:border-black"
            name="itemName"
            type="text"
            placeholder="Enter an item name"
            value={name}
            onChange={handleInput}
            required
          ></input>
        </div>
        <div className="bg-black w-80 flex flex-row justify-between items-center m-2 p-1 rounded-md">
          <p className="p-2 text-2xl text-white">Quantity: {quantity}</p>
          <div>
            <button
              type="button"
              onClick={handleAdd}
              disabled={quantity === 20}
              className="bg-blue-400 p-2 m-2 rounded-sm hover:bg-blue-700 text-white disabled:bg-gray-500"
            >
              Add
            </button>
            <button
              type="button"
              onClick={handleSubtract}
              disabled={quantity === 1}
              className="bg-blue-400 p-2 m-2 rounded-sm hover:bg-blue-700 text-white disabled:bg-gray-500"
            >
              Subtract
            </button>
          </div>
        </div>
        <div className="mb-3 p-2 border-t-2">
          <label
            htmlFor="categoryName"
            className="block pb-1 text-white text-xl"
          >
            Category
          </label>
          <select
            id="categoryName"
            name="categoryName"
            value={category}
            onChange={handleSelectedCategory}
            className="p-1 border rounded w-80 bg-gray-200"
          >
            <option value="" disabled>
              Select an option
            </option>
            {itemCategories.map((option, index) => (
              <option value={option.toLocaleLowerCase()} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="p-2 mt-1 ml-2 bg-black text-white rounded-md min-w-32"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
