import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";




function App() {
  
  return (
    <div className="container">
      <div className="container-short"> 
      <h2 className="title-todo">T O D O</h2>
      <AddTodo></AddTodo> 
      <TodoList></TodoList>
      </div>      
    </div>
  );
}

export default App;
