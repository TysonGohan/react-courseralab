import { Route, Routes, Link } from "react-router-dom";
import { Map } from "./Componenets/Map";
import { Keys } from "./Componenets/Keys";
import { ControlledComps } from "./Componenets/ControlledComps";
import { MyContext } from "./Componenets/MyContext";
import { ThemeProvider } from "./Componenets/ThemeProvider";
import { CorrectWayToUpdateState } from "./Componenets/CorrectWayToUpdateState";
import { GiftCardState } from "./Componenets/GiftCardState";
import { GoalsState } from "./Componenets/GoalsState";
import { MyUseEffect } from "./Componenets/MyUseEffect";
import { UseEffectWithFetch } from "./Componenets/UseEffectWithFetch";
import { UseCustomHooks } from "./Componenets/UseCustomHooks";
import { ComponenetComposition } from "./Componenets/CompoenentComposition";
import { CloneElement } from "./Componenets/CloneElement";
import { SpreadOperator } from "./Componenets/SpreadOperator";
import { HOC } from "./Componenets/HOC";
import { RenderPropsPattern } from "./Componenets/RenderPropsPattern";

const AdvanceReactHome = () =>
{
    return  <>
        <h2> Advanced React Topics </h2>
        <nav>
            <Link to="/advanced/map">Map</Link>
            <Link to="/advanced/keys">Keys</Link>
            <Link to="/advanced/controlledComps">Controlled Componenets</Link>
            <Link to="/advanced/context">Context</Link>
            <Link to="/advanced/updateState">Correct Way to Update Sate</Link>
            <Link to="/advanced/useEffect">Use Effect or Side Effect</Link>
            <Link to="/advanced/customHooks">Custom Hooks</Link>
            <Link to="/advanced/componentComposition">Component ComponenetComposition</Link>
            <Link to="/advanced/cloneElement"> Clone Element</Link>
            <Link to="/advanced/spread"> Spread Operator </Link>
            <Link to="/advanced/hoc"> Higher order Component </Link>
            <Link to="/advanced/propsPattern"> Render Props Pattern </Link>
        </nav>
        <Routes>
            <Route path="/map" element={<Map/>}/>
            <Route path="/keys" element={<Keys/>}/>
            <Route path="/controlledComps" element={<ControlledComps/>}/>
            <Route path="/context" element={ <ThemeProvider> <MyContext/></ThemeProvider>}/>
            <Route path="/updateState" element={ <><CorrectWayToUpdateState/><GiftCardState/><GoalsState/></>}/>
            <Route path="/useEffect" element={<><MyUseEffect/><UseEffectWithFetch/></>}/>
            <Route path="/customHooks" element={<UseCustomHooks/>}/>
            <Route path="/componentComposition" element={<ComponenetComposition/>}/>
            <Route path="/cloneElement" element={<CloneElement/>}/>
            <Route path="/spread" element={<SpreadOperator/>}/>
            <Route path="/hoc" element={<HOC/>}/>
            <Route path="/propsPattern" element={<RenderPropsPattern/>}/>
        </Routes>
    </>
}

export { AdvanceReactHome };