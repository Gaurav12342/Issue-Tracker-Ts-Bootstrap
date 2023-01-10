import React, { FC } from "react";

interface IButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = (props) => {
  const { onClick, children, disabled } = props;

  return (
    <div>
      <button
        disabled={disabled}
        className="btn btn-warning"
        type="button"
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
