import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";

function LoadingErrorHandler({ isLoading = false, error = null }: { isLoading: boolean, error: any }) {

    if(isLoading) {
        return <LoadingScreen />
    }

    else if(error) {
        return <ErrorScreen error={error} />
    }

    return <></>
}

export default LoadingErrorHandler