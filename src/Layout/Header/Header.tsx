import Category from "../../components/Category/Category";
import Logo from "../../components/Logo/Logo";
import Profile from "../../components/Profile/Profile";
import Search from "../../components/Search/Search";

const Header = () => {
  return (
    <div
      className="flex items-center justify-between px-5 py-3 gap-2"
      style={{
        borderBottom: "1px solid #d9d9d9",
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <Logo />
        <Category />
      </div>
      <Search />
      <Profile />
    </div>
  );
};

export default Header;
