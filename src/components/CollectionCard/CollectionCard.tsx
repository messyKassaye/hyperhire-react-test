import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { ICollections } from "../../models/collections.model";
import CollectionItemsCard from "../CollectionItemsCard/CollectionItemsCard";

type Props = {
  collection: ICollections;
};
const CollectionCard = ({ collection }: Props) => {
  return (
    <div className="grid grid-cols-3 md:grid-flow-col grid-flow-row gap-4 ">
      <div className="flex flex-col items-start justify-start sm:w-full">
        <span className="text-3xl font-bold">{collection.title}</span>
        <span>{collection.subtitle}</span>
      </div>

      <div className="col-span-4 flex items-center justify-start">
        <Swiper
          spaceBetween={10} // Adjust the space between slides as needed
          slidesPerView={Math.floor(window.innerWidth / 500)}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          loop={true}
          autoplay={{
            delay: 1000,
          }}
        >
          {collection.items.map((item) => (
            <SwiperSlide key={item.uuid} style={{ width: "500px" }}>
              <CollectionItemsCard items={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CollectionCard;
