import { useTimer } from '@/hooks';

const TimerDisplay: React.FC = () => {
  const time = useTimer(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Timer</h1>
      <p>
        Elapsed time: <strong>{time} seconds</strong>
      </p>
    </div>
  );
};

export default TimerDisplay;
