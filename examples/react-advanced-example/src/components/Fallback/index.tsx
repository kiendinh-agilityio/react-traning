interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div role='alert'>
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Reset Counter</button>
  </div>
);

export default FallbackComponent;
