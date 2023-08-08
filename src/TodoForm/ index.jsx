import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css'; 

const TodoForm = () =>{
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext); 
  const [newTodoValue, setTodoNewValue] = React.useState('');
  
  const onSubmit = (event) =>{
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);  
  };
  
  const onCancel = () =>{
    setOpenModal(false);  
  };

  const onChange = (event) =>{
    setTodoNewValue(event.target.value);  
  };
  
    return(
    <form onSubmit={onSubmit}>
      <label> Escribe tu nuevo TODO</label>
      <textarea
         placeholder="Agrega una tarea"
         value={newTodoValue}
         onChange={onChange}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button 
          className="TodoForm-button TodoForm-button--cancel" 
          onClick={onCancel}
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

