import ProductList from '../components/ProductList/ProductList';
import BestProductList from '../components/BestProductList/BestProductList';
import Button from '../components/Button/Button';
import { useEffect, useState } from 'react';
import { getProducts } from '../api';
import './Items.css';
import { Link, useNavigate } from 'react-router-dom';
import PageNation from '../components/pageNation/PageNation';

function Items() {
    const navigate = useNavigate();

    const [order, setOrder] = useState('recent');
    const [item, setItem] = useState([]);
    const [totalCount, setTotalCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        handleLoadMore({ order, page: currentPage, pageSize });
    }, [order, currentPage])

    useEffect(() => {
        setTotalPages(Math.ceil(totalCount / pageSize));
        //Math.ceil(전체 컨텐츠 개수 / 한 페이지에 보여주고자 하는 컨텐츠의 개수)
    }, [item])

    const SortedItems = item.sort((a, b) => b[order] - a[order]);

    const handleFavorite = () => setOrder('favorite');
    const handleRecent = () => setOrder('recent');

    const handleLoadMore = async () => {
        await handleLoad({ order, page: currentPage, pageSize });
    }

    const handleLoad = async (orderQuery) => {
        const { list, totalCount } = await getProducts(orderQuery);
        setItem(list);
        setTotalCount(totalCount);
    }


    const handleAddItemClick = () => {
        navigate('/additem');
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
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

            <PageNation totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}></PageNation>
        </div>
    )

}

export default Items;