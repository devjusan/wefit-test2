import { ICard, IShoppingStore } from '@/src/types/card';
import { create } from 'zustand';

const useShoppingStore = create<IShoppingStore>((set) => ({
  items: [],
  addItem: (item: ICard) =>
    set((state) => ({
      items: [...state.items, { id: item.id, quantity: 1, card: item }]
    })),
  removeItem: (item: ICard) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== item.id)
    }))
}));
