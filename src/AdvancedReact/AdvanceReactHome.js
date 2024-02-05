import { Route, Routes, Link } from "react-router-dom";
import { Map } from "./Componenets/Map";
import { Keys } from "./Componenets/Keys";
import { ControlledComps } from "./Componenets/ControlledComps";
import { MyContext } from "./Componenets/MyContext";
import { ThemeProvider } from "./Componenets/ThemeProvider";
import { CorrectWayToUpdateState } from "./Componenets/CorrectWayToUpdateState";
import { GiftCardState } from "./Componenets/GiftCardState";
import { GoalsState } from "./Componenets/GoalsState";

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
        </nav>
        <Routes>
            <Route path="/map" element={<Map/>}/>
            <Route path="/keys" element={<Keys/>}/>
            <Route path="/controlledComps" element={<ControlledComps/>}/>
            <Route path="/context" element={ <ThemeProvider> <MyContext/></ThemeProvider>}/>
            <Route path="/updateState" element={ <><CorrectWayToUpdateState/><GiftCardState/><GoalsState/></>}/>
        </Routes>
    </>
}

export { AdvanceReactHome };