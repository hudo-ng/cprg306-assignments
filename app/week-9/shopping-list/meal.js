"use client";

import { useEffect, useState } from "react";

export default function Meal({ id, name }) {
  const [details, setDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  async function getMealDetails() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data.meals[0];
  }

  function getIngredients(item) {
    const length = Object.keys(item).length;
    const result = [];
    for (let i = 1; i < length; i++) {
      let ingredient = item[`strIngredient${i}`]?.trim();
      let measure = item[`strMeasure${i}`]?.trim();

      if (ingredient && ingredient !== "" && measure && measure !== "") {
        result.push({ ingredient, measure });
      }
    }
    return result;
  }

  async function handleClick() {
    setShowDetails((prev) => !prev);

    if (!details) {
      const data = await getMealDetails();
      if (data) {
        const ingredients = getIngredients(data);
        setDetails(ingredients);
      }
    }
  }

  return (
    <div
      className=" min-w-80 p-3 m-3 bg-gray-500 rounded-md text-lg text-blue-200  hover:bg-gray-700 cursor-pointer"
      onClick={handleClick}
    >
      <p className="text-black font-bold">{name}</p>
      {showDetails && (
        <div className="mt-1">
          {details?.map((d, index) => (
            <p key={index}>
              {d.ingredient} - {d.measure}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
