import { Icon } from "@iconify/react";

const Profile = () => {
  return (
    <div>
      <div className="md:flex hidden items-center justify-between gap-3">
        <Icon icon={"foundation:arrow-down"} fontSize={24} />
        <span>|</span>
        <span
          className="flex"
          style={{
            color: "rgb(51, 51, 51)",
          }}
        >
          Login / Sign up
        </span>
      </div>

      <div className="md:hidden flex items-start justify-between gap-3">
        <Icon icon={"ion:notifcations"} fontSize={32} />
        <Icon icon={"material-symbols:search"} fontSize={32} />
      </div>
    </div>
  );
};

export default Profile;
