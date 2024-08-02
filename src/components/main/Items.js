import './Items.css';
import BestSection from './BestSection';
import ItemsSection from './ItemsSection';
import { useState } from 'react';

function Items() {
    
    const getMediaWidth = () => {
        if (window.innerWidth <= 767) return "mobile";
        else if (window.innerWidth <= 1199) return "tablet";
        else return "desktop";
    }

    const [mediaWidth, setMediaWidth] = useState(getMediaWidth());


    const handleWidthChange = () => {
        setMediaWidth(getMediaWidth());
    }

    const getPageSize = (desktop, tablet, mobile) => {
        if (mediaWidth === "desktop") return desktop;
        else if (mediaWidth === "tablet") return tablet;
        else if (mediaWidth === "mobile") return mobile;
    }

    window.addEventListener("resize", handleWidthChange);
    
    return (
        <main>
            <div className="container">
                <BestSection getPageSize={getPageSize} />
                <ItemsSection getPageSize={getPageSize} />
            </div>
        </main>
    );
}

export default Items;