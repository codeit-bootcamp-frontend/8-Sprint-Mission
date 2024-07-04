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

function BestSection({ getPageSize }) {
    const [items, setItems] = useState([])
    const [pageSize, setPageSize] = useState(getPageSize(4, 2, 1));
    const [isLoading, error, getProductsAsync] = useAsync(getProducts);

    const handleLoad = useCallback (async (query) => {
        const result = await getProductsAsync(query)
        if(!result) return;
        const { list } = result;
        setItems(list);
    }, [getProductsAsync]);

    useEffect(() => {
        setPageSize(getPageSize(4, 2, 1));
        handleLoad({ page: 1, pageSize, orderBy: "favorite"})
    }, [handleLoad, pageSize, getPageSize]);
    
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