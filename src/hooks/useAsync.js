import { useCallback, useState } from "react";

function useAsync(asyncFunction) {

    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const wrappedFunction = useCallback (async (...args) => {
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
    
    return [isPending, error, wrappedFunction];
}

export default useAsync;