import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodoLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmpyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';


const AppUI = () => {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoContext.Consumer>
      {({
          loading,
          error,          
          searchedTodos,
          completeTodo,
          deleteTodo
        }) =>(
        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      )}
      </TodoContext.Consumer>
      
      <CreateTodoButton />
    </>
  );
}

export { AppUI };