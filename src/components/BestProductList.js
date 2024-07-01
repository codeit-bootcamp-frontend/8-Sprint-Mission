import { useEffect, useState } from 'react';
import { getProducts } from '../api';
import './BestProductList.css';

function BestProductListItem({ item }) {


    return (
        <div className='BestProductListItem'>
            <img className="BestProductListItem-img" src={item.images} alt={item.name}></img>
            <p> {item.name}</p>
            <h3>{item.price}</h3>
            <p>{item.favoriteCount}</p>
        </div>
    );

}

function BestProductList() {


    const [items, setItems] = useState([]);




    const handleLoad = async () => {
        const { list } = await getProducts({ order: 'favorite', page: 1, pageSize: 10 });
        setItems(list);
    }


    useEffect(() => {
        handleLoad();
    }, []);

    const displayedItems = items.slice(0, 4);
    return (

        <div className='BestProductList'>
            {displayedItems.map((item) => {
                return (
                    <BestProductListItem key={item.id} item={item} />

                );
            })}
        </div>
    )
}

export default BestProductList;