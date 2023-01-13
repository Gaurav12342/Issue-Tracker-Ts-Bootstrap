import Chip from "components/Chip";
import { FC } from "react";
import "./style.scss";

interface IChipData {
  title?: string;
  color?: string;
}
interface IItemCardProps {
  title?: string;
  chipData?: IChipData;
  description?: string;
  numOfResponse?: number | string;
  avatarImgUrl?: string;
  onClick?: () => void;
}

const ItemCard: FC<IItemCardProps> = (props) => {
  const { title, chipData, description, numOfResponse, avatarImgUrl, onClick } =
    props;
  return (
    <div>
      <div className="card col-10 bg-dark border border-secondary-subtle w-100 my-3">
        <div className="card-container">
          <div className="col-1 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="green"
              className="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </div>
          <div className="col-9">
            <h6
              onClick={onClick}
              className="card-title d-flex text-yellow text-start heading"
            >
              <span>
                {title} &nbsp;{" "}
                {chipData?.title && (
                  <Chip color={chipData?.color} title={chipData?.title} />
                )}
              </span>
            </h6>
            {description && (
              <p className="card-text fst-normal text-light-emphasis text-start">
                {description}
              </p>
            )}
          </div>
          <div className="col-2 d-flex align-items-center justify-content-center">
            {avatarImgUrl && (
              <div className="img-container">
                <img
                  src={avatarImgUrl}
                  className="img-avatar"
                  alt="Assigned to avatar"
                />
              </div>
            )}

            <div className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#aaa"
                className="bi bi-chat-left"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              </svg>
            </div>
            {numOfResponse && (
              <div>
                <p className="card-text fst-normal text-light-emphasis">
                  {numOfResponse}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
