import { useReducer } from "react";

const Wallet = () => {
  const reducer = (state, action) => {
    if (action.type === "ride") return { money: state.money + 50 };
    if (action.type === "fuel") return { money: state.money - 30 };
    return new Error();
  };

  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2> Wallet : {state.money}</h2>
      <button onClick={() => dispatch({ type: "ride" })}>
        {" "}
        New Customer !
      </button>
      <button onClick={() => dispatch({ type: "fuel" })}> Fill Tank </button>
    </div>
  );
};

export { Wallet };
