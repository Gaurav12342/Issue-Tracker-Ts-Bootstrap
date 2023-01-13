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

      <div className="d-flex justify-content-start">
        <div>
          <h3 className="text-white">Add Issue</h3>
        </div>
        <div>
          <h4 className="text-white">Title</h4>
          
        </div>
      </div>
    </div>
  );
};

export default CreateIssue;
