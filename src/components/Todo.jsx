import { useTodos } from "../hooks/useTodos";

export default function Todo({ todo }) {
    const [, dispatchTodos] = useTodos()
  function actionTodo() {
      dispatchTodos({type: 'DELETE', payload: todo.id})
  }
  return (
    <div className="todo">
      <input type="checkbox" className="todo-checkbox"/>
      <h2>{todo.title}</h2>
      <button className="todo-btn" onClick={actionTodo}>X</button>
    </div>
  );
}
