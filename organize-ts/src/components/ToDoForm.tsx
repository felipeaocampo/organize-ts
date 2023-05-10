import { useState, Dispatch, SetStateAction, useRef } from "react";
import { ToDo } from "../App";

interface ToDoFormProps {
  addToDo: Dispatch<SetStateAction<ToDo[]>>;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ addToDo }) => {
  const [enteredToDo, setEnteredToDo] = useState(``);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const SubmitToDoHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addToDo((prev) => {
      return [
        ...prev,
        { task: enteredToDo, completed: false, id: Math.random().toString() },
      ];
    });
    setEnteredToDo(``);
    inputRef.current?.blur();
  };

  const ToDoInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setEnteredToDo(e.target.value);
  };

  return (
    <form onSubmit={SubmitToDoHandler}>
      <input
        value={enteredToDo}
        type="text"
        onChange={ToDoInputChangeHandler}
        ref={inputRef}
      />
      <button>Submit To Do!</button>
    </form>
  );
};

export default ToDoForm;
