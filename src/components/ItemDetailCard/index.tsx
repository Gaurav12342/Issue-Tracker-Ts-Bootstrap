import { FC } from "react";
import "./style.scss";

const ItemDetailCard: FC = () => {
  return (
    <div className="col-12 d-flex flex-row w-100 my-3">
      <div className="col-1">
        <div className="img-container">
          <img
            src={
              "https://res.cloudinary.com/uidotdev/image/twitter_name/ralex1993"
            }
            className="img-avatar"
            alt="Assigned to avatar"
          />
        </div>
      </div>
      <div className="card col-11 bg-dark border border-body-tertiary">
        <div className="card-header text-white text-start">
          <h6 className="mb-0">
            Tanner &nbsp;
            <small className="text-secondary">commented 2 hours ago</small>
          </h6>
        </div>
        <ul className="list-group list-group-flush text-start border border-body-tertiary py-1">
          <li className="list-group-item bg-dark text-white">I've reproduced this issue. Working on a fix now.</li>
        </ul>
      </div>
    </div>
  );
};

export default ItemDetailCard;
