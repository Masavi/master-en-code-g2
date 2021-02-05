import { useState } from 'react';
import Todo from './Todo';

function Todos() {
  const [todos, setTodos] = useState([
    {
      text: 'Comprar chiles poblanos',
      isCompleted: false,
    },
    {
      text: 'Bañarme',
      isCompleted: false,
    },
    {
      text: 'Hacer la tarea del devf',
      isCompleted: true,
    },
  ]);
 
  const setCompleted = (index) => {
    console.log("Hola desde el padre!!", index);
    // Debes utilizar para modificar el estado "setTodos"
  }

  return (
    <>
      <h1>Todo App</h1>
      <h3> Crear Todo </h3>
      {/* Crear un componente con un input que permita insertar todos */}
      {
        todos.map((todo, index) => {
           return <Todo
            key={index}
            index={index}
            text={todo.text} 
            isCompleted={todo.isCompleted}
            setCompleted={setCompleted}
          />
        })
      }
    </>
  )
}

export default Todos;