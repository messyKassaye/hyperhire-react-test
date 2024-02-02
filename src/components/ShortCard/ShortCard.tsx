import { IShortCut } from "../../models/shortcut.model";

type Props = {
  shortCut: IShortCut;
};
const ShortCard = ({ shortCut }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between gap-3">
      <img
        style={{
          width: "65px",
          height: "65px",
        }}
        src={shortCut.imageUrl}
        alt={shortCut.title}
      />
      <span>{shortCut.title}</span>
    </div>
  );
};

export default ShortCard;
