"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./PaginationBar.css");
const ic_page_left_arrow_png_1 = __importDefault(require("../../assets/images/icon/btn_icon/ic_page_left_arrow.png"));
const ic_page_right_arrow_png_1 = __importDefault(require("../../assets/images/icon/btn_icon/ic_page_right_arrow.png"));
const react_1 = require("react");
function PaginationBar({ items, totalCount, pageBy, handlePaginationChange, itemsSize, }) {
    const [list, setList] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [navClick, setNavClick] = (0, react_1.useState)(Number(pageBy));
    const pageItem = itemsSize;
    // const totalItem = items.totalCount;
    const btnRange = Math.ceil(totalCount / pageItem);
    const onClickNum = (e) => {
        const target = e.currentTarget;
        if (target.tagName !== "LI")
            return;
        setNavClick(Number(target.innerText));
        handlePaginationChange(Number(target.innerText));
    };
    const onClickLeft = () => {
        if (navClick === 1)
            return;
        setNavClick(navClick - 1);
        handlePaginationChange(navClick - 1);
    };
    const onClickRight = () => {
        if (navClick === btnRange)
            return;
        setNavClick(navClick + 1);
        handlePaginationChange(navClick + 1);
    };
    (0, react_1.useEffect)(() => {
        const pageList = () => {
            setLoading(true);
            const newList = [];
            for (let i = 1; i <= btnRange; i++) {
                newList.push(i);
            }
            setList(newList);
        };
        pageList();
        setLoading(false);
    }, [itemsSize, items, navClick, btnRange]);
    (0, react_1.useEffect)(() => {
        setNavClick(1);
        handlePaginationChange(1);
    }, [btnRange]);
    if (loading) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "pagiation-bar", children: [(0, jsx_runtime_1.jsx)("div", { className: "pagiation-arrow", onClick: onClickLeft, style: { opacity: pageBy === 1 ? "40%" : "100%" }, children: (0, jsx_runtime_1.jsx)("img", { src: ic_page_left_arrow_png_1.default, alt: "\uD398\uC774\uC9C0 \uB124\uC774\uC158\uBC14 \uC67C\uCABD \uC774\uB3D9 \uD654\uC0B4\uD45C", width: "16px", height: "16px" }) }), (0, jsx_runtime_1.jsx)("ul", { className: "pagiation-num", onClick: onClickNum, children: list.map((item, index) => ((0, jsx_runtime_1.jsx)("li", { className: index + 1 === navClick ? "pagiation-target" : "", children: item }, item + index))) }), (0, jsx_runtime_1.jsx)("div", { className: "pagiation-arrow", onClick: onClickRight, style: { opacity: pageBy === btnRange ? "40%" : "100%" }, children: (0, jsx_runtime_1.jsx)("img", { src: ic_page_right_arrow_png_1.default, alt: "\uD398\uC774\uC9C0 \uB124\uC774\uC158\uBC14 \uC624\uB978\uCABD \uC774\uB3D9 \uD654\uC0B4\uD45C", width: "16px", height: "16px" }) })] }));
}
exports.default = PaginationBar;
