import { useState, useEffect } from "react";
import { useTodos } from "../hooks/useTodos";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, dispatchTodos] = useTodos();
  const [todosCopy, setTodosCopy] = useState([]);
  const [filterType, setFilterType] = useState(null);
  useEffect(() => {
    setTodosCopy(todos);
  }, [todos]);
  useEffect(() => {
    if (filterType !== null) {
      const filteredTodos = todos.filter(
        (todo) => todo.completed === filterType
      );
      setTodosCopy(filteredTodos);
    } else {
      setTodosCopy(todos);
    }
  }, [todos, filterType]);
  function clearCompleted() {
    dispatchTodos({ type: "DELETE_COMPLETED" });
    setFilterType(null);
  }
  return (
    <>
      <div className="todos">
        {todosCopy.map((todo) => (
          <Todo key={todo.id} todo={todo}></Todo>
        ))}
        {todos.length > 0 && (
          <div className="todos-footer">
            <span>
              {todos.filter((todo) => !todo.completed).length} items left
            </span>
            <div className="filtering">
              <button
                onClick={() => setFilterType(null)}
                className={`${filterType === null ? "active" : ""}`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType(false)}
                className={`${filterType === false ? "active" : ""}`}
              >
                Active
              </button>
              <button
                onClick={() => setFilterType(true)}
                className={`${filterType === true ? "active" : ""}`}
              >
                Completed
              </button>
            </div>
            <button onClick={clearCompleted}>Clear completed</button>
          </div>
        )}
      </div>
    </>
  );
}

// export default function TodoList() {
//   const [todos] = useTodos();
//   return (
//     <div className="todos">
//       {todos.length > 0 && todos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>)}
//       {todos.length === 0 && <h3 className="todos-empty">Новых задач нет :)</h3>}
//     </div>
//   )};
