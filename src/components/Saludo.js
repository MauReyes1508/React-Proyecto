import React from "react";

export default class Saludo extends React.Component{   
    state = {} // De esta manera captura el estado de la pagina actual

    handleSubmit = e =>{    //El handle es una referencia para decir que es una funcion
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = e =>{
        console.log(`${e.target.name}: ${e.target.value}`) // La e es el evento
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <fieldset>
                        <legend>Fromulario</legend>
                            <p>
                                <input type="text" name="nombre" placeholder="Nombre" onChange={this.handleChange} value={this.state.nombre} /><br></br><br></br>
                                <textarea placeholder="Descripción"></textarea><br></br><br></br>
                                <input type="submit" value="Enviar" />
                            </p>
                    </fieldset>
                </form>
            </div>
        )
    }
}