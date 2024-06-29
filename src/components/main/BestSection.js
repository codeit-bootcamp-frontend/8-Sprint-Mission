import { useCallback, useEffect, useState } from 'react';
import { getProducts } from '../../api/api';
import Card from './Card';
import './BestSection.css';
import useAsync from '../../hooks/useAsync';
import LoadingImage from '../LoadingImage';

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
    const [isLoading, error, getProductsAsync] = useAsync(getProducts);

    const handleLoad = useCallback (async (query) => {
        // const response = await getProducts(query);
        // const { list } = response;
        // setItems(list);
        const result = await getProductsAsync(query)
        if(!result) return;
        const { list } = result;
        setItems(list);
    }, [getProductsAsync]);

    useEffect(() => {
        handleLoad({ page: 1, pageSize: 4, orderBy: "favorite"})
    }, [handleLoad]);
    
    return (
        <section>
            <div className='section-header'><h3>베스트 상품</h3></div>
            {isLoading && <LoadingImage />}
            {error?.message && <span>{error.message}</span>}
            <BestList itemList={items}/>
        </section>
    );
}

export default BestSection;