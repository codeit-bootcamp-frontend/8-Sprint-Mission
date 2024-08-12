import { useState } from "react";

export default function useAsync(asyncFunction: (...args: any[]) => any) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);

  const wrappedAsyncFunction = async (...args: any[]) => {
    try {
      setIsPending(true);
      setError(null);
      return await asyncFunction(...args);
    } catch(e: any) {
      setError(e);
      return;
    } finally {
      setIsPending(false);
    }
  }

  return { isPending, error, wrappedAsyncFunction };
}