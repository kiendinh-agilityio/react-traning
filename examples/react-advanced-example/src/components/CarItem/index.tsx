import { memo } from 'react';

interface Car {
  id: number;
  name: string;
  price: number;
  inCart: boolean;
}

interface CarItemProps {
  car: Car;
  onToggleCart: (id: number) => void;
}

const CarItem = memo(({ car, onToggleCart }: CarItemProps) => {
  const handleButtonCart = () => onToggleCart(car.id);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{car.name}</h3>
      <p>Price: ${car.price}</p>
      <button onClick={handleButtonCart}>
        {car.inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
});

export default CarItem;
