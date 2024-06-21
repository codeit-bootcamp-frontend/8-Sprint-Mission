import { useEffect, useState } from 'react';
import BestItem from '../../components/BestItem/BestItem.js';
import ItemsOnSale from '../../components/ItemsOnSale/ItemsOnSale.js';
import NavBar from '../../components/NavBar/NavBar.js';
import '../items/Items.css';
import { getApi } from '../../components/getApi.js';
import PaginationBar from '../../components/PaginationBar/PaginationBar.js';

function Items() {
  // const [order, setOrder] = useState('createdAt');
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  // const handleNewestClick = () => setOrder('createdAt');

  // const handleFavoriteClick = () => setOrder('favoriteCount');
  const fetchData = async () => {
    try {
      const result = await getApi();
      setItems(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar page="item-page" />
      <main className="main-box">
        <BestItem items={items} />
        <ItemsOnSale items={items} />
      </main>
      <footer className="footer-box">
        <PaginationBar />
      </footer>
    </>
  );
}

export default Items;
