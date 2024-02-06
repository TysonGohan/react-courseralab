import { useEffect, useState, useRef } from "react";
import { useMyHook } from "./MyHook";

const UseCustomHooks = () =>
{

    const [count, setCount] = useState(0); 
    useMyHook(count);
 
    function increment() { 
        setCount(prevCount => prevCount + 1) 
    } 

    return (
        <>
            <div style={{padding: '40px'}}>
                <h1> This is an exmple of how to use custom Hooks</h1><br/>
                <div> 
                    <h2>Count: {count}</h2> 
                    <button onClick={increment}>Plus 1</button> 
                </div> 
            </div>
            <App/>
        </>
    )
};

function App() {
    const [day, setDay] = useState("Monday");
    console.log(" day : " + day);
    const prevDay = usePrevious(day);
    const getNextDay = () => {
      if (day === "Monday") {
        setDay("Tuesday")
      } else if (day === "Tuesday") {
        setDay("Wednesday")
      } else if (day === "Wednesday") {
        setDay("Thursday")
      } else if (day === "Thursday") {
        setDay("Friday")
      } else if (day === "Friday") {
        setDay("Monday")
      }
    }
    return (
      <div style={{padding: "40px"}}>
        <h1>
          Today is: {day}<br />
          {
            prevDay && (
              <span>Previous work day was: {prevDay}</span>
            )
          }
        </h1>
        <button onClick={getNextDay}>
          Get next day
        </button>
      </div>
    );
  }
  function usePrevious(val) {

    const ref = useRef(null);

    console.log("before effect : " + val);

    useEffect(
        () => {ref.current = val;}
    , [val]);

    console.log(ref);

    return ref.current;
  }
  

export { UseCustomHooks };