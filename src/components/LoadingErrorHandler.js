import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";

function LoadingErrorHandler({ isLoading = false, error = null }) {

    if(isLoading) {
        return <LoadingScreen />
    }

    else if(error) {
        return <ErrorScreen error={error} />
    }

    return;
}

export default LoadingErrorHandler