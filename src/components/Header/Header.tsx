import classes from "./Header.module.scss";
import { Modal } from "../../ui/Modal/Modal.tsx";

import { AddTaskForm } from "../AddTaskForm/AddTaskForm.tsx";
import { useState } from "react";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>TODO APP</h1>
      <button className={classes.addTodo} onClick={() => setIsModalOpen(true)}>
        Add todo
      </button>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddTaskForm />
      </Modal>
    </header>
  );
};
