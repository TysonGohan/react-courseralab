import React from "react";
import { useMealsContxt } from "./MealsProvider";

const Counter = () => {
  const { mealsState } = useMealsContxt();

  return <div> Total meals counter {mealsState.length}</div>;
};

export { Counter };
