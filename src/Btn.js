const Btn = () => {
  return (
    <>
      <button onClick={clickHandler} onMouseOver={overHandler}>
        Click Meeeeee !
      </button>
      <button onClick={() => console.log("second button clicked")}>
        Second Click Meeeeee !
      </button>
    </>
  );
};

//ES6 function expression
const clickHandler = () => alert("clicked");

//ES6 anonymous function declaration
const overHandler = function () {
  console.log("mouse hoverd!!");
};

//ES6 anonymous functions
//onClick={() => console.log("second button clicked")}

//ES5 anonymous functions
//onClick={function() {console.log('first example')}}

export { Btn };
