import { memo } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  inCart: boolean;
}

interface CartProps {
  cartItems: CartItem[];
}

const Cart = memo(({ cartItems }: CartProps) => (
  <div style={{ border: '1px solid #000', padding: '10px', margin: '10px' }}>
    <h2>Cart</h2>
    {cartItems.length === 0 ? (
      <p>No items in the cart.</p>
    ) : (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    )}
  </div>
));

export default Cart;
