import Button from "components/Button";
import { FC } from "react";

interface IPaginationProps {
  prevText: string;
  nextText: string;
  page: number;
  loading?: boolean;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}
const Pagination: FC<IPaginationProps> = (props) => {
  const { prevText, nextText, page, loading, onPrevClick, onNextClick } = props;
  return (
    <div className="d-flex justify-content-around col-10">
      <Button onClick={onPrevClick}>{prevText}</Button>
      <h6 className="card-title d-flex text-white">{`Page ${
        loading ? `${page}...` : page
      }`}</h6>
      <Button onClick={onNextClick}>{nextText}</Button>
    </div>
  );
};

export default Pagination;
