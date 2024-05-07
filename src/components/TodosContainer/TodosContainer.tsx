import classes from './TodosContainer.module.scss';
import { Todo } from './components/Todo/Todo.tsx';

export const TodosContainer = () => {
  return (
    <div className={classes.todosContainer}>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};
