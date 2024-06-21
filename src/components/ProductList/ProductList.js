import Item from "../Item";
import FunctionBar from "./FunctionBar";

function ProductList({ products, onSortMethodChange }) {
  return (
    <div className="list-section">
      <div className="list-title">
        <div>판매중인 상품 </div>
        <div>
          <FunctionBar onSortMethodChange={onSortMethodChange} />
        </div>
      </div>
      <div className="list-products">
        <Item displays={products} />
      </div>
    </div>
  );
}

export default ProductList;
