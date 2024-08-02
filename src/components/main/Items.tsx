import './Items.css';
import BestSection from './BestSection';
import ItemsSection from './ItemsSection';
import useMediaWidth from '../../hooks/useMediaWidth';

function Items() {
    
    // const getMediaWidth = () => {
    //     if (window.innerWidth <= 767) return "mobile";
    //     else if (window.innerWidth <= 1199) return "tablet";
    //     else return "desktop";
    // }

    // const [mediaWidth, setMediaWidth] = useState(getMediaWidth());

    // const handleWidthChange = () => {
    //     setMediaWidth(getMediaWidth());
    // }

    // window.addEventListener("resize", handleWidthChange);

    const mediaWidth = useMediaWidth();
    
    const getPageSize = (desktop: number, tablet: number, mobile: number) => {
        if (mediaWidth === "desktop") return desktop;
        else if (mediaWidth === "tablet") return tablet;
        else if (mediaWidth === "mobile") return mobile;
        return 0;
    }

    return (
        <main className="items-main">
            <div className="container">
                <BestSection getPageSize={getPageSize} />
                <ItemsSection getPageSize={getPageSize} />
            </div>
        </main>
    );
}

export default Items;