import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({openModal, setOpenModal}) {
  

  return (
      <button 
        className="CreateTodoButton"
        onClick={()=>{
          setOpenModal(!openModal);
        }}
      >+</button>
  )
}

export { CreateTodoButton };
