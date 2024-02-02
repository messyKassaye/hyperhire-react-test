import { Icon } from "@iconify/react";
import { IItems } from "../../models/collections.model";

type Props = {
  items: IItems;
};
const CollectionItemsCard = ({ items }: Props) => {
  const {
    publication: {
      title,
      media,
      priceInfo: { discountPrice, discountRate },
      rating,
      preface,
      tagsOnImage,
    },
  } = items;
  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <div
        className="flex items-end justify-start"
        style={{
          backgroundImage: `url(${media[0].uri})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "200px",
          height: "150px",
        }}
      >
        <div className="flex items-center justify-between bg-[#009e8a] text-black gap-1">
          <Icon
            icon={"carbon:return"}
            color="white"
            fontSize={24}
            className="font-bold"
          />
          <span>{tagsOnImage}</span>
        </div>
      </div>
      <span>{title}</span>
      {discountPrice && (
        <span className="font-bold text-lg">{`${discountRate}%  ${discountPrice?.toLocaleString()}`}</span>
      )}
      <div className="flex flex-center justify-start">
        <Icon icon={"material-symbols-light:star-rate"} />
        <span>{rating}</span>
      </div>
      {preface && (
        <div className="px-2 py-1" style={{ border: "1px solid #d9d9d9" }}>
          <span>{preface}</span>
        </div>
      )}
    </div>
  );
};

export default CollectionItemsCard;
