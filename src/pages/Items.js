import ProductList from '../components/ProductList';
import BestProductList from '../components/BestProductList';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { getProducts } from '../api';
import './Items.css';
import { Link, useNavigate } from 'react-router-dom';

function Items() {
    const navigate = useNavigate();

    const [order, setOrder] = useState('recent');
    const [item, setItem] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(2);

    useEffect(() => {
        handleLoadMore({ order, page: currentPage, pageSize });
    }, [order])

    useEffect(() => {

        setTotalPages(Math.ceil(item.length / pageSize));
        //Math.ceil(전체 컨텐츠 개수 / 한 페이지에 보여주고자 하는 컨텐츠의 개수)
        console.log(totalPages);

    }, [item])



    const SortedItems = item.sort((a, b) => b[order] - a[order]);

    const handleFavorite = () => setOrder('favorite');

    const handleRecent = () => setOrder('recent');

    const handleLoad = async (orderQuery) => {
        const { list } = await getProducts(orderQuery);
        setItem(list);

    }

    const handleLoadMore = async () => {
        await handleLoad({ order, page: currentPage, pageSize });
    }

    const handleAddItemClick = () => {
        navigate('/additem');
    }

    return (
        <div>
            <h1>베스트 상품</h1>
            <BestProductList></BestProductList>

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
            <div className="pagination">
                <button disabled={currentPage === 1}>{'<'}</button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
                <button disabled={currentPage === totalPages}>{'>'}</button>
            </div>
        </div>
    )

}

export default Items;