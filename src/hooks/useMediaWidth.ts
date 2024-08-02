import { useEffect, useState } from "react";

function useMediaWidth() {
    const getMediaWidth = () => {
        if (window.innerWidth <= 767) return "mobile";
        else if (window.innerWidth <= 1199) return "tablet";
        else return "desktop";
    }

    const [mediaWidth, setMediaWidth] = useState(getMediaWidth());

    const handleWidthChange = () => {
        setMediaWidth(getMediaWidth());
    }

    useEffect(() => {
        window.addEventListener("resize", handleWidthChange);
        
        return (() => {
            window.removeEventListener("resize", handleWidthChange);
        });
    }, [handleWidthChange]);

    return mediaWidth;
}

export default useMediaWidth;