import TopNavigation from '../Components/TopNavigation.jsx';
import BestProducts from '../Components/BestProducts.jsx';
import OnSaleProducts from '../Components/OnSaleProducts.jsx';
import PaginationBar from '../Components/PaginationBar.jsx';

function Items() {
  return (
    <>
      <TopNavigation />
      <BestProducts />
      <OnSaleProducts />
      <PaginationBar />
    </>
  );
}

export default Items;
