import { useState } from "react";
import { useEffect } from "react";

const DataFetcher = ({ render, url }) =>
{
    const [data, setData] = useState([]);

    useEffect( () =>
    {

        if( url.includes("desserts"))
            setData(["cake", "ice creams", "jamun", "rasagulla"])
        else
            setData(["Wantermelon", "Mint"])

    }, [])

    return render(data);
}

const DessertsCount = () =>
{
    return (
        <DataFetcher url="desserts" render={(data) => <p>{data.length} desserts</p>}/>
    )
}

const DrinksCount = () =>
{
    return (
        <DataFetcher url="drinks" render={(data) => <p>{data.length} desserts</p>}/>
    )
}

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render(mousePosition);
};


const PanelMouseLogger = () => {
  
  return (
    <MousePosition render={ mousePosition => (
      <div className="BasicTracker">
        <p>Mouse position:</p>
        <div className="Row">
          <span>x: {mousePosition.x}</span>
          <span>y: {mousePosition.y}</span>
        </div>
      </div>
    )}/>
  );
};

const PointMouseLogger = () => {

  return (
      <MousePosition render= { (mousePosition) => <p>{mousePosition.x}, {mousePosition.y}</p>  }/>
  )
};

const RenderPropsPattern = () =>
{
    return (
        <>
            <h1> This is an exmaple of render props pattern </h1>
            <DessertsCount/>
            <DrinksCount/>

            <div>
                <h2> This is an example of mouse pointer concept with render props pattern</h2>
                <PanelMouseLogger />
                <PointMouseLogger />
            </div>
        </>
    )
}

export { RenderPropsPattern }