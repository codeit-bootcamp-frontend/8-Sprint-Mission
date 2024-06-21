import AllProduct from "./AllProduct";
import BestProduct from "./BestProduct";

function Items() {
  return (
    <>
      <div className="main-wrap">
        <BestProduct></BestProduct>
        <AllProduct></AllProduct>
      </div>
    </>
  );
}

export default Items;
