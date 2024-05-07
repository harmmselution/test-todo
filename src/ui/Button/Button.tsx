import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button className={classes.button} {...rest}>
      {children}
    </button>
  );
};
