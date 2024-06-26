import { useEffect, useState } from 'react';
import { getProducts } from '../../api/api';
import Card from './Card';
import './BestSection.css';

function BestList({itemList}) {

    return (
        <div className="best-list">
            {itemList.map((item) => 
                <div key={item.id} className="best-card"><Card item={item} /></div>
            )}
        </div>
    )
}

function BestSection() {
    const [items, setItems] = useState([])

    async function handleLoad(query) {
        const response = await getProducts(query);
        const { list } = response;
        setItems(list);
    }

    useEffect(() => {
        handleLoad({ page: 1, pageSize: 4, orderBy: "favorite"})
    }, []);
    
    return (
        <section>
            <div className='section-header'><h3>베스트 상품</h3></div>
            <BestList itemList={items}/>
        </section>
    );
}

export default BestSection;