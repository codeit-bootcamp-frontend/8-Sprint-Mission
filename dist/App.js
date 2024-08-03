"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles/reset.css");
const Home_1 = __importDefault(require("./pages/home/Home"));
const Items_1 = __importDefault(require("./pages/items/Items"));
const Login_1 = __importDefault(require("./pages/login/Login"));
const react_router_dom_1 = require("react-router-dom");
const AddItem_1 = __importDefault(require("./pages/additem/AddItem"));
const DetailItems_1 = __importDefault(require("./pages/DetailItems"));
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/items", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Items_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ":selectItem", element: (0, jsx_runtime_1.jsx)(DetailItems_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "additem", element: (0, jsx_runtime_1.jsx)(AddItem_1.default, {}) })] }) }));
}
exports.default = App;
