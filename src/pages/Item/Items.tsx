import { Helmet } from 'react-helmet';
import Header from '../../layout/Header';
import BestProductList from './components/BestProductList';
import AllProductList from './components/AllProductList';
import './Items.scss';

function Items() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 중고마켓</title>
      </Helmet>
      <Header />
      <main className="main-top">
        <section className="product-wrap best">
          <BestProductList />
        </section>
        <section className="product-wrap sale">
          <AllProductList />
        </section>
      </main>
    </>
  );
}

export default Items;
