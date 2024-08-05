import React from 'react';
import BestItemsSection from '@pages/ItemsPage/components/BestItemsSection';
import AllItemsSection from '@pages/ItemsPage/components/AllItemsSection';
import '@pages/ItemsPage/ItemsPage.scss';

function ItemsPage() {
  return (
    <main className="itemsMain">
      <BestItemsSection />
      <AllItemsSection />
    </main>
  );
}

export default ItemsPage;
