import { FC } from "react";

interface IChipProps {
  color?: string;
  title?: string;
  onClick?: () => void;
}

const Chip: FC<IChipProps> = (props) => {
  const { color = "primary", onClick, title } = props;

  return (
    // <div>
    <button
      type="button"
      className={`btn btn-outline-${color} px-3 py-0 rounded-pill my-1 mx-1`}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
    // </div>
  );
};

export default Chip;
