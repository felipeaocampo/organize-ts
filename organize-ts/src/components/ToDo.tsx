import { ToDo } from "../App";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

interface ToDoCompProps extends ToDo {
  toggleToDoIcon: (id: string) => void;
}

const ToDoComp: React.FC<ToDoCompProps> = ({
  task,
  completed,
  id,
  toggleToDoIcon,
}) => {
  const CheckBoxClickHandler = () => {
    toggleToDoIcon(id);
  };

  return (
    <li>
      {task} -{" "}
      {completed ? (
        <BiCheckboxChecked onClick={CheckBoxClickHandler} />
      ) : (
        <BiCheckbox onClick={CheckBoxClickHandler} />
      )}
    </li>
  );
};

export default ToDoComp;
