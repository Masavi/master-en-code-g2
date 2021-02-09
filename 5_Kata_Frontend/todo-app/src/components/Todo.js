import './Todo.css';

function Todo(props) {
  const showCompleted = (isCompleted) => {
    return isCompleted
      ? { 
        textDecorationLine: 'line-through', 
        marginLeft: '20px',
      }
      : { marginLeft: '20px' };
  }

  return (
    <div className="todo">
      <button
        type="button"
        style={{marginRight: "10px"}}
        onClick={() => props.delete(props.index)}>
          Borrar
      </button>
      <input checked={props.isCompleted} type="checkbox" onChange={() => props.setCompleted(props.index)} />
      <span style={ showCompleted(props.isCompleted) }>
        {props.text}
      </span>
    </div>
  )
}

export default Todo;