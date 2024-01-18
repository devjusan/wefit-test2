import { ICard, IShoppingCard, IShoppingStore } from '@/src/types/card';
import { create } from 'zustand';

export const useShoppingStore = create<IShoppingStore>((set) => ({
  items: [],
  itemsMapAux: new Map(),
  addOrUpdateItem: (item: ICard) =>
    set((state) => {
      const itemIfExists = state.itemsMapAux.get(item.id);
      const plus = (itemIfExists?.quantity || 0) + 1;
      const shoppingItem = {
        id: item.id,
        quantity: plus,
        card: item
      } as IShoppingCard;
      state.itemsMapAux.set(item.id, shoppingItem);

      if (!itemIfExists) {
        return {
          items: [...state.items, shoppingItem],
          itemsMapAux: state.itemsMapAux
        };
      }

      const items = state.items.map((i) => {
        if (i.id === item.id) {
          return shoppingItem;
        }

        return i;
      });

      return {
        items,
        itemsMap: state.itemsMapAux
      };
    }),
  removeItem: (item: ICard) =>
    set((state) => {
      state.itemsMapAux.delete(item.id);

      return {
        items: state.items.filter((i) => i.id !== item.id),
        itemsMapAux: state.itemsMapAux
      };
    })
}));
