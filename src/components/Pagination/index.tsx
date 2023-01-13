import Button from "components/Button";
import { FC } from "react";

interface IPaginationProps {
  prevText?: string;
  nextText?: string;
  page: number;
  loading?: boolean;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}
const Pagination: FC<IPaginationProps> = (props) => {
  const {
    prevText = "Prev",
    nextText = "Next",
    page,
    loading,
    onPrevClick,
    onNextClick,
  } = props;
  return (
    <div className="d-flex justify-content-around col-12 align-items-center">
      <Button onClick={onPrevClick}>{prevText}</Button>
      <h6 className="card-title d-flex text-white">{`Page ${
        loading ? `${page}...` : page
      }`}</h6>
      <Button onClick={onNextClick}>{nextText}</Button>
    </div>
  );
};

export default Pagination;
