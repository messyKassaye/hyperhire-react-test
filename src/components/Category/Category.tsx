import { Icon } from "@iconify/react";

const Category = () => {
  return (
    <div className="md:flex hidden  items-center justify-center gap-2">
      <Icon
        icon={"material-symbols:menu"}
        fontSize={24}
        cursor={"pointer"}
        className="color-primary"
      />
      <span className="text-lg  text-black">Category</span>
    </div>
  );
};

export default Category;
