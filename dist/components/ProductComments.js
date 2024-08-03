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
const ic_return_png_1 = __importDefault(require("../assets/images/icon/btn_icon/ic_return.png"));
const gray_panda_png_1 = __importDefault(require("../assets/images/logo/gray_panda.png"));
const PLACEHOLDERTEXT = "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";
const Main = styled_components_1.default.main `
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    align-items: center;
    margin-top: 32px;
  }
`;
const CommentsContainer = styled_components_1.default.section `
  padding: 0px 16px 16px 16px;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    display: flex;
    padding: 24px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    width: 1200px;
  }
`;
const CommentTopBox = styled_components_1.default.div `
  width: 100%;
  border-top: 1px solid var(--gray200);
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const MiniTitle = styled_components_1.default.p `
  font-size: 16px;
  font-weight: 600;
  color: var(--gray900);
`;
const CommentInput = styled_components_1.default.textarea `
  width: 100%;
  height: 104px;
  background-color: var(--gray100);
  border-radius: 12px;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }

  &::placeholder {
    color: var(--gray400);
  }
`;
const ButtonWrapper = styled_components_1.default.div `
  display: flex;
  justify-content: flex-end;
`;
const CommentSubmitButton = styled_components_1.default.button `
  display: inline-block;
  background-color: ${({ $pass }) => ($pass ? `var(--blue)` : "var(--gray400)")};
  color: #ffffff;
  border-radius: 8px;
  padding: 12px 23px;
`;
const CommentContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
`;
const CommentBox = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--gray200);
`;
const Comment = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CommentText = styled_components_1.default.p `
  font-size: 16px;
  font-weight: 400;
  color: var(--gray800);
  line-height: 22.4px;
  margin: 24px 0px;
`;
const User = styled_components_1.default.div `
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 8px;
`;
const UserProfileImage = styled_components_1.default.img ``;
const UserInfo = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const UserName = styled_components_1.default.p `
  font-size: 14px;
  font-weight: 400;
  color: var(--gray600);
`;
const TimeAgo = styled_components_1.default.div `
  font-size: 12px;
  font-weight: 400;
  color: var(--gray400);
`;
const BottomButton = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 166px;
`;
const ReturnButton = styled_components_1.default.button `
  display: inline-flex;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background-color: var(--blue);
  border-radius: 40px;
  margin: 24px 0px;
  padding: 12px 38.5px;
  gap: 10px;
  align-items: center;
`;
const EmptyComment = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray400);
  line-height: 24px;
`;
function ProductComments() {
    const { selectItem } = (0, react_router_dom_1.useParams)();
    const [items, setItems] = (0, react_1.useState)({ list: [] });
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [values, setValues] = (0, react_1.useState)("");
    const [pass, setPass] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const onClickReturn = () => {
        navigate("/items");
    };
    // 댓글 인풋의 입력값 파악
    const handleInputChange = (e) => {
        const { value } = e.target;
        setValues(value);
    };
    // 테스트를 위해 추가한 동작
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };
    // 댓글 작성한 시간 변환 함수
    const getTimegap = (posting) => {
        const dateString = posting;
        const date = new Date(dateString);
        const timestamp = date.getTime();
        const msgap = Date.now() - timestamp;
        const minutegap = Math.floor(msgap / 60000);
        const hourgap = Math.floor(msgap / 3600000);
        const UploadDate = posting.slice(0, 10);
        if (msgap < 0) {
            return (0, jsx_runtime_1.jsx)("div", { children: "0\uBD84\uC804" });
        }
        if (hourgap > 24) {
            return (0, jsx_runtime_1.jsx)("div", { children: UploadDate });
        }
        if (minutegap > 60) {
            return (0, jsx_runtime_1.jsxs)("div", { children: [hourgap, "\uC2DC\uAC04 \uC804;"] });
        }
        else {
            return (0, jsx_runtime_1.jsxs)("div", { children: [minutegap, "\uBD84 \uC804"] });
        }
    };
    // 상품 댓글 데이터 가져오기
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getApi_1.getApiProductsComments)(selectItem);
                setItems(result);
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
    // 입력값 감지 후 조건 충족 시 등록 버튼 활성화
    (0, react_1.useEffect)(() => {
        function validation() {
            const valueCheck = values.length > 0;
            return valueCheck;
        }
        const isValid = validation();
        setPass(isValid);
    }, [values]);
    if (loading) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    }
    return ((0, jsx_runtime_1.jsxs)(Main, { children: [(0, jsx_runtime_1.jsx)(CommentsContainer, { children: (0, jsx_runtime_1.jsxs)(CommentTopBox, { children: [(0, jsx_runtime_1.jsx)(MiniTitle, { children: "\uBB38\uC758\uD558\uAE30" }), (0, jsx_runtime_1.jsx)(CommentInput, { placeholder: PLACEHOLDERTEXT, onChange: handleInputChange }), (0, jsx_runtime_1.jsx)(ButtonWrapper, { children: (0, jsx_runtime_1.jsx)(CommentSubmitButton, { onClick: handleSubmit, "$pass": pass, children: "\uB4F1\uB85D" }) }), (0, jsx_runtime_1.jsx)(CommentContainer, { children: items.list.length !== 0 ? (items.list.map((items) => ((0, jsx_runtime_1.jsxs)(CommentBox, { children: [(0, jsx_runtime_1.jsxs)(Comment, { children: [(0, jsx_runtime_1.jsx)(CommentText, { children: items.content }), (0, jsx_runtime_1.jsx)("img", { src: ic_kebab_menu_png_1.default, alt: "\uCF00\uBC25 \uBA54\uB274 \uC544\uC774\uCF58", width: "24px", height: "24px" })] }), (0, jsx_runtime_1.jsxs)(User, { children: [(0, jsx_runtime_1.jsx)(UserProfileImage, { src: items.writer.image, width: "40px", height: "40px" }), (0, jsx_runtime_1.jsxs)(UserInfo, { children: [(0, jsx_runtime_1.jsx)(UserName, { children: items.writer.nickname }), (0, jsx_runtime_1.jsx)(TimeAgo, { children: getTimegap(items.updatedAt) })] })] })] }, items.id)))) : ((0, jsx_runtime_1.jsxs)(EmptyComment, { children: [(0, jsx_runtime_1.jsx)("img", { src: gray_panda_png_1.default, alt: "\uB313\uAE00\uC774 \uC5C6\uB294 \uACBD\uC6B0 \uC774\uBBF8\uC9C0", width: "200px", height: "200px" }), "\uC544\uC9C1 \uBB38\uC758\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."] })) })] }) }), (0, jsx_runtime_1.jsx)(BottomButton, { children: (0, jsx_runtime_1.jsxs)(ReturnButton, { onClick: onClickReturn, children: ["\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30", (0, jsx_runtime_1.jsx)("img", { src: ic_return_png_1.default, alt: "\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30 \uBC84\uD2BC", width: "24px", height: "24px" })] }) })] }));
}
exports.default = ProductComments;
