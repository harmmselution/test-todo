import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classes from "./Button.module.scss";
import classNames from "classnames";

type variant = "sm" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: variant;
}

export const Button: FC<ButtonProps> = ({ children, variant, ...rest }) => {
  return (
    <button
      className={classNames(classes.button, {
        [classes[variant]]: variant,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
