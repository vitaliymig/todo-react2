import { useTodos } from "../hooks/useTodos";

export default function Todo({ todo }) {
  const [, dispatchTodos] = useTodos()
  function deleteTodo() {
      dispatchTodos({type: 'DELETE', payload: todo.id})
  }
  function completeTodo() {
    dispatchTodos({ type: "COMPLETE", payload: todo.id });
  }
  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" id={todo.id} className="todo-checkbox" onChange={completeTodo} checked={todo.completed} disabled={todo.completed}/>
      <label htmlFor={todo.id}>{todo.title}</label>
      <button className="todo-btn" onClick={deleteTodo}>X</button>
    </div>
  );
}