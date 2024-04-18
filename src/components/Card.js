import React from "react";
import bob from "./Images/bob.jpg"
import "./style/Card.css"

class Card extends React.Component{
render(){
    const {nombre, edad, color} = this.props // Metodo para reestructurar el codigo para no llamar las propiedades con "this.props"
    return (
        <div className="card back">
            <div className="font">
                <h1 style={{color:`${color}`}}> Holi {nombre} el {edad}</h1>    
        </div>
            <div>
                <img src={bob} className="porta" alt=""/>
            </div>
        </div>
    )
}
}

export default Card