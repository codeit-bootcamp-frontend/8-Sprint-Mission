import "./TextInput.css";

function TextInput({ label, placeholder }) {
  const isProductIntro = label === "상품 소개";
  const classNames = isProductIntro
    ? "text-input-content product-introduction"
    : "text-input-content";
  return (
    <div className="text-input-wrapper">
      <label className="text-input-label">{label}</label>
      {!isProductIntro && (
        <input className={classNames} type="text" placeholder={placeholder} />
      )}
      {isProductIntro && (
        <textarea className={classNames} placeholder={placeholder} />
      )}
    </div>
  );
}

export default TextInput;
