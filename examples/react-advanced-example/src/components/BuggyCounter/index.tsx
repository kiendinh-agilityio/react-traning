import { useState } from 'react';

const BuggyCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleIncreaseCount = () => {
    if (count >= 3) {
      setError('Count exceeded the limit!');
    } else {
      setCount(count + 1);
      setError(null);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleIncreaseCount}>Increase</button>
    </div>
  );
};

export default BuggyCounter;
