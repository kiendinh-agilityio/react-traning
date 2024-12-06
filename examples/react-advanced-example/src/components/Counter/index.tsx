import { useCounterStore } from '@/stores';

import { Flex, Button } from '@radix-ui/themes';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <Flex gap='3' justify='center'>
        <Button variant='classic' onClick={increment}>
          Increment
        </Button>
        <Button color='cyan' onClick={decrement}>
          Decrement
        </Button>
        <Button color='crimson' onClick={reset}>
          Reset
        </Button>
      </Flex>
    </div>
  );
};

export default Counter;
