"use clients";

import { useEffect, useState } from "react";
import Meal from "./meal";

export default function Meals({ ingredient, showSuggestedMeals }) {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchMeals();
  }, [ingredient]);

  async function fetchMeals() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const result = await res.json();
    setMeals(result.meals);
  }
  return (
    <div>
      <h2 className="text-white font-bold text-2xl m-2">Meal Ideas</h2>
      <div>
        {!showSuggestedMeals ? (
          <p className="text-white font-medium text-lg m-2">
            Select an item to see meal ideas
          </p>
        ) : !meals ? (
          <p className="text-red-400">No meals found for {ingredient}</p>
        ) : (
          <div>
            <p className="text-white font-medium text-lg m-2">
              Some meal ideas for {ingredient}
            </p>
            <ul>
              {meals.map((meal) => (
                <Meal id={meal.idMeal} name={meal.strMeal} key={meal.idMeal} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
