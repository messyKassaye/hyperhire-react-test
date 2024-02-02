import Collections from "../Layout/Collections/Collections";
import Header from "../Layout/Header/Header";
import ShortCuts from "../Layout/ShortCuts/ShortCuts";
import Carousel from "../components/Carousel/Carousel";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="md:w-[65%]  w-full">
        <Header />
        <Carousel />
        <ShortCuts />
        <Collections />
      </div>
    </div>
  );
};

export default HomePage;
