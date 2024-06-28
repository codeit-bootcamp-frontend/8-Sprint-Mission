import { useCallback, useEffect, useRef, useState } from "react";
import { getProducts } from "../../api/api";
import Card from "./Card";
import './ItemsSection.css';
import { ReactComponent as DropdownArrow} from '../../assets/dropdown_arrow.svg';
import { ReactComponent as SearchMark } from '../../assets/ic_search.svg';
import { Link } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import LoadingImage from "../LoadingImage";

const ORDER_KOR = {
    "recent": "최신순",
    "favorite": "좋아요순",
}

function ItemsSectionHeader({ orderBy, orderSetter, keywordSetter }) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdown = useRef();

    const dropdownHandler = () => setIsDropdownOpen(prev => !prev);
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        keywordSetter(e.target['search'].value);
    }

    const dropdownClassName = `orderBy-dropdown ${isDropdownOpen ? '' : "hidden"}`;

    return (
        <div className="section-header">
            <h3>판매 중인 상품</h3>
            <form className="search-container" onSubmit={searchSubmitHandler}>
                <div className="search-icon"><SearchMark /></div>
                <input className="search-input" name="search" placeholder="검색할 상품을 입력해주세요" />
            </form>
            <Link to="/additem"><button className="add-item-button">상품 등록하기</button></Link>
            <button className="sort-dropdown" onClick={dropdownHandler}>
            <span className="dropdown-text">{ORDER_KOR[orderBy]}</span>
                <DropdownArrow />
            </button>
            <ul className={dropdownClassName} ref={dropdown}>
                <li className="dropdown-button orderBy-recent" onClick={() => {orderSetter("recent")}}>
                    최신순
                </li>
                <li className="dropdown-button orderBy-favorite" onClick={() => {orderSetter("favorite")}}>
                    좋아요순
                </li>
            </ul>
        </div>
    )
}

function ItemsSectionList({items}) {

    return (
        <div className="items-list">
            {items.map(
                (item) => <div key={item.id} className="items-card"><Card item={item} /></div>
            )}
        </div>
    )
}

function Pages({ page, pageSize, total, pageSetter }) {
    
    const pages = [];
    for (let i = 1; i <= (total / pageSize) + 1; i++) pages.push(i);
    const lastPage = pages.length;

    const arrowClickHandler = (e) => {
        if (e.target.classList.contains("prev")) {
            pageSetter(page-1);
        }
        else if (e.target.classList.contains("next")) {
            pageSetter(page+1);
        }
    }

    return (
        <div className="pages">
            <button className="page-button prev" disabled={page===1} onClick={arrowClickHandler}>{'<'}</button>
            {pages.map(
                (i) => {return (i===page)
                    ? <button key={i} className="page-button active" disabled={page===i} onClick={() => {pageSetter(i)}}>{i}</button>
                    : <button key={i} className="page-button" disabled={page===i} onClick={() => {pageSetter(i)}}>{i}</button>}
            )}
            <button className="page-button next" disabled={page===lastPage} onClick={arrowClickHandler}>{'>'}</button>
        </div>
    );
}

function ItemsSection() {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [orderBy, setOrderBy] = useState("recent");
    const [total, setTotal] = useState(0);
    const [keyword, setKeyword] = useState('');
    const [isLoading, error, getProductsAsync] = useAsync(getProducts);

    const handleLoad = useCallback (async (query) => {
        const result = await getProductsAsync(query);
        if(!result) return;
        
        const { list, totalCount } = result;
        setItems(list);
        setPage(query.page);
        setTotal(totalCount);
    }, [getProductsAsync])

    const pageClickHandler = (i) => {
        handleLoad({ page: i, pageSize: 10, orderBy, keyword });
    }
    const orderClickHandler = (order) => {
        setOrderBy(order);
    };
    const searchHandler = (str) => {
        setKeyword(str);
    }

    useEffect(() => {
        handleLoad({ page: 1, pageSize: 10, orderBy, keyword })
    }, [orderBy, keyword, handleLoad]);

    return (
        <section className="items-section">
            <ItemsSectionHeader orderBy={orderBy} orderSetter={orderClickHandler} keywordSetter={searchHandler}/>
            {isLoading && <LoadingImage />}
            {error?.message && <span>{error.message}</span>}
            <ItemsSectionList items={items}/>
            <Pages page={page} pageSize={pageSize} total={total} pageSetter={pageClickHandler} />
        </section>
    )
}

export default ItemsSection;