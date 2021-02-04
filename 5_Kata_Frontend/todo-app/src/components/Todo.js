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
      <input type="checkbox" onClick={props.setCompleted} />
      <span style={ showCompleted(props.isCompleted) }>
        {props.text}
      </span>
    </div>
  )
}

export default Todo;