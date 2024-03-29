export type ICard = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type IShoppingCard = {
  id: number;
  card: ICard;
  quantity?: number;
};

export type IShoppingStore = {
  items: Array<IShoppingCard>;
  itemsMapAux: Map<number, IShoppingCard>;
  updateQuantity: (item: ICard, quantity: number) => void;
  addOrUpdateItem: (item: ICard) => void;
  removeItem: (item: ICard) => void;
};
