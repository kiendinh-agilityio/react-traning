import { useState, useEffect } from 'react';

export const useTimer = (initialValue: number) => {
  const [time, setTime] = useState(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
};
