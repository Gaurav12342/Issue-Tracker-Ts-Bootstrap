import { Button, Chip, Select } from "components";
import ItemDetailCard from "components/ItemDetailCard";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const IssueDetail: FC = () => {
  const navigate: any = useNavigate();

  const selectArray = [
    { name: "test", value: "test" },
    { name: "test-1", value: "test-1" },
    { name: "test-2", value: "test-2" },
    { name: "test-3", value: "test-3" },
    { name: "test-4", value: "test-4" },
  ];

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="container text-center my-5">
      <div className="text-start">
        <button type="button" onClick={handleGoBack} className="btn btn-link text-yellow">
          Back to Issues List
        </button>
      </div>
      <div className="my-4">
        <h1 className="text-white heading-text">Issue Tracker</h1>
      </div>

      <div className="my-4">
        <h3 className="text-white text-start">
          Dependencies cannot read property 'length' of undefined when I'm on a
          train <p className="h3 text-white-50">#1000</p>
        </h3>
      </div>

      <div className="my-3">
        <h6 className="mb-0 text-white-50 text-start">
          <Chip color={"red"} title={"ToDo's"} /> Alex &nbsp;
          <small className="text-secondary">
            opened this issue 1 hour ago · 199 comments
          </small>
        </h6>
      </div>

      <div className="row align-items-start gx-5">
        <hr className="border border-body-tertiary border-2 opacity-25"></hr>

        <div className="col-7">
          <div className="col-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((dd: any) => {
              return <ItemDetailCard />;
            })}
          </div>
        </div>

        <div className="col-4 d-flex flex-column">
          <div>
            <label className="form-label search-label d-flex mt-5">
              {"Status"}
            </label>
            <div className="text-start w-50">
              <Select
                onChange={(e: any) => {
                  console.log("event", e.target.value);
                }}
                items={selectArray}
              />
            </div>
            <hr className="border border-body-tertiary border-2 opacity-25"></hr>

            <div className="text-start w-50">
              <Select
                onChange={(e: any) => {
                  console.log("event", e.target.value);
                }}
                items={selectArray}
              />
            </div>
            <hr className="border border-body-tertiary border-2 opacity-25"></hr>

            <div className="text-start w-50">
              <Select
                onChange={(e: any) => {
                  console.log("event", e.target.value);
                }}
                items={selectArray}
              />
            </div>
            <hr className="border border-body-tertiary border-2 opacity-25"></hr>
            <div className="w-100">{/* <Button>Add Issue</Button> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetail;
