"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DropDown;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../DropDown/DropDown.css");
function DropDown({ className, orderBy, handleOrderChange }) {
    const nowType = orderBy;
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [select, setSelect] = (0, react_1.useState)(nowType);
    const toggle = () => setIsOpen(!isOpen);
    const optionClick = (option) => {
        setSelect(option);
        setIsOpen(false);
    };
    const getApiRecent = () => {
        handleOrderChange("recent");
    };
    const getApiFavorite = () => {
        handleOrderChange("favorite");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "select-options", onClick: toggle, children: [(0, jsx_runtime_1.jsx)("div", { className: "select-text", children: select === "recent" ? "최신순" : "좋아요순" }), isOpen && ((0, jsx_runtime_1.jsxs)("ul", { className: "select-options-box", children: [(0, jsx_runtime_1.jsx)("li", { className: "select-options-recent", onClick: () => {
                            optionClick("recent");
                            getApiRecent();
                        }, children: "\uCD5C\uC2E0\uC21C" }), (0, jsx_runtime_1.jsx)("li", { className: "select-options-favorite", onClick: () => {
                            optionClick("favorite");
                            getApiFavorite();
                        }, children: "\uC88B\uC544\uC694\uC21C" })] }))] }));
}
