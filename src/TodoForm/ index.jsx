import React from "react";
import './TodoForm.css'
const TodoForm = () =>{
  return(
    <form onSubmit={(event)=>{
      event.preventDefault();
    }}>
      <label> Escribe tu nuevo TODO</label>
      <textarea
         placeholder="Agrega una tarea"
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button 
          className="TodoForm-button TodoForm-button--cancel" 
          
        >Cancelar</button>
        <button 
          className="TodoForm-button TodoForm-button--add"
          type="submit"

        >Agregar</button>
      </div>  
    </form>
  )
}

export { TodoForm}

