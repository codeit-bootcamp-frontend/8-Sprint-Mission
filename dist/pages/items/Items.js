"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const BestItem_1 = __importDefault(require("../../components/BestItem/BestItem"));
const ItemsOnSale_1 = __importDefault(require("../../components/ItemsOnSale/ItemsOnSale"));
const NavBar_1 = __importDefault(require("../../components/NavBar/NavBar"));
require("../items/Items.css");
const getApi_1 = require("../../components/getApi");
const PaginationBar_1 = __importDefault(require("../../components/PaginationBar/PaginationBar"));
function Items() {
    const [pageWidth, setPageWidth] = (0, react_1.useState)(window.innerWidth);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [Bestitems, setBestItems] = (0, react_1.useState)({ list: [] });
    const [items, setItems] = (0, react_1.useState)({ list: [] });
    const [totalCount, setTotalCount] = (0, react_1.useState)(0);
    const [orderBy, setOrderBy] = (0, react_1.useState)("recent");
    const [pageBy, setPageBy] = (0, react_1.useState)(1);
    const [itemsSize, setItemsSize] = (0, react_1.useState)(0);
    // 베스트 상품 가져오기
    const bestfetchData = (upperSize) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, getApi_1.getApi)(upperSize);
            setBestItems(result);
        }
        catch (error) {
            console.error(error);
        }
    });
    // 판매 중인 상품 가져오기
    const itemfetchData = (_a) => __awaiter(this, [_a], void 0, function* ({ order, lowerSize = 10, page }) {
        try {
            const result = yield (0, getApi_1.getApiOrderBy)({ order, lowerSize, page });
            setItems(result);
            setTotalCount(result.totalCount);
        }
        catch (error) {
            console.error(error);
        }
    });
    // 웹 페이지 가로 길이에 따라 받아올 데이터 개수 지정 후 가져오기
    const fetchDataOnResize = (0, react_1.useCallback)((order = orderBy, page = pageBy) => {
        const fetchData = (_a) => __awaiter(this, [_a], void 0, function* ({ upperSize, lowerSize, order, page }) {
            try {
                yield Promise.all([bestfetchData(upperSize), itemfetchData({ order, lowerSize, page })]);
            }
            catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false);
            }
        });
        if (pageWidth < 768) {
            const upperSize = 1;
            const lowerSize = 4;
            setItemsSize(lowerSize);
            fetchData({ upperSize, lowerSize, order, page });
        }
        else if (pageWidth < 1199) {
            const upperSize = 2;
            const lowerSize = 6;
            setItemsSize(lowerSize);
            fetchData({ upperSize, lowerSize, order, page });
        }
        else {
            const upperSize = 4;
            const lowerSize = 10;
            setItemsSize(lowerSize);
            fetchData({ upperSize, lowerSize, order, page });
        }
    }, [pageWidth, orderBy, pageBy]);
    // 드롭 다운 동작 시 드롭 다운의 order 값에 따라 fetch 동작
    const handleOrderChange = (order) => __awaiter(this, void 0, void 0, function* () {
        try {
            setOrderBy(order);
            fetchDataOnResize(order, pageBy);
        }
        catch (error) {
            console.error(error);
        }
        finally {
        }
    });
    // 페이지네이션 동작 시 지정한 page 버튼 값에 따라 fetch 동작
    const handlePaginationChange = (page) => __awaiter(this, void 0, void 0, function* () {
        try {
            setPageBy(page);
            fetchDataOnResize(orderBy, page);
        }
        catch (error) {
            console.error(error);
        }
        finally {
        }
    });
    // 리사이징 동작 시 디바운싱 이용하여 페이지의 width 값을 state에 저장
    (0, react_1.useEffect)(() => {
        let timer = undefined;
        const getResize = () => {
            let delay = 300;
            clearTimeout(timer);
            timer = window.setTimeout(() => {
                setPageWidth(window.innerWidth);
            }, delay);
        };
        window.addEventListener("resize", getResize);
        return () => {
            window.removeEventListener("resize", getResize);
        };
    }, []);
    // 첫 렌더링 시 fetch 함수 동작
    (0, react_1.useEffect)(() => {
        fetchDataOnResize();
    }, [fetchDataOnResize]);
    // 로딩 시 출력 화면
    if (loading) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.default, {}), (0, jsx_runtime_1.jsxs)("main", { className: "main-box", children: [(0, jsx_runtime_1.jsx)(BestItem_1.default, { items: Bestitems }), (0, jsx_runtime_1.jsx)(ItemsOnSale_1.default, { items: items, orderBy: orderBy, handleOrderChange: handleOrderChange })] }), (0, jsx_runtime_1.jsx)("footer", { className: "footer-box", children: (0, jsx_runtime_1.jsx)(PaginationBar_1.default, { items: items, totalCount: totalCount, pageBy: pageBy, itemsSize: itemsSize, handlePaginationChange: handlePaginationChange }) })] }));
}
exports.default = Items;
