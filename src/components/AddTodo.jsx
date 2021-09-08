import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [, dispatchTodos] = useTodos();

  function addTodo(e) {
    e.preventDefault();
    dispatchTodos({ type: "ADD_TODO", payload: {title, body} });
    setTitle("");
    setBody("");
  }
  return (
    <form onSubmit={addTodo} className="add-todo">
      <input type="checkbox" className="form-checkbox"/>
      <input type="text" className="form-text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Create todo here..." required />
    </form>
  );
}
