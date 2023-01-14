import { Button, Input } from "components";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const CreateIssue: FC = () => {
  const navigate: any = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="container text-center my-5">
      <div className="text-start">
        <button
          type="button"
          onClick={handleGoBack}
          className="btn btn-link text-yellow"
        >
          Back to Issues List
        </button>
      </div>
      <div className="my-4">
        <h1 className="text-white heading-text">Issue Tracker</h1>
      </div>

      <div className="d-flex flex-column">
        <div className="d-flex justify-content-start mb-4">
          <h3 className="text-white">Add Issue</h3>
        </div>
        <div className="w-75">
          <Input placeholder="Title" type="text" label="Title" />
        </div>

        <div className="w-75 mb-4">
          <label className="form-label search-label d-flex">{"Comment"}</label>
          <textarea
            className="form-control textarea-input"
            placeholder="Comment"
          ></textarea>
        </div>

        <div className="w-25">
          <Button>Add Issue</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateIssue;
