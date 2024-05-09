import React from "react";
import Maestro from "./pages/Maestro"
import Ruta from "./pages/Ruta"
import Error from "./Hoooks"
import { BrowserRouter, Route, Routes } from "react-router-dom";
 export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/Maestro" element={<Maestro/>}></Route>
                <Route exact path="/Ruta" element={<Ruta/>}></Route>
                <Route exact path="/*" element={Error}></Route>
            </Routes>
        </BrowserRouter>
    )
 }