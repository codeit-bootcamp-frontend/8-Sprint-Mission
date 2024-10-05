import BestItems from '@components/items/BestItems';
import SellingItems from '@components/items/SellingItems';
import BasicLayout from '@components/layout/BasicLayout/BasicLayout';

const ItemPage = () => {
  return (
    <BasicLayout>
      <BestItems />
      <SellingItems />
    </BasicLayout>
  );
};

export default ItemPage;
