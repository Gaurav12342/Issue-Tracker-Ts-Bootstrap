import {
  Chip,
  Button,
  SearchInput,
  Select,
  Spinner,
  ItemCard,
  Pagination,
} from "components";
import { FC } from "react";

const Home: FC = () => {
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
  return (
    <div>
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

      <SearchInput placeholder="Search" label="Search Issues" />

      <Select
        onChange={(e: any) => {
          console.log("event", e.target.value);
        }}
        items={selectArray}
      />

      <Spinner loading /> */}

      <ItemCard /> 

      <Pagination nextText="Next" prevText="Previous" page={10}/>
    </div>
  );
};

export default Home;
