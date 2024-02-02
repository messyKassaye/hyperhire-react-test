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
      isTrial,
      prdType,
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
        <div className="flex items-center justify-between bg-[#009e8a] text-black gap-1 px-1">
          <Icon
            icon={"carbon:return"}
            color="white"
            fontSize={20}
            className="font-bold"
          />
          <span>{tagsOnImage}</span>
        </div>
      </div>
      <span>{title}</span>
      {discountPrice && (
        <div className="flex items-start justify-center gap-3">
          <span className="text-lg font-bold">{`${discountRate}%`}</span>
          <span className="text-lg font-bold">
            {discountPrice?.toLocaleString()}
            <sub>{prdType}</sub>
          </span>
        </div>
      )}
      {isTrial && (
        <div className="isTrial">
          <span>Free trial</span>
        </div>
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
