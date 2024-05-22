import React from "react";
import Maestro from "./pages/Maestro"
import Ruta from "./pages/Ruta"
import Error from "./Hoooks"
import Saludo from "./Saludo"
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
const App = ()=>(
    <BrowserRouter>
            <Routes>
                <Route exact path="/Maestro" element={<Maestro/>}></Route>
                <Route exact path="/Ruta" element={<Ruta/>}></Route>
                <Route exact path="/Saludo" element={<Saludo/>}></Route>
                <Route exact path="/*" element={Error}></Route>
            </Routes>
        </BrowserRouter> 
)

export default App
