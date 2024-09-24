import { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isCounting) {
      intervalId = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isCounting]);

  return (
    <>
      <h4>{count}</h4>
      <button
        className="btn"
        onClick={() => setIsCounting(true)}
        disabled={isCounting}
      >
        Start Counting
      </button>
      <button onClick={() => setIsCounting(false)} disabled={!isCounting}>
        Pause Counting
      </button>
    </>
  );
};
