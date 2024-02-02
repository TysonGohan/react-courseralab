import { useState } from "react";

const UseState = () =>
{
    const [inputText, setText] = useState("Hello");

    return <>
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
    </>
}

export { UseState }