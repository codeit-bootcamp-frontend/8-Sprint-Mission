"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./BestItem.css");
const ic_favorite_png_1 = __importDefault(require("../../assets/images/icon/btn_icon/ic_favorite.png"));
const react_router_dom_1 = require("react-router-dom");
function BestItems({ item }) {
    const { favoriteCount, images, price, name, id } = item;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const won = price.toLocaleString("ko-KR");
    const onImgClick = (id) => {
        navigate(`${id}`);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "best-item-box", children: [(0, jsx_runtime_1.jsx)("img", { className: "best-item-img", src: images, alt: name, onClick: () => onImgClick(id) }), (0, jsx_runtime_1.jsx)("div", { className: "best-item-title", children: name }), (0, jsx_runtime_1.jsxs)("div", { className: "best-item-price", children: [won, "\uC6D0"] }), (0, jsx_runtime_1.jsxs)("div", { className: "best-item-favorite", children: [(0, jsx_runtime_1.jsx)("img", { src: ic_favorite_png_1.default, width: "16", height: "16", alt: "favoriteIcon" }), favoriteCount] })] }));
}
function BestItemList({ items }) {
    const cutItems = [...items.list];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "best-item", children: [(0, jsx_runtime_1.jsx)("h2", { className: "best-title", children: "\uBCA0\uC2A4\uD2B8 \uC0C1\uD488" }), (0, jsx_runtime_1.jsx)("ul", { className: "best-item-container", children: cutItems.map((item) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(BestItems, { item: item }) }, item.id))) })] }));
}
exports.default = BestItemList;
