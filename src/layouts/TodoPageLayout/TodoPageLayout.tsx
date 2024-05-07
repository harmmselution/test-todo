import { FC, ReactNode } from 'react';
import classes from './TodoPageLayout.module.scss';

interface TodoPageLayoutProps {
  children: ReactNode;
}

export const TodoPageLayout: FC<TodoPageLayoutProps> = ({ children }) => {
  return (
    <main className={classes.pageLayout}>
      <div className={classes.pageLayoutWrapper}>{children}</div>
    </main>
  );
};
