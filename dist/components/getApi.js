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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApi = getApi;
exports.getApiOrderBy = getApiOrderBy;
exports.getApiProducts = getApiProducts;
exports.getApiProductsComments = getApiProductsComments;
function getApi() {
    return __awaiter(this, arguments, void 0, function* (size = 4) {
        const response = yield fetch(`https://panda-market-api.vercel.app/products?page=1&pageSize=${size}&orderBy=favorite`);
        const result = yield response.json();
        return result;
    });
}
function getApiOrderBy(_a) {
    return __awaiter(this, arguments, void 0, function* ({ order = "recent", lowerSize = 10, page = 1 }) {
        const response = yield fetch(`https://panda-market-api.vercel.app/products?page=${page}&pageSize=${lowerSize}&orderBy=${order}`);
        const result = yield response.json();
        return result;
    });
}
function getApiProducts(selectItem) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://panda-market-api.vercel.app/products/${selectItem}`);
        const result = yield response.json();
        return result;
    });
}
function getApiProductsComments(selectItem) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://panda-market-api.vercel.app/products/${selectItem}/comments?limit=10`);
        const result = yield response.json();
        return result;
    });
}
