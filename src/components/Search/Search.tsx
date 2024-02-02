import { Icon } from "@iconify/react";
import { Input } from "antd";

const Search = () => {
  return (
    <Input
      placeholder="If you're wondering whether to buy it or not,"
      className="w-[50%] md:flex hidden search-input"
      prefix={
        <Icon
          icon={"material-symbols:search"}
          style={{ color: "#242424" }}
          fontSize={28}
        />
      }
    />
  );
};

export default Search;
