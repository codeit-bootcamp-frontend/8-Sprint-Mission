import NavLayout from '@/layouts/NavLayout';
import React, { ReactElement } from 'react';

function Items() {
  return <div>items</div>;
}

Items.getLayout = function getLayout(page: ReactElement) {
  return <NavLayout>{page}</NavLayout>;
};

export default Items;
