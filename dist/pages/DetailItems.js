"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const NavBar_1 = __importDefault(require("../components/NavBar/NavBar"));
const Product_1 = __importDefault(require("../components/Product"));
const ProductComments_1 = __importDefault(require("../components/ProductComments"));
function DetailItems() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.default, {}), (0, jsx_runtime_1.jsx)(Product_1.default, {}), (0, jsx_runtime_1.jsx)(ProductComments_1.default, {})] }));
}
exports.default = DetailItems;
