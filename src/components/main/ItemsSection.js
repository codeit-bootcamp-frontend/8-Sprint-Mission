import { useEffect, useState } from "react";
import { getProducts } from "../../api";
import Card from "./Card";
import './ItemsSection.css';
import { ReactComponent as DropdownArrow} from '../../assets/dropdown_arrow.svg';
import { ReactComponent as SearchMark } from '../../assets/ic_search.svg';

function ItemsSectionHeader({ orderBy, orderSetter, keywordSetter }) {

    const dropdown = document.querySelector(".orderBy-dropdown");

    const dropdownHandler = () => {dropdown.classList.toggle("hidden");}
    const addItemOnClickHandler = () => {window.location.href = "/additem";}
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        keywordSetter(e.target['search'].value);
    }

    return (
        <div className="section-header">
            <h3>판매 중인 상품</h3>
            <form className="search-container" onSubmit={searchSubmitHandler}>
                <div className="search-icon"><SearchMark /></div>
                <input className="search-input" name="search" placeholder="검색할 상품을 입력해주세요" />
            </form>
            <button className="add-item-button" onClick={addItemOnClickHandler}>상품 등록하기</button>
            <button className="sort-dropdown" onClick={dropdownHandler}>
                {(orderBy==='recent') && <span className="dropdown-text">최신순</span>}
                {(orderBy==='favorite') && <span className="dropdown-text">좋아요순</span>}
                <DropdownArrow />
            </button>
            <div className="orderBy-dropdown hidden">
                <button className="dropdown-button orderBy-recent" disabled={orderBy==="recent"} onClick={() => {orderSetter("recent")}}>
                    최신순
                </button>
                <button className="dropdown-button orderBy-favorite" disabled={orderBy==="favorite"} onClick={() => {orderSetter("favorite")}}>
                    좋아요순
                </button>
            </div>
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

    async function handleLoad(query) {
        const response = await getProducts(query);
        const { list, totalCount } = response;
        setItems(list);
        setPage(query.page);
        setTotal(totalCount);
    }

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
    }, [orderBy, keyword]);

    return (
        <section className="items-section">
            <ItemsSectionHeader orderBy={orderBy} orderSetter={orderClickHandler} keywordSetter={searchHandler}/>
            <ItemsSectionList items={items}/>
            <Pages page={page} pageSize={pageSize} total={total} pageSetter={pageClickHandler} />
        </section>
    )
}

export default ItemsSection;