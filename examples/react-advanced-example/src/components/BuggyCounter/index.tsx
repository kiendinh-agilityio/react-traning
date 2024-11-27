import { useState } from 'react';

const BuggyCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  if (count > 3) {
    throw new Error('Count exceeded the limit!');
  }

  const handleIncreaseCount = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncreaseCount}>Increase</button>
    </div>
  );
};

export default BuggyCounter;
