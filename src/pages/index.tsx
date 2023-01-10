import { Chip, Button, SearchInput } from "components";
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
  return (
    <div>
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

      <Button>Yo yo honey sing</Button>

      <SearchInput placeholder="Search" label="Search Issues" />
    </div>
  );
};

export default Home;
