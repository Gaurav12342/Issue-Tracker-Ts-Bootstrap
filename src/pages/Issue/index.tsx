import {
  Chip,
  Button,
  Input,
  Select,
  Spinner,
  ItemCard,
  Pagination,
} from "components";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Home: FC = () => {
  const navigate: any = useNavigate();

  const arrayData: any = [
    {
      id: "bug",
      color: "red",
      name: "bug",
    },
    {
      id: "feature",
      color: "blue",
      name: "feature",
    },
    {
      id: "enhancement",
      color: "cyan",
      name: "enhancement",
    },
    {
      id: "question",
      color: "orange",
      name: "question",
    },
    {
      id: "help",
      color: "lime",
      name: "help wanted",
    },
    {
      id: "wontfix",
      color: "white",
      name: "wontfix",
    },
    {
      id: "duplicate",
      color: "rebeccapurple",
      name: "duplicate",
    },
  ];

  const selectArray = [
    { name: "test", value: "test" },
    { name: "test-1", value: "test-1" },
    { name: "test-2", value: "test-2" },
    { name: "test-3", value: "test-3" },
    { name: "test-4", value: "test-4" },
  ];

  const handleNavigate = () => {
    navigate("/issue/1000");
  };

  const handleAddUser = () => {
    navigate("/issue/add");
  };

  return (
    <div className="container text-center my-5">
      {/* Main Screen */}

      <h1 className="text-white heading-text">Issue Tracker</h1>
      <div className="row align-items-start gx-5">
        <div className="col-7">
          <div>
            <Input placeholder="Search" type="search" label="Search Issues" />
          </div>

          <div className=" d-flex align-items-center">
            <p className="h4 text-white py-3 me-4">Issues List</p>
            <Spinner loading />
          </div>

          <div className="col-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((dd: any) => {
              return (
                <ItemCard
                  chipData={{ title: "bug", color: "red" }}
                  title="Dependencies is actually working fine. I just wanted to let you
                  know you're great all the time"
                  description="#998 opened 1 hour ago by Tanner"
                  numOfResponse={1000}
                  onClick={handleNavigate}
                  avatarImgUrl={
                    "https://res.cloudinary.com/uidotdev/image/twitter_name/ralex1993"
                  }
                />
              );
            })}
          </div>

          <div>
            <Pagination nextText="Next" prevText="Previous" page={10} />
          </div>
        </div>

        <div className="col-4 d-flex flex-column">
          <div>
            <label className="form-label search-label d-flex">{"Labels"}</label>
            <div className="text-start">
              {arrayData?.map((data: any) => {
                return (
                  <Chip
                    color={data?.color}
                    title={data?.name}
                    onClick={() => {
                      alert(`Number is ${data?.name}`);
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <label className="form-label search-label d-flex mt-5">
              {"Status"}
            </label>
            <div className="text-start">
              <Select
                onChange={(e: any) => {
                  console.log("event", e.target.value);
                }}
                items={selectArray}
              />
            </div>

            <hr className="border border-body-tertiary border-2 opacity-25"></hr>

            <div className="w-100">
              <Button onClick={handleAddUser}>Add Issue</Button>
            </div>
          </div>
        </div>
      </div>

      {/* <ItemDetailCard /> */}
      {/* ============================================================ */}

      {/* Dummy Screen */}
      {/* {arrayData?.map((data: any) => {
          return (
            <Chip
              color={data?.color}
              title={data?.name}
              onClick={() => {
                alert(`Number is ${data?.name}`);
              }}
            />
          );
        })}
  
        <Button>Yo yo honey sing</Button>
  
        <Input placeholder="Search" label="Search Issues" />
  
        <Select
          onChange={(e: any) => {
            console.log("event", e.target.value);
          }}
          items={selectArray}
        />
  
        <Spinner loading /> */}

      {/* <ItemCard
          chipData={{ title: "bug", color: "red" }}
          title="Dependencies is actually working fine. I just wanted to let you
                  know you're great all the time"
          description="#998 opened 1 hour ago by Tanner"
          numOfResponse={1000}
          avatarImgUrl={"https://res.cloudinary.com/uidotdev/image/twitter_name/ralex1993"}
        />
  
        <Pagination nextText="Next" prevText="Previous" page={10} /> */}
    </div>
  );
};

export default Home;
