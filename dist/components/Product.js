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
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const getApi_1 = require("./getApi");
const ic_kebab_menu_png_1 = __importDefault(require("../assets/images/icon/btn_icon/ic_kebab_menu.png"));
const ic_favorite_png_1 = __importDefault(require("../assets/images/icon/btn_icon/ic_favorite.png"));
const Main = styled_components_1.default.main `
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DetailsContainer = styled_components_1.default.section `
  width: 100%;
  padding: 16px 16px 0px 16px;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    display: flex;
    padding: 24px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    width: 1200px;
  }
`;
const ImageWrapper = styled_components_1.default.div `
  display: flex;
  justify-content: center;
`;
const Image = styled_components_1.default.img `
  filter: opacity(0.5) drop-shadow(0 0 0 #228b22);
  border-radius: 12px;
  @media screen and (min-width: 1200px) {
    width: 486px;
    height: 486px;
  }
`;
const Top = styled_components_1.default.div `
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 24px;
    width: 100%;
  }
`;
const TitleContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--gray200);
  @media screen and (max-width: 1199px) and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
const TitleBox = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 16px;
  }
`;
const Title = styled_components_1.default.h2 `
  margin-top: 16px;
  font-size: 16px;
  color: var(--gray800);
  font-weight: 600;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    margin-top: 0px;
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 0px;
    font-size: 24px;
  }
`;
const Price = styled_components_1.default.div `
  font-size: 24px;
  font-weight: 600;
  color: var(--gray800);
  margin: 8px 0px 16px;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 40px;
  }
`;
const MiniTitle = styled_components_1.default.p `
  font-size: 14px;
  font-weight: 500;
  color: var(--gray600);
  margin-top: 16px;
`;
const Text = styled_components_1.default.p `
  font-size: 16px;
  font-weight: 400;
  color: var(--gray800);
  margin: 8px 0px 24px;
`;
const Tag = styled_components_1.default.li `
  border-radius: 26px;
  background-color: var(--gray100);
  padding: 6px 16px;
  margin: 8px 8px 0px 0px;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray800);
`;
const FavoriteBox = styled_components_1.default.div `
  display: flex;
`;
const FavoriteButton = styled_components_1.default.div `
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray500);
  border-radius: 35px;
  margin: 24px 0px;
  border: 1px solid var(--gray200);
  padding: 4px 12px;
  gap: 10px;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
  }
`;
function Product() {
    const { selectItem } = (0, react_router_dom_1.useParams)();
    const [items, setItems] = (0, react_1.useState)(null);
    const [alltags, setAllTags] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [korPrice, setKorPrice] = (0, react_1.useState)("");
    // 상품 데이터 가져오기
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getApi_1.getApiProducts)(selectItem);
                setItems(result);
                setAllTags(result.tags);
                if (result) {
                    const won = result.price.toLocaleString("ko-KR");
                    setKorPrice(won);
                }
            }
            catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false);
            }
        });
        fetchData();
    }, [selectItem]);
    if (loading) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    }
    if (!items) {
        return (0, jsx_runtime_1.jsx)("div", { children: "no data" });
    }
    const { favoriteCount, images, name, description } = items;
    return ((0, jsx_runtime_1.jsx)(Main, { children: (0, jsx_runtime_1.jsxs)(DetailsContainer, { children: [(0, jsx_runtime_1.jsx)(ImageWrapper, { children: (0, jsx_runtime_1.jsx)(Image, { src: images, alt: "\uC0C1\uD488 \uC774\uBBF8\uC9C0", width: "340px", height: "340px" }) }), (0, jsx_runtime_1.jsxs)(Top, { children: [(0, jsx_runtime_1.jsxs)(TitleContainer, { children: [(0, jsx_runtime_1.jsxs)(TitleBox, { children: [(0, jsx_runtime_1.jsx)(Title, { children: name }), (0, jsx_runtime_1.jsx)("img", { src: ic_kebab_menu_png_1.default, alt: "\uCF00\uBC25 \uBA54\uB274 \uC544\uC774\uCF58", width: "24px", height: "24px" })] }), (0, jsx_runtime_1.jsxs)(Price, { children: [korPrice, "\uC6D0"] })] }), (0, jsx_runtime_1.jsx)(MiniTitle, { children: "\uC0C1\uD488 \uC18C\uAC1C" }), (0, jsx_runtime_1.jsx)(Text, { children: description }), (0, jsx_runtime_1.jsx)(MiniTitle, { children: "\uC0C1\uD488 \uD0DC\uADF8" }), (0, jsx_runtime_1.jsx)("ul", { children: alltags ? (alltags.map((tag, index) => (0, jsx_runtime_1.jsx)(Tag, { children: `#${tag}` }, tag + index))) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})) }), (0, jsx_runtime_1.jsx)(FavoriteBox, { children: (0, jsx_runtime_1.jsxs)(FavoriteButton, { children: [(0, jsx_runtime_1.jsx)("img", { src: ic_favorite_png_1.default, alt: "\uC88B\uC544\uC694 \uD558\uD2B8 \uC544\uC774\uCF58", width: "24px", height: "24px" }), favoriteCount] }) })] })] }) }));
}
exports.default = Product;
