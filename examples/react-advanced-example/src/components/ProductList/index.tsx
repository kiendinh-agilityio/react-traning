import { useState } from 'react';
import { useToast } from '@/hooks';
import { ToastContainer } from '@/components';

interface Car {
  id: number;
  name: string;
  brand: string;
}

const ProductList = () => {
  const { toasts, addToast, removeToast } = useToast();
  const [cars, setCars] = useState<Car[]>([
    { id: 1, name: 'Camry', brand: 'Toyota' },
    { id: 2, name: 'Civic', brand: 'Honda' },
    { id: 3, name: 'Mustang', brand: 'Ford' },
    { id: 4, name: 'X5', brand: 'BMW' },
    { id: 5, name: 'C-Class', brand: 'Mercedes-Benz' },
  ]);

  const handleDelete = (id: number) => {
    setCars((prev) => prev.filter((car) => car.id !== id));
    addToast('Delete successfully!');
  };

  const handleDeleteClick = (id: number) => handleDelete(id);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Car List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cars.map((car) => (
          <li
            key={car.id}
            style={{
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {car.name} - {car.brand}
            <button
              onClick={handleDeleteClick.bind(null, car.id)}
              style={{
                backgroundColor: '#ff4d4f',
                color: '#fff',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
};

export default ProductList;
