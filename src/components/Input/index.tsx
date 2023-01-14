import { FC } from "react";
import "./style.scss";

interface IInput {
  label?: string;
  placeholder?: string;
  type?: string;
}

const Input: FC<IInput> = (props) => {
  const { label, placeholder, type } = props;
  return (
    <div className="mb-3">
      <label className="form-label search-label d-flex">{label}</label>
      <input
        type={type}
        className="form-control search-input"
        id="search-input"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
