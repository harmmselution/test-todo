import { FC, ReactNode } from 'react';
import classes from './TodoPageLayout.module.scss';

interface TodoPageLayout {
  children: ReactNode;
}

export const TodoPageLayout: FC<TodoPageLayout> = ({ children }) => {
  return (
    <main className={classes.pageLayout}>
      <div className={classes.pageLayoutWrapper}>{children}</div>
    </main>
  );
};
