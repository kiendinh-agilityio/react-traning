import { useState } from "react";

export const AdvancedCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="advanced-counter">
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-secondary" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};
