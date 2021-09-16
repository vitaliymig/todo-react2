import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";




function App() {
  
  return (
    <div className="container">
      <div><img src="https://klike.net/uploads/posts/2019-06/1559370578_1.jpg" alt="mountains"/></div>
      <div className="container-short"> 
      <h2 className="title-todo">T O D O</h2>
      <AddTodo></AddTodo> 
      <TodoList></TodoList>
      </div>      
    </div>
  );
}

export default App;