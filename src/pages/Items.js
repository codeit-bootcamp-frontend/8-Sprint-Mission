import ProductList from '../components/ProductList';
import BestProductList from '../components/BestProductList';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { getProducts } from '../api';
import './Items.css';
import { Link, useNavigate } from 'react-router-dom';

function Items() {

    const [order, setOrder] = useState('recent');
    const [item, setItem] = useState([]);

    const SortedItems = item.sort((a, b) => b[order] - a[order]);

    const bestItems = item.sort((a, b) => b['favorite'] - a['favorite']);

    const handleFavorite = () => setOrder('favorite');

    const handleRecent = () => setOrder('recent');

    const navigate = useNavigate();

    const handleLoad = async (orderQuery) => {
        const { list } = await getProducts(orderQuery);
        setItem(list);
    }

    useEffect(() => {
        handleLoad(order);
    }, [order])

    const handleAddItemClick = () => {
        navigate('/additem');
    }

    return (
        <div>
            <h1>베스트 상품</h1>
            <BestProductList items={bestItems}></BestProductList>

            <div className="saleProductTitle">
                <h1>판매 중인 상품</h1>
                <div className="titleRight">
                    <input id="search" name="search" type="search" placeholder="검색할 상품을 입력해주세요" className="productSearch"></input>
                    <Button onClick={handleAddItemClick}>상품 등록하기</Button>

                    <select>
                        <option onClick={handleRecent} value="Recent">최신순</option>
                        <option onClick={handleFavorite} value="favorite">좋아요순</option>
                    </select>
                </div>
            </div>

            <ProductList items={SortedItems}></ProductList>

        </div>
    )

}

export default Items;