import { TextField } from "../../ui/TextField/TextField.tsx";
import { Button } from "../../ui/Button/Button.tsx";
import classes from "./AddTaskForm.module.scss";
import { FC, FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks.ts";
import { todosActions } from "../../redux/slices/todosSlice.ts";
import { v4 as uuidv4 } from "uuid";

interface AddTaskFormProps {
  onClose: () => void;
}

export const AddTaskForm: FC<AddTaskFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const dispatch = useAppDispatch();
  const isDisabled = !formData.description || !formData.title;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      todosActions.addTodosHandler({
        id: uuidv4(),
        title: formData.title,
        description: formData.description,
        completed: false,
      })
    );
    onClose();
  };

  return (
    <div className={classes.formWrapper}>
      <p className={classes.formTitle}>Add Task</p>
      <form className={classes.addTaskForm}>
        <TextField
          placeholder='Title'
          value={formData.title}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
        />
        <TextField
          placeholder='Details'
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
        />
        <Button disabled={isDisabled} onClick={handleSubmit}>
          Add
        </Button>
      </form>
    </div>
  );
};
