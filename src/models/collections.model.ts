export interface IMedia {
  seq: number;
  type: string;
  uri: string;
  memeType: string;
  deviceType: string;
  fileName: string;
  collectionId: number;
  objectKey: string;
  itemKey: string;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface IPriceInfo {
  price: number;
  discountPrice: number;
  discountRate: number;
}

export interface IDiscounts {
  id: number;
  name: string;
  type: string;
  calcMethod: string;
  value: number;
  activeFrom: Date;
  activeTo: string;
  qty: number;
  remain: string;
}

export interface IPublication {
  id: number;
  title: string;
  code: string;
  productId: number;
  prdType: number;
  offeringType: string;
  rating: number;
  isExistResidual: boolean;
  isAdult: number;
  preface: string;
  prefaceIconUrl: string;
  productName: string;
  brandName: string;
  media: IMedia[];
  isTrial: boolean;
  tagsOnImage: string;
  tagsOnDesc: string;
  priceInfo: IPriceInfo;
  discounts: IDiscounts[];
  applyCoupon: boolean;
}

export interface IItems {
  uuid: string;
  name: string;
  body: string;
  collectionId: number;
  key: string;
  seq: number;
  entityType: string;
  entityId: number;
  optionKey: string;
  publication: IPublication;
  prdTye: number;
}

export interface ICollections {
  id: number;
  type: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod: Date;
  installmentPrice: number;
  installmentPeriod: Date;
  rating: number;
  startDate: Date;
  viewType: string;
  createdAt: Date;
  items: IItems[];
  media: IMedia[];
  thumbnail: IMedia;
}
