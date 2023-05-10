import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDo from "./components/ToDos";

function App() {
  return (
    <>
      <h1>To Do:</h1>
      <ToDoForm />
      <ToDo />
    </>
  );
}

export default App;
