import React from "react";
import { useMealsContxt } from "./MealsProvider";

const MealsList = () => {
  const { mealsState } = useMealsContxt();

  return (
    <div>
      <h1> Today's Meals List</h1>
      {mealsState.map((meal, id) => (
        <h2 key={id}> {meal.name} </h2>
      ))}
    </div>
  );
};

export { MealsList };
