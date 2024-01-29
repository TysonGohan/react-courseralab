import "./App.css";
import { Card } from "./Card";
import { Btn } from "./Btn";
import { ModeToggler } from "./ModeToggler";
import { useState, useRef } from "react";
import { Counter } from "./Counter";
import { MealsList } from "./MealsList";
import { MealsProvider } from "./MealsProvider";
import { Wallet } from "./Wallet";
import FruitsApp from "./FruitsApp";
import { HomePage } from "./HomePage";
import { AboutMe } from "./AboutMe";
import { Routes, Route, Link } from "react-router-dom";
import { ShowImage } from "./ShowImage";

function App() {
  function randomGen() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  const [inputText, setText] = useState("Hello");

  // const changeText = (e) => {
  //   setText(e.target.value);
  // };

  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <div>
      <div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/Image">Images</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/Image" element={<ShowImage />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <h1>{inputText}</h1>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={inputText}
      ></input>
      <button onClick={() => setText("hello")}>
        {" "}
        Reset msg to Hello.......
      </button>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h3" h3="First card's h3"></Card>
      <Card h2="Second card's h3" h3="Second card's h3"></Card>
      <Card h2="Third card's h3" h3="Third card's h3"></Card>
      <Btn></Btn>
      <ModeToggler></ModeToggler>
      <button onClick={randomGen}> Guess a number between 1 and 3</button>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
      <Wallet></Wallet>
      <FruitsApp />
    </div>
  );
}

export default App;
