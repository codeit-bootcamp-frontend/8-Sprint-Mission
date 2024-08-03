import { useCallback, useState } from "react";

function useAsync(asyncFunction: (...args: any[]) => any) {

    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<any>(null);

    const wrappedFunction = useCallback (async (...args: any[]) => {
        try {
            setIsPending(true);
            setError(null);
            return await asyncFunction(...args);
        } catch(error) {
            setError(error);
            return;
        } finally {
            setIsPending(false);
        }
    }, [asyncFunction]);
    
    return { isPending, error, wrappedFunction };
}

export default useAsync;