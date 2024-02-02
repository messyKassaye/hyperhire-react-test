import { Skeleton } from "antd";

type Props = {
  type: "single" | "cards";
};
const Loader = ({ type }: Props) => {
  if (type === "cards") {
    return (
      <div className="flex items-start justify-center gap-2 mt-10 w-full">
        {[1, 2, 3, 4, 5, 6, 7].map((_) => (
          <Skeleton.Input
            active
            style={{
              width: "150px",
              height: "100px",
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "single") {
    return (
      <div>
        <Skeleton.Input
          active
          className="w-full"
          style={{
            height: "500px",
            width: "100%",
          }}
        />
      </div>
    );
  }

  return (
    <Skeleton.Input
      active
      className="w-full"
      style={{
        height: "500px",
      }}
    />
  );
};

export default Loader;
