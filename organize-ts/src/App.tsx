import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDosList from "./components/ToDosList";

export interface ToDo {
  task: string;
  completed: boolean;
  id: string;
}

function App() {
  const [ToDos, setToDos] = useState<ToDo[]>([]);

  const toggleToDoIcon = (id: string) => {
    setToDos((prev) => {
      const clickedToDoIndex = prev.findIndex((toDo) => {
        return toDo.id === id;
      });
      const clickedToDo = prev[clickedToDoIndex];

      const newToDos: ToDo[] = [...prev];
      const newToDo: ToDo = {
        task: clickedToDo.task,
        id: clickedToDo.id,
        completed: !clickedToDo.completed,
      };

      newToDos[clickedToDoIndex] = newToDo;

      return newToDos;
    });
  };

  return (
    <>
      <h1>To Do:</h1>
      <ToDoForm addToDo={setToDos} />
      <ToDosList toDos={ToDos} toggleToDoIcon={toggleToDoIcon} />
    </>
  );
}

export default App;
