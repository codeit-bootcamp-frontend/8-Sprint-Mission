import { useCallback, useEffect, useState } from 'react';
import { getProducts } from '../../api/api';
import Card from './Card';
import './BestSection.css';
import useAsync from '../../hooks/useAsync';
import LoadingErrorHandler from '../LoadingErrorHandler';
import ProductById from '../../DTO/productById';

function BestList({itemList}: {itemList: ProductById[]}) {

    return (
        <div className="best-list">
            {itemList.map((item) => 
                <div key={item.id} className="best-card"><Card item={item} /></div>
            )}
        </div>
    )
}

function BestSection({ getPageSize }: { getPageSize: (desktop: number, tablet: number, mobile: number) => number}) {
    const [items, setItems] = useState<ProductById[]>([])
    const [pageSize, setPageSize] = useState(getPageSize(4, 2, 1));
    const { isPending, error, wrappedFunction } = useAsync(getProducts);

    const handleLoad = useCallback (async (query: { page: number, pageSize: number, orderBy: string }) => {
        const result = await wrappedFunction(query)
        if(!result) return;
        const { list } = result;
        setItems(list);
    }, [wrappedFunction]);

    useEffect(() => {
        setPageSize(getPageSize(4, 2, 1));
        handleLoad({ page: 1, pageSize, orderBy: "favorite"})
    }, [handleLoad, pageSize, getPageSize]);
    
    return (
        <section>
            <div className='section-header'><h3>베스트 상품</h3></div>
            {(isPending || error)
                ? <LoadingErrorHandler isLoading={isPending} error={error} />
                : <BestList itemList={items}/>
            }
        </section>
    );
}

export default BestSection;