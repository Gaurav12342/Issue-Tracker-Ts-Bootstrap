import { FC } from "react";
import './style.scss';

interface ISearchInput {
  label?: string;
  placeholder?: string;
}

const SearchInput: FC<ISearchInput> = (props) => {
  const { label, placeholder } = props;
  return (
    <div className="mb-3">
      <label className="form-label search-label d-flex">{label}</label>
      <input
        type={"search"}
        className="form-control search-input"
        id="search-input"
        placeholder={placeholder}
        {...props}  
      />
    </div>
  );
};

export default SearchInput;
