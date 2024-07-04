import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import Card from "./Card";
import './ItemsSection.css';
import { ReactComponent as DropdownArrow} from '../../assets/dropdown_arrow.svg';
import { ReactComponent as SearchMark } from '../../assets/ic_search.svg';
import { ReactComponent as SortIcon } from '../../assets/ic_sort.svg';
import { Link } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import LoadingImage from "../LoadingImage";

const ORDER_KOR = {
    "recent": "최신순",
    "favorite": "좋아요순",
}

function ItemsSectionHeader ({ orderBy, orderSetter, keywordSetter }) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            <ul className={dropdownClassName}>
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

function ItemsSectionHeaderMobile ({ orderSetter, keywordSetter }) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownHandler = () => setIsDropdownOpen(prev => !prev);
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        keywordSetter(e.target['search'].value);
    }

    const dropdownClassName = `orderBy-dropdown ${isDropdownOpen ? '' : "hidden"}`;

    return (
        <div className="section-header">
            <div className="section-header-mobile-upper">
                <h3>판매 중인 상품</h3>
                <Link to="/additem"><button className="add-item-button">상품 등록하기</button></Link>
            </div>
            <div className="section-header-mobile-down">
                <form className="search-container" onSubmit={searchSubmitHandler}>
                    <div className="search-icon"><SearchMark /></div>
                    <input className="search-input" name="search" placeholder="검색할 상품을 입력해주세요" />
                </form>
                <button className="sort-dropdown" onClick={dropdownHandler}>
                    <SortIcon />
                </button>
            </div>
            <ul className={dropdownClassName}>
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

function ItemsSection({ getPageSize }) {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(getPageSize(10, 6, 4));
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
        handleLoad({ page: i, pageSize, orderBy, keyword });
    }
    const orderClickHandler = (order) => {
        setOrderBy(order);
    };
    const searchHandler = (str) => {
        setKeyword(str);
    }

    useEffect(() => {
        setPageSize(getPageSize(10, 6, 4));
        handleLoad({ page: 1, pageSize, orderBy, keyword })
    }, [orderBy, keyword, handleLoad, pageSize, getPageSize]);

    return (
        <section className="items-section">
            {(pageSize === 4)
                ? <ItemsSectionHeaderMobile orderSetter={orderClickHandler} keywordSetter={searchHandler} />
                : <ItemsSectionHeader orderBy={orderBy} orderSetter={orderClickHandler} keywordSetter={searchHandler} />}
            {isLoading && <LoadingImage />}
            {error?.message && <span>{error.message}</span>}
            <ItemsSectionList items={items}/>
            <Pages page={page} pageSize={pageSize} total={total} pageSetter={pageClickHandler} />
        </section>
    )
}

export default ItemsSection;