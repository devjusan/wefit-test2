export type ICard = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type IShoppingCard = {
  id: number;
  quantity: number;
  card: ICard;
};

export type IShoppingStore = {
  items: Array<IShoppingCard>;
  addItem: (item: ICard) => void;
  removeItem: (item: ICard) => void;
};
