import { Routes, Route, Link } from "react-router-dom";
import { FunctionExpression } from "./FunctionExpression";
import { UseRef } from "./UseRef";
import { UseState } from "./UseState";
import { RandomGen } from "./RandomGen";
import { SimpleProps } from "./SimpleProps";
import { SimpleReducer } from "./SimpleReducer";
import { SimpleProvider } from "./SimpleProvider";
import { ShowAudio } from "./Components/ShowAudio";
import { ShowImage } from "./Components/ShowImage";
import { ShowVideo } from "./Components/ShowVideo";
import { AboutMe } from "./AboutMe";

const ReactBasicsHome = () =>
{
  return (
    <div>
      <nav>
        <Link to="/fe">Function Expression</Link>
        <Link to="/useState">Use State</Link>
        <Link to="/useRef">Use Ref</Link>
        <Link to="/random">Random Generator</Link>
        <Link to="/props">Simple Props</Link>
        <Link to="/provider">Simple Provider</Link>
        <Link to="/reducer">Simple Reducer</Link>
        <Link to="/Image">Images</Link>
        <Link to="/Audio">Audio</Link>
        <Link to="/Videos">Videos</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/fe" element={<FunctionExpression />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/random" element={<RandomGen />} />
        <Route path="/props" element={<SimpleProps />} />
        <Route path="/provider" element={<SimpleProvider />} />
        <Route path="/reducer" element={<SimpleReducer />} />
        <Route path="/Image" element={<ShowImage />} />
        <Route path="/Audio" element={<ShowAudio />} />
        <Route path="/Videos" element={<ShowVideo />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>);
}

export { ReactBasicsHome };