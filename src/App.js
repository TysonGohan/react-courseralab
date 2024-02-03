import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { ReactBasicsHome } from "./ReactBasics/ReactBasicsHome";
import { AdvanceReactHome } from "./AdvancedReact/AdvanceReactHome";
import { HomePage } from "./HomePage";

function App() {
  return (
    <div>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/basics"> React Basics </Link>
          <Link to="/advanced"> Advanced React </Link>
        </nav>
        <Routes>
          <Route path="/" element={ <HomePage/>}/>
          <Route path="/basics/*" element={ <ReactBasicsHome/> }/>
          <Route path="/advanced/*" element={ <AdvanceReactHome/> }/>
        </Routes>
    </div>
  );
}

export default App;
