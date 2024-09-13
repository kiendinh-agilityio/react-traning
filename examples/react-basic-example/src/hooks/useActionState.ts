import { useState, useCallback } from "react";

interface ActionState<T> {
  isLoading: boolean;
  isSuccess: boolean;
  isError: Error | null;
  data: T | null;
  executeAction: () => Promise<void>;
}

const useActionState = <T>(
  action: () => Promise<T>,
  initialState: Partial<Omit<ActionState<T>, "executeAction">> = {
    isLoading: false,
    isSuccess: false,
    isError: null,
    data: null,
  },
): ActionState<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(
    initialState.isLoading ?? false,
  );
  const [isSuccess, setIsSuccess] = useState<boolean>(
    initialState.isSuccess ?? false,
  );
  const [isError, setIsError] = useState<Error | null>(
    initialState.isError ?? null,
  );
  const [data, setData] = useState<T | null>(initialState.data ?? null);

  const executeAction = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      setIsSuccess(false);
      setIsError(null);

      const result = await action();
      setData(result);

      setIsSuccess(true);
    } catch (error) {
      setIsError(error instanceof Error ? error : new Error("Unknown error"));
    } finally {
      setIsLoading(false);
    }
  }, [action]);

  return { isLoading, isSuccess, isError, data, executeAction };
};

export default useActionState;
