import React from "react";

const MealsContext = React.createContext();

const meals = [
  { name: "Carrot", calories: "100", id: "1" },
  { name: "Beans", calories: "200", id: "2" },
  { name: "Seeval", calories: "900", id: "3" },
];

const MealsProvider = ({ children }) => {
  const [mealsState, setMealsState] = React.useState(meals);

  return (
    <MealsContext.Provider value={{ mealsState }}>
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsContxt = () => React.useContext(MealsContext);

export { MealsProvider };
