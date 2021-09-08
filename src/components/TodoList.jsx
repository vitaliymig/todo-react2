import { useTodos } from "../hooks/useTodos";
import Todo from "./Todo";

export default function TodoList() {
  const [todos] = useTodos();
  return (
    <>
    <div className="todos">
      {todos.length > 0 && todos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>)}
      {todos.length && <div className="todos-footer">
        <span>5 items left</span>
        <div className="btn-process">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
        </div>
        <button>Clear ALL</button>
      </div>}
      
    </div>
    </>
  )};


























  // export default function TodoList() {
  //   const [todos] = useTodos();
  //   return (
  //     <div className="todos">
  //       {todos.length > 0 && todos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>)}
  //       {todos.length === 0 && <h3 className="todos-empty">Новых задач нет :)</h3>}
  //     </div>
  //   )};