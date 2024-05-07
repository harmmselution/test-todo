import classes from './Todo.module.scss';
import { trash, checkCircle } from '../../../../assets/img';

export const Todo = () => {
  return (
    <div className={classes.todo}>
      <div className={classes.description}>
        <p>TODO TITLE</p>
        <p>TODO SUBTITLE</p>
        <p>STATUS: не выполнена</p>
      </div>
      <div className={classes.actions}>
        <button>
          <img src={trash} alt='trash' />
        </button>
        <button>
          <img src={checkCircle} alt='checkCircle' />
        </button>
      </div>
    </div>
  );
};
