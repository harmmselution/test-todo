import { Checkbox } from "../../../../ui/CheckBox/CheckBox.tsx";
import { FC } from "react";
import classes from "./FilterItem.module.scss";
import classNames from "classnames";

interface FilterItemProps {
  filter: string;
  onChange: () => void;
  checked: boolean;
}

export const FilterItem: FC<FilterItemProps> = ({ filter, onChange, checked }) => {
  return (
    <div className={classes.filterItem}>
      <Checkbox id={filter} checked={checked} onChange={onChange} />
      <label
        htmlFor={filter}
        className={classNames(classes.filterLabel, {
          [classes.checked]: checked,
        })}
      >
        {filter}
      </label>
    </div>
  );
};
