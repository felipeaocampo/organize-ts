import { FC } from "react";
import { ToDo } from "../App";
import ToDoComp from "./ToDo";

interface ToDoProps {
  toDos: ToDo[];
  toggleToDoIcon: (id: string) => void;
}

const ToDoList: FC<ToDoProps> = ({ toDos, toggleToDoIcon }) => {
  console.log(toDos);

  const renderedToDos = toDos.map((todo) => {
    return (
      <ToDoComp
        key={todo.id}
        task={todo.task}
        completed={todo.completed}
        id={todo.id}
        toggleToDoIcon={toggleToDoIcon}
      />
    );
  });

  return <ul>{renderedToDos}</ul>;
};

export default ToDoList;
