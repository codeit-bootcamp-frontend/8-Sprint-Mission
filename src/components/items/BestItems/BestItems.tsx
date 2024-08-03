import { useEffect, useState } from 'react';
import { getProducts, GetProductsProps } from '../../../pages/api/Items';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import './BestItems.css';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 4;
  }
};

function BestItems() {
  // 상품 목록
  const [itemList, setItemList] = useState([]);
  // 쿼리
  const [order, setOrder] = useState<GetProductsProps['order']>('favorite');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [keyword, setKeyword] = useState('');
  // 에러
  const [fetchingError, setfetchingError] = useState<any>(null);
  const navigate = useNavigate();

  const fetchItemList = async () => {
    try {
      setfetchingError(null);
      const products = await getProducts({ order, page, pageSize, keyword });
      setItemList(products.list);
    } catch (err) {
      setItemList([]);
      setfetchingError(err);
    }
  };

  const handleResize = () => {
    setPageSize(getPageSize());
  };

  const handleClickItem = (e: any) => {
    e.preventDefault();

    navigate(`/items/${e.currentTarget.dataset.itemId}`);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    fetchItemList();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [order, page, pageSize, keyword]);

  return (
    <>
      <div className="container-best-items">
        <div className="title-best-items">베스트 상품</div>

        <div className="list-best-items">
          {fetchingError && fetchingError.message}
          {itemList?.map((item: any) => (
            <Item
              item={item}
              key={`best-item-${item.id}`}
              handleClick={handleClickItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BestItems;
