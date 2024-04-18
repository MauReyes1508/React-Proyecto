import React from 'react';
import ReactDOM from "react-dom/client";
import Card from "./components/Card"

const root = ReactDOM.createRoot(
    document.getElementById('root')
)




root.render(<Card
  nombre = "Bobi"
  edad = "marihuano 🥦 "
  color = "#00ffff"
/>)




/* const nombre = 'Sanchez';
const user = {
    Nombre: 'Simon',
    Apellido: 'Bolivar',
    Edad: 1000,
    Avatar: 'https://e1.pxfuel.com/desktop-wallpaper/12/815/desktop-wallpaper-spongebob-3d-spongebob-memes.jpg'
}
function datouser(user){
    return user.Nombre+' '+user.Apellido+' '+user.Edad;
}
const element = <h1>Hello, {nombre}</h1>;   //JSX la linea 4 hasta la 10 son el JSX
 const element = <h1>Hello, {user.Nombre+' '+user.Apellido+' '+user.Edad}</h1>;  // Este metodo es para imprimir el elemento en el DOM
//const element = <h1>Hello, {datouser(user)}</h1>;
const element = (       //div etiqueta padre para imprimir la funcion y la imagen
    <div>           
        <h1>Hello, {datouser(user)}</h1>
        <img src={user.Avatar}/> 
    </div>
) */
