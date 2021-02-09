import { useState } from 'react';
import Todo from './Todo';

function CreateTodo(props) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      margin: '10px',
      width: '500px',
    }}>
      <input 
        type="text"
        placeholder="¡agrega un todo!"
        style={{
          width: '300px',
          marginRight: '2em',
        }}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button
        style={{
          background: 'white',
          padding: '8px',
          borderRadius: '10px',
        }}
        type="button"
        onClick={() => props.addTodo(newTodo)}
      > Agregar </button>
    </div>
  )  
}

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
    const myTodos = [...todos];
    const isCompleted = myTodos[index].isCompleted;
    myTodos[index].isCompleted = !isCompleted;
    setTodos(myTodos);
  }

  const addTodo = (todoText) => {
    const myTodos = [
      ...todos,
      { text: todoText, isCompleted: false }
    ];
    setTodos(myTodos);
  }

  const deleteTodo = (index) => {
    const myTodos = [...todos];
    myTodos.splice(index, 1);
    setTodos(myTodos);
  }

  return (
    <>
      <h1>Todo App</h1>
      <CreateTodo addTodo={addTodo} />
      {
        todos.map((todo, index) => {
           return <Todo
            key={index}
            index={index}
            text={todo.text} 
            isCompleted={todo.isCompleted}
            setCompleted={setCompleted}
            delete={deleteTodo}
          />
        })
      }
    </>
  )
}

export default Todos;