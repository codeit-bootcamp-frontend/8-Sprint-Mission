import './Main.css';
import BestSection from './BestSection';
import ItemsSection from './ItemsSection';

function Main() {
    return (
        <main>
            <div className='container'>
                <BestSection />
                <ItemsSection />
            </div>
        </main>
    );
}

export default Main;