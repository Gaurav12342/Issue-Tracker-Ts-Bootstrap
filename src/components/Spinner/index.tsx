import { FC } from "react";

interface ISpinner {
  loading?: boolean;
}
const Spinner: FC<ISpinner> = (props) => {
  const { loading = false } = props;
  return (
    <div>
      {loading && (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Spinner;
