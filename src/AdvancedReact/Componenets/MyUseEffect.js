import { useState, useEffect } from "react";

const MyUseEffect = () =>
{
    const [ toggle, setToggle] = useState(false);

    function onClickHandler()
    {
        setToggle(!toggle);
    }

    useEffect( () => 
    {
        document.title = toggle ? "Welcome to Little Lemon" : "Using Side Effects";
    },[toggle]);

    return (
        <div style={{padding: '40px'}}>
            <h1> This is show how to use useEffect or handle Side Effects</h1>
            <button onClick={onClickHandler}> Toggle Message</button>
            { toggle && <h2>Welcome to Little Lemon</h2>}
        </div>
    );
}

export { MyUseEffect };