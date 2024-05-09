import classes from "./Header.module.scss";

import { AddTaskForm } from "../AddTaskForm/AddTaskForm.tsx";
import { useState } from "react";
import { Modal } from "../../ui/Modal/Modal.tsx";
import { logo } from "../../assets/img/index.ts";
import { Button } from "../../ui/Button/Button.tsx";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>TODO APP</h1>
      <img className={classes.logo} src={logo} alt='logo' />
      <p className={classes.description}>
        Make your life <br /> easier with this app!
      </p>
      <Button variant='sm' onClick={() => setIsModalOpen(true)}>
        Add todo
      </Button>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddTaskForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </header>
  );
};
