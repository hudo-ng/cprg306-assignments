"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  function handleClick(event) {
    const newSort = event.target.value;
    setSortBy(newSort);
  }

  function handleSorting(itemsList, toSortBy) {
    itemsList.sort((item1, item2) => {
      if (item2[toSortBy].toLowerCase() > item1[toSortBy].toLowerCase()) {
        return -1;
      }
      if (item2[toSortBy].toLowerCase() < item1[toSortBy].toLowerCase()) {
        return 1;
      }
      return 0;
    });
    return itemsList;
  }

  handleSorting(items, sortBy);

  return (
    <div>
      <div className="p-2 m-2">
        <p className="text-white font-medium text-lg m-2">Sort by:</p>
        <button
          value="name"
          onClick={(e) => handleClick(e)}
          className={
            sortBy === "name"
              ? "bg-blue-500 font-medium text-white p-2 m-2 rounded"
              : "bg-blue-200 font-medium p-2 m-2 rounded hover:bg-blue-300"
          }
        >
          Name
        </button>
        <button
          value="category"
          onClick={(e) => handleClick(e)}
          className={
            sortBy === "category"
              ? "bg-blue-500 font-medium  text-white p-2 m-2 rounded"
              : "bg-blue-200 font-medium p-2 m-2 rounded  hover:bg-blue-300"
          }
        >
          Catergory
        </button>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap m-2 p-2 gap-3">
        {items.map((item) => (
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
