import './Items.css';
import BestSection from './BestSection';
import ItemsSection from './ItemsSection';

function Items() {
    return (
        <main>
            <div className='container'>
                <BestSection />
                <ItemsSection />
            </div>
        </main>
    );
}

export default Items;