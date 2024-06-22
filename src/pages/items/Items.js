import { useEffect, useState } from 'react';
import BestItem from '../../components/BestItem/BestItem.js';
import ItemsOnSale from '../../components/ItemsOnSale/ItemsOnSale.js';
import NavBar from '../../components/NavBar/NavBar.js';
import '../items/Items.css';
import { getApi, getApiOrderBy } from '../../components/getApi.js';
import PaginationBar from '../../components/PaginationBar/PaginationBar.js';

function Items() {
  const [loading, setLoading] = useState(true);
  const [Bestitems, setBestItems] = useState([]);
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const handleOrderChange = async (order) => {
    try {
      setOrderBy(order);
      await itemfetchData(order);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const bestfetchData = async () => {
    try {
      const result = await getApi();
      setBestItems(result);
    } catch (error) {
      console.error(error);
    }
  };

  const itemfetchData = async (orderBy) => {
    try {
      const result = await getApiOrderBy(orderBy);
      setItems(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([bestfetchData(), itemfetchData()]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar page="item-page" />
      <main className="main-box">
        <BestItem items={Bestitems} />
        <ItemsOnSale items={items} orderBy={orderBy} handleOrderChange={handleOrderChange} />
      </main>
      <footer className="footer-box">
        <PaginationBar />
      </footer>
    </>
  );
}

export default Items;
