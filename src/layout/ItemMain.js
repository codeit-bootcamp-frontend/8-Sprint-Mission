 
import BestProductList from '../components/BestProductList';  
import AllProductList from '../components/AllProductList';  

function ItemMain() {
  
  return (
    <main className="main-top">
      <section className="product-wrap best">
        <BestProductList/>
      </section>
      <section className="product-wrap sale">
        <AllProductList/>
      </section>
    </main>
  );
}

export default ItemMain;
