import { Checkbox } from "../../../../ui/CheckBox/CheckBox.tsx";
import { FC } from "react";

interface FilterItemProps {
  filter: string;
  onChange: () => void;
  checked: boolean;
}

export const FilterItem: FC<FilterItemProps> = ({ filter, onChange, checked }) => {
  return (
    <div>
      <Checkbox id={filter} checked={checked} onChange={onChange} />
      <label htmlFor={filter}>{filter}</label>
    </div>
  );
};
