"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../ItemsOnSale/ItemsOnSale.css");
const ic_favorite_png_1 = __importDefault(require("../../assets/images/icon/btn_icon/ic_favorite.png"));
const ic_search_png_1 = __importDefault(require("../../assets/images/icon/btn_icon/ic_search.png"));
const DropDown_1 = __importDefault(require("../DropDown/DropDown"));
const react_router_dom_1 = require("react-router-dom");
function BestItems({ item }) {
    const { favoriteCount, images, price, name, id } = item;
    const won = price.toLocaleString("ko-KR");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const onImgClick = (id) => {
        navigate(`${id}`);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "sale-item-box", children: [(0, jsx_runtime_1.jsx)("img", { className: "sale-item-img", src: images, alt: name, onClick: () => onImgClick(id) }), (0, jsx_runtime_1.jsx)("div", { className: "sale-item-title", children: name }), (0, jsx_runtime_1.jsxs)("div", { className: "sale-item-price", children: [won, "\uC6D0"] }), (0, jsx_runtime_1.jsxs)("div", { className: "sale-item-favorite", children: [(0, jsx_runtime_1.jsx)("img", { src: ic_favorite_png_1.default, width: "16", height: "16", alt: "favoriteIcon" }), favoriteCount] })] }));
}
function ItemsOnSale({ items, orderBy, handleOrderChange }) {
    const cutItems = [...items.list];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "sale-item", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mini-nav-bar", children: [(0, jsx_runtime_1.jsx)("h2", { className: "sale-title", children: "\uD310\uB9E4 \uC911\uC778 \uC0C1\uD488" }), (0, jsx_runtime_1.jsxs)("div", { className: "mini-nav-bar-tools", children: [(0, jsx_runtime_1.jsxs)("div", { className: "search-box", children: [(0, jsx_runtime_1.jsx)("img", { className: "serch-icon", src: ic_search_png_1.default, alt: "\uAC80\uC0C9 \uB3CB\uBCF4\uAE30 \uC544\uC774\uCF58", width: "24px", height: "24px" }), (0, jsx_runtime_1.jsx)("input", { className: "search", placeholder: "\uAC80\uC0C9\uD560 \uC0C1\uD488\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694" })] }), (0, jsx_runtime_1.jsx)("a", { className: "add-item-btn", href: "additem", children: "\uC0C1\uD488 \uB4F1\uB85D\uD558\uAE30" }), (0, jsx_runtime_1.jsx)(DropDown_1.default, { className: "drop-down-btn", orderBy: orderBy, handleOrderChange: handleOrderChange })] })] }), (0, jsx_runtime_1.jsx)("ul", { className: "sale-item-container", children: cutItems.map((item) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(BestItems, { item: item }) }, item.id))) })] }));
}
exports.default = ItemsOnSale;
