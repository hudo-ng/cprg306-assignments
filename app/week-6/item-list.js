"use client";
import { useState } from "react";
import Item from "./item";
import initialList from "./items.json";
import GroupedByCategoryItem from "./category";

export default function ItemList() {
  const [items, setItems] = useState(() => handleSorting(initialList, "name"));
  const [sortBy, setSortBy] = useState("name");
  const [showGroupedItems, setShowGroupedItem] = useState(false);

  function handleClick(event) {
    const newSort = event.target.value;
    setSortBy(newSort);
    const newOrderedItemsList = handleSorting(items, newSort);
    setItems(newOrderedItemsList);
    setShowGroupedItem(false);
  }

  function handleShow(event) {
    const newSort = event.target.value;
    setSortBy(newSort);
    setShowGroupedItem(true);
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
        <button
          value="grouped"
          onClick={(e) => handleShow(e)}
          className={
            sortBy === "grouped"
              ? "bg-blue-500 font-medium  text-white p-2 m-2 rounded"
              : "bg-blue-200 font-medium p-2 m-2 rounded  hover:bg-blue-300"
          }
        >
          Grouped Catergory
        </button>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap m-2 p-2 gap-3">
        {showGroupedItems ? (
          <GroupedByCategoryItem />
        ) : (
          items.map((item) => (
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
