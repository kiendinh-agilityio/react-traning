import { createContext, useContext } from "react";

// Create data type for CartItem
export interface CartItem {
  id: number;
  name: string;
  price: number;
}

// Create data type for CartContext
export interface CartContextType {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}

// Create Context with default value
export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

// Hook using CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
