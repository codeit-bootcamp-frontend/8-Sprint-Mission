import AllProduct from "./AllProduct";
import BestProduct from "./BestProduct";
import { Outlet } from "react-router-dom";

function Items() {
  return (
    <>
      <div className="main-wrap">
        <BestProduct />
        <AllProduct />
        <Outlet />
      </div>
    </>
  );
}

export default Items;
