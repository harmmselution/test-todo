import { TextField } from "../../ui/TextField/TextField.tsx";
import { Button } from "../../ui/Button/Button.tsx";
import classes from "./AddTaskForm.module.scss";
import { useState } from "react";

export const AddTaskForm = () => {
  const [formData, setFormData] = useState({ title: "", details: "" });
  const isDisabled = !formData.details || !formData.title;
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
          value={formData.details}
          onChange={(e) => setFormData((prev) => ({ ...prev, details: e.target.value }))}
        />
        <Button disabled={isDisabled}>Add</Button>
      </form>
    </div>
  );
};
