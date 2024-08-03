"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const NavBar_1 = __importDefault(require("../../components/NavBar/NavBar"));
const AddItem_module_css_1 = __importDefault(require("./AddItem.module.css"));
const ic_plus_png_1 = __importDefault(require("../../assets/images/icon/btn_icon/ic_plus.png"));
const ic_delete_btn_png_1 = __importDefault(require("../../assets/images/icon/btn_icon/ic_delete_btn.png"));
const ic_delete_btn_gray_png_1 = __importDefault(require("../../assets/images/icon/btn_icon/ic_delete_btn_gray.png"));
function AddItem() {
    const [values, setValues] = (0, react_1.useState)({
        images: [],
        tags: [],
        price: "",
        description: "",
        name: "",
    });
    const [preview, setPreview] = (0, react_1.useState)("");
    const [tagInput, setTagInput] = (0, react_1.useState)("");
    const [pass, setPass] = (0, react_1.useState)(false);
    const won = Number(values.price).toLocaleString("ko-KR");
    console.log(won);
    // 이미지 삭제
    const onClickImageDelete = () => {
        setValues((prevValues) => (Object.assign(Object.assign({}, prevValues), { images: [] })));
    };
    // 태그 삭제
    const onClickTagDelete = (deleteTag) => {
        const restTag = values.tags.filter((tag) => tag !== deleteTag);
        setValues((prevValues) => (Object.assign(Object.assign({}, prevValues), { tags: restTag })));
    };
    // 입력된 값을 state에 저장
    const handleChange = (name, value) => {
        setValues((prevValues) => (Object.assign(Object.assign({}, prevValues), { [name]: value })));
    };
    // 입력된 값을 파악하여 함수에 전달
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            const file = files && files.length > 0 ? files[0] : null;
            handleChange(name, file);
        }
        else {
            handleChange(name, value);
        }
    };
    // 태그 인풋의 입력값 파악
    const handleTagInputChange = (e) => {
        setTagInput(e.target.value);
    };
    // 등록 버튼 클릭 시 제출
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };
    // 이미지 미리 보기 주소 생성, 삭제
    (0, react_1.useEffect)(() => {
        if (!values.images || values.images.length === 0)
            return;
        const image = values.images[0];
        console.log(image);
        if (!(image instanceof File))
            return;
        console.log(image);
        const nextPreview = URL.createObjectURL(image);
        setPreview(nextPreview);
        return () => {
            URL.revokeObjectURL(nextPreview);
            setPreview("");
        };
    }, [values.images]);
    // 태그 인풋 엔터키 감지 후 입력값 state에 저장 밑 태그 인풋 초기화
    (0, react_1.useEffect)(() => {
        const handleKeyDown = (e) => {
            if (e.key !== "Enter")
                return;
            const tag = tagInput.trim();
            if (tag && !values.tags.includes(tag)) {
                setValues((prevValues) => (Object.assign(Object.assign({}, prevValues), { tags: [...prevValues.tags, tag] })));
                setTagInput("");
            }
            else {
                alert("비어있거나 중복된 태그입니다.");
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [tagInput, values.tags]);
    // 입력값 감지 후 조건 충족 시 등록 버튼 활성화
    (0, react_1.useEffect)(() => {
        function validation() {
            const { tags, price, description, name } = values;
            const target = Boolean(price) && Boolean(description) && name !== "";
            const tagCheck = tags.length > 0;
            return target && tagCheck;
        }
        const isValid = validation();
        setPass(isValid);
    }, [values, tagInput, values.tags]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(NavBar_1.default, {}), (0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: `${AddItem_module_css_1.default.addItemBody} ${AddItem_module_css_1.default.verticalAlign}`, children: [(0, jsx_runtime_1.jsxs)("article", { className: AddItem_module_css_1.default.productRegister, children: [(0, jsx_runtime_1.jsx)("h2", { className: AddItem_module_css_1.default.productRegisterTitle, children: "\uC0C1\uD488 \uB4F1\uB85D\uD558\uAE30" }), (0, jsx_runtime_1.jsx)("button", { className: `${pass ? AddItem_module_css_1.default.vaildButton : AddItem_module_css_1.default.productRegisterBtn}`, children: "\uB4F1\uB85D" })] }), (0, jsx_runtime_1.jsxs)("article", { children: [(0, jsx_runtime_1.jsxs)("label", { className: AddItem_module_css_1.default.verticalAlign, htmlFor: "file-upload", children: [(0, jsx_runtime_1.jsx)("span", { className: AddItem_module_css_1.default.productImageTitle, children: "\uC0C1\uD488 \uC774\uBBF8\uC9C0" }), (0, jsx_runtime_1.jsxs)("div", { className: AddItem_module_css_1.default.imageUploadBox, children: [(0, jsx_runtime_1.jsxs)("div", { className: AddItem_module_css_1.default.imageUpload, children: [(0, jsx_runtime_1.jsx)("img", { src: ic_plus_png_1.default, alt: "\uC774\uBBF8\uC9C0 \uCD94\uAC00 \uBC84\uD2BC", width: "48px", height: "48px" }), (0, jsx_runtime_1.jsx)("span", { className: AddItem_module_css_1.default.imageUploadText, children: "\uC774\uBBF8\uC9C0 \uB4F1\uB85D" })] }), preview ? ((0, jsx_runtime_1.jsxs)("div", { className: AddItem_module_css_1.default.imageUploadSelect, children: [(0, jsx_runtime_1.jsx)("img", { className: AddItem_module_css_1.default.imageUpload, alt: "\uB4F1\uB85D\uB41C \uC774\uBBF8\uC9C0", src: preview }), (0, jsx_runtime_1.jsx)("div", { className: AddItem_module_css_1.default.imageUploadDelete, onClick: onClickImageDelete, children: (0, jsx_runtime_1.jsx)("img", { src: ic_delete_btn_png_1.default, alt: "\uB4F1\uB85D\uB41C \uC774\uBBF8\uC9C0 \uC0AD\uC81C \uBC84\uD2BC", width: "20px", height: "20px" }) })] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}))] })] }), (0, jsx_runtime_1.jsx)("input", { onChange: handleInputChange, type: "file", name: "images", id: "file-upload", className: AddItem_module_css_1.default.imageUploadInput })] }), (0, jsx_runtime_1.jsxs)("article", { className: AddItem_module_css_1.default.verticalAlign, children: [(0, jsx_runtime_1.jsx)("label", { className: AddItem_module_css_1.default.labelTitle, children: "\uC0C1\uD488\uBA85" }), (0, jsx_runtime_1.jsx)("input", { onChange: handleInputChange, className: AddItem_module_css_1.default.productInput, placeholder: "\uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", name: "name", value: values.name, type: "text" })] }), (0, jsx_runtime_1.jsxs)("article", { className: AddItem_module_css_1.default.verticalAlign, children: [(0, jsx_runtime_1.jsx)("label", { className: AddItem_module_css_1.default.labelTitle, children: "\uC0C1\uD488 \uC18C\uAC1C" }), (0, jsx_runtime_1.jsx)("textarea", { onChange: handleInputChange, className: AddItem_module_css_1.default.productDescriptionText, value: values.description, name: "description", placeholder: "\uC0C1\uD488 \uC18C\uAC1C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694" })] }), (0, jsx_runtime_1.jsxs)("article", { className: AddItem_module_css_1.default.verticalAlign, children: [(0, jsx_runtime_1.jsx)("label", { className: AddItem_module_css_1.default.labelTitle, children: "\uD310\uB9E4 \uAC00\uACA9" }), (0, jsx_runtime_1.jsx)("input", { onChange: handleInputChange, className: AddItem_module_css_1.default.productInput, placeholder: "\uD310\uB9E4 \uAC00\uACA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", value: values.price, name: "price", type: "number" })] }), (0, jsx_runtime_1.jsxs)("article", { className: AddItem_module_css_1.default.verticalAlign, children: [(0, jsx_runtime_1.jsx)("label", { className: AddItem_module_css_1.default.labelTitle, children: "\uD0DC\uADF8" }), (0, jsx_runtime_1.jsx)("input", { onChange: handleTagInputChange, className: AddItem_module_css_1.default.productInput, placeholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694", value: tagInput, name: "tags", type: "text" })] }), values.tags.length > 0 ? ((0, jsx_runtime_1.jsx)("ul", { className: AddItem_module_css_1.default.tagsContainer, children: values.tags.map((tag, index) => ((0, jsx_runtime_1.jsxs)("li", { className: AddItem_module_css_1.default.tags, children: [(0, jsx_runtime_1.jsx)("div", { className: AddItem_module_css_1.default.tagValue, children: tag }), (0, jsx_runtime_1.jsx)("img", { onClick: () => onClickTagDelete(tag), src: ic_delete_btn_gray_png_1.default, alt: "\uB4F1\uB85D\uB41C \uD0DC\uADF8 \uC0AD\uC81C \uBC84\uD2BC", width: "22px", height: "24px" })] }, tag + index))) })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}))] }) })] }));
}
exports.default = AddItem;
