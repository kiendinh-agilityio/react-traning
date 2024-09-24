import { useState, useCallback } from "react";

export const Increment = () => {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  // Memoize the increment function, typed with useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + step);
  }, [step]);

  return (
    <div>
      <p>Count: {count}</p>
      <input
        className="input"
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button className="btn btn-primary" onClick={increment}>
        Increment {step}
      </button>
    </div>
  );
};
