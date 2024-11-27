import { useState, useCallback } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import './App.css';

import {
  MarkdownEditor,
  ThemeProvider,
  ThemedComponent,
  LanguageSwitcher,
  LanguageProvider,
  Fallback,
  BuggyCounter,
  CarItem,
  Cart,
} from '@/components';

interface Car {
  id: number;
  name: string;
  price: number;
  inCart: boolean;
}

const App = () => {
  const [key, setKey] = useState(0);

  const [cars, setCars] = useState<Car[]>([
    { id: 1, name: 'Toyota Camry', price: 24000, inCart: false },
    { id: 2, name: 'Honda Accord', price: 26000, inCart: false },
    { id: 3, name: 'Tesla Model 3', price: 35000, inCart: false },
    { id: 4, name: 'Ford Mustang', price: 27000, inCart: false },
    { id: 5, name: 'Chevrolet Camaro', price: 30000, inCart: false },
  ]);

  const toggleCart = useCallback((id: number) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id ? { ...car, inCart: !car.inCart } : car
      )
    );
  }, []);

  const cartItems = cars.filter((car) => car.inCart);

  const handleResetKey = () => setKey((prev) => prev + 1);

  return (
    <>
      <h1>React Advanced Examples</h1>
      <MarkdownEditor />

      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>

      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>

      <ErrorBoundary FallbackComponent={Fallback} onReset={handleResetKey}>
        <BuggyCounter key={key} />
      </ErrorBoundary>

      <div>
        <h1>Car Shop</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {cars.map((car) => (
            <CarItem key={car.id} car={car} onToggleCart={toggleCart} />
          ))}
        </div>
        <Cart cartItems={cartItems} />
      </div>
    </>
  );
};

export default App;
