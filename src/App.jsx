import "./App.css";
import TodoList from "./components/TodoList";

//? import bootstrap in app component to use every where
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
