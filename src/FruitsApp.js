import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import { useContext } from "react";
import React from "react";

const FruitsContext = React.createContext();

const FruitsProvider = () => {
  const [fruits] = React.useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
    { fruitName: "grape", id: 4 },
    { fruitName: "pears", id: 5 },
    { fruitName: "cherry", id: 6 },
  ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>

      <FruitsContext.Provider value={{ fruits }}>
        <Fruits />
        <FruitsCounter />
      </FruitsContext.Provider>
    </div>
  );
};

export const useFruitsContext = () => useContext(FruitsContext);

export default FruitsProvider;
