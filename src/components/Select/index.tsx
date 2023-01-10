import { FC } from "react";
import "./style.scss";

interface IItems {
  name: string;
  value: string;
}

interface ISelectProps {
  items?: IItems[];
  value?: any;
  disabled?: boolean;
  onChange?: any;
  defaultSelectLabel?: string;
}

const Select: FC<ISelectProps> = (props) => {
  const {
    onChange,
    value,
    defaultSelectLabel = "Please select",
    items,
  } = props;
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        className="form-select select"
        aria-label="Default select example"
        {...props}
      >
        <option className="form-select select" selected>{defaultSelectLabel}</option>
        {items?.length &&
          items?.map((opt: IItems) => {
            return <option className="form-select select" value={opt?.value}>{opt?.name}</option>;
          })}
      </select>
    </div>
  );
};

export default Select;
