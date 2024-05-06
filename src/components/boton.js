import React from "react";
import B from './image/boton.jpg'
import "./style/Card.css"

export default function Addb(props){
    return(
        <a href="/pagina/new">
            <img className="boton" src={B} alt="Botón" style={{ width: '62px', height: '50px' }} />
        </a>
    )
}