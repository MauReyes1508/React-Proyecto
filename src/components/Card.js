import React from "react";
import "./style/Card.css"
import img from "../components/image/goku2.jpg"

class Card extends React.Component{
render(){
const {nombre,descripcion,img,color}=this.props
    return (
<div className="card" style={{background:`${color}`}}>
     <h1> {nombre} </h1>
     <p> {descripcion} </p>
     <img src={img} className="imagen" alt=""/> 
</div>
    )
}
}

export default Card