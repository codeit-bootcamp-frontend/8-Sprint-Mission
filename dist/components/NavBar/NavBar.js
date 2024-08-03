"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../NavBar/NavBar.css");
const logo_png_1 = __importDefault(require("../../assets/images/logo/logo.png"));
const mini_logo_png_1 = __importDefault(require("../../assets/images/logo/mini_logo.png"));
const react_router_dom_1 = require("react-router-dom");
function getLinkStyle({ isActive }) {
    return {
        color: isActive ? "#3692ff" : "none",
    };
}
function NavBar() {
    const location = (0, react_router_dom_1.useLocation)();
    const matchLocation = location.pathname === "/additem";
    return ((0, jsx_runtime_1.jsx)("header", { children: (0, jsx_runtime_1.jsxs)("div", { className: "header-nav", children: [(0, jsx_runtime_1.jsxs)("div", { className: "logo-and-links", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/", children: (0, jsx_runtime_1.jsxs)("picture", { children: [(0, jsx_runtime_1.jsx)("source", { srcSet: mini_logo_png_1.default, media: "(max-width: 767px)", className: "logo-for-phone" }), (0, jsx_runtime_1.jsx)("img", { src: logo_png_1.default, alt: "\uD310\uB2E4\uB9C8\uCF13 \uB85C\uACE0", className: "logo-for-screen" })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "nav-links-box", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/boards", className: "nav-link", style: getLinkStyle, children: "\uC790\uC720\uAC8C\uC2DC\uD310" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: matchLocation ? "/additem" : "/items", className: "nav-link", style: getLinkStyle, children: "\uC911\uACE0\uB9C8\uCF13" })] })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/login", className: "login-btn", children: "\uB85C\uADF8\uC778" })] }) }));
}
exports.default = NavBar;
