import { FC, InputHTMLAttributes } from "react";

import classes from "./CheckBox.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  return <input {...props} type='checkbox' className={classes.customCheckbox} />;
};
