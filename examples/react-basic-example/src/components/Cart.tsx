import { useState, ReactNode } from "react";
import { useCart, CartContext, CartItem } from "../hooks/useCart";

interface CartProviderProps {
  children: ReactNode;
}

// Create CartProvider to manage cart status
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Component displays shopping cart
export const Cart = () => {
  const { cart, removeItem } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              className="btn btn-secondary"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Component to add items to cart
export const AddItemButton = ({ item }: { item: CartItem }) => {
  const { addItem } = useCart();

  return (
    <button className="btn btn-primary" onClick={() => addItem(item)}>
      Add {item.name}
    </button>
  );
};

// App Component to wrap everything within CartProvider
export const CartProviderApp = () => {
  const sampleItems: CartItem[] = [
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 2 },
    { id: 3, name: "Orange", price: 3 },
  ];

  return (
    <CartProvider>
      <div className="border">
        <h1>Shopping Cart Example</h1>
        <div>
          {sampleItems.map((item) => (
            <AddItemButton key={item.id} item={item} />
          ))}
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
};
