import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  Theme,
  Card,
  Box,
  Flex,
  Avatar,
  Text,
  Heading,
} from '@radix-ui/themes';

import { useState, useCallback, Profiler, useRef } from 'react';

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
  StudentList,
  Input,
  Select,
  TimerDisplay,
  ProductList,
  Button,
  TableStudent,
  Counter,
  Subscription,
  Tab,
} from '@/components';

const queryClient = new QueryClient();

interface Car {
  id: number;
  name: string;
  price: number;
  inCart: boolean;
}

const onRenderCallback: React.ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration
) => console.log(`Profiler ${id} - ${phase}: Rendered in ${actualDuration}ms`);

const App = () => {
  // State manages input value
  const [value, setValue] = useState<string>('');

  // State select value
  const [selectedValue, setSelectedValue] = useState('apple');

  // Ref to access input value
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleSubmit = () => {
    if (inputRef.current) {
      alert(`Uncontrolled Input Value: ${inputRef.current.value}`);
    }
  };

  // Ref to access select value
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleSelectSubmit = () => {
    if (selectRef.current) {
      alert(`You selected: ${selectRef.current.value}`);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedValue(event.target.value);

  return (
    <Theme>
      <Heading as='h1'>React Advanced Examples</Heading>

      <Tab />

      <Subscription />

      <Counter />

      <Box maxWidth='240px'>
        <Card>
          <Flex gap='3' align='center'>
            <Avatar
              size='3'
              src='https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop'
              radius='full'
              fallback='T'
            />
            <Box>
              <Text as='div' size='2' weight='bold'>
                Teodros Girmay
              </Text>
              <Text as='div' size='2' color='gray'>
                Engineering
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>

      <QueryClientProvider client={queryClient}>
        <TableStudent />
      </QueryClientProvider>

      <TimerDisplay />

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

      <h1>Student List</h1>
      <Profiler id='StudentListProfiler' onRender={onRenderCallback}>
        <StudentList />
      </Profiler>

      <div>
        <h3>Controlled Input</h3>
        <Input
          name='controlled-input'
          type='text'
          value={value}
          placeholder='Enter value'
          onChange={setValue}
        />
        <p>Current Value: {value}</p>
      </div>

      <div>
        <h3>Uncontrolled Input</h3>
        <Input
          name='uncontrolled-input'
          type='text'
          defaultValue='Abcd'
          placeholder='Enter value'
          ref={inputRef}
        />
        <Button onClick={handleSubmit} label='Submit' />
      </div>

      <div>
        <h3>Controlled Select</h3>
        <Select
          options={[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'cherry', label: 'Cherry' },
          ]}
          value={selectedValue}
          onChange={handleSelectChange}
        />
        <p>You selected: {selectedValue}</p>
      </div>

      <div>
        <h3>Uncontrolled Select</h3>
        <Select
          options={[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'cherry', label: 'Cherry' },
          ]}
          defaultValue='banana'
          ref={selectRef}
        />
        <button className='btn-primary' onClick={handleSelectSubmit}>
          Submit
        </button>

        <ProductList />
      </div>
    </Theme>
  );
};

export default App;
