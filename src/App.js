import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { ReactBasicsHome } from "./ReactBasics/ReactBasicsHome";
import { AdvanceReactHome } from "./AdvancedReact/AdvanceReactHome";
import { HomePage } from "./HomePage";
import { PortfolioHome } from "./CourseEraPortfolio/PortfolioHome";

function App() {

  function handleClick( anchor, e)
  {
      e.preventDefault();
      console.log("href clicked");
  }

  //const navigate = useNavigate();

  return (
    <div>
        <a href="google.om#" onClick={e => handleClick("asdf", e)}>Click me</a>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/basics"> React Basics </Link>
          <Link to="/advanced"> Advanced React </Link>
          <Link to="/portfolio"> Coursera Portfolio </Link>
        </nav>
        <Routes>
          <Route path="/" element={ <HomePage/>}/>
          <Route path="/basics/*" element={ <ReactBasicsHome/> }/>
          <Route path="/advanced/*" element={ <AdvanceReactHome/> }/>
          <Route path="/portfolio" element={ <PortfolioHome/>}/>
        </Routes>
        {/* <button onClick={ () => navigate("/basics")}> Go to Basics</button> */}
    </div>
  );
}

export default App;
