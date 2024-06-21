import Selection from "./Selection.js";

function FunctionBar({ onSortMethodChange }) {
  return (
    <form className="function-bar">
      <input type={"serch"}></input>
      <button>상품 등록하기</button>
      <Selection onSortMethodChange={onSortMethodChange} />
    </form>
  );
}

export default FunctionBar;
