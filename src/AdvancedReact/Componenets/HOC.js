import { useState, useEffect } from "react"

const withMousePosition = (WrappedComponent) =>
{

    return (props) =>
    {
        const [mousePointer, setMousePointer] = useState({ x:0, y:0});

        useEffect( () =>
        {

            function handleMouseMovementChange(e)
            {
                setMousePointer({ x: e.clientX, y: e.clientY})
            }

            window.addEventListener("mousemove", handleMouseMovementChange)

            return () =>
            {
                window.removeEventListener("mousemove", handleMouseMovementChange);
            }

        },[])

        return (
            <WrappedComponent {...props} mousePosition={mousePointer}/>
        )
    }
}

const PaointMouseLogger = ({ mousePosition }) =>
{
    if( !mousePosition )
        return null;

    return (
        <p>
            <h3> This is the Point Mouse Logger details : </h3>
            ({ mousePosition.x} , {mousePosition.y})
        </p>
    )
}

const PanelMouseLogger = ({ mousePosition }) =>
{
    if( !mousePosition )
        return null;

    return (
        <p>
            <h3> This is the Panel Mouse Logger details : </h3>
            ({ mousePosition.x} , {mousePosition.y})
        </p>
    )
}

const PointMouseTracker = withMousePosition(PaointMouseLogger);
const PanelMouseTracker = withMousePosition(PanelMouseLogger);


const HOC = () =>
{
    return (
        <>
            <h1> This is a sample on how to use Higher Order Component</h1>
            <h2> They are used to transform one component into another component ! </h2>
            <div className="App">
                <header className="Header"> Little Lemon Restaurant </header>
                <PointMouseTracker/>
                <PanelMouseTracker/>
            </div>
        </>
    )

}

export { HOC }