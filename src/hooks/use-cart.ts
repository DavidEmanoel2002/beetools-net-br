import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image_url: string | null;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: { id: string; name: string; price: number; image_url: string | null }) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state: CartState) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                id: product.id,
                name: product.name,
                price: product.price,
                image_url: product.image_url,
                quantity: 1,
              },
            ],
          };
        }),
      removeItem: (id) =>
        set((state: CartState) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
