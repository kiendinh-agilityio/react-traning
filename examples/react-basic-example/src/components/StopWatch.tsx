import { useRef, useState } from "react";

export const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div>
      <p>Time: {seconds} seconds</p>
      <button className="btn btn-primary" onClick={startTimer}>
        Start
      </button>
      <button className="btn btn-secondary" onClick={stopTimer}>
        Stop
      </button>
    </div>
  );
};
