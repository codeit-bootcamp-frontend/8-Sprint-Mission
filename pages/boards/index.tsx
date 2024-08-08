import RecentlyBoards from '@/components/RecentlyBoards';
import NavLayout from '@/layouts/NavLayout';
import React, { ReactElement } from 'react';

function Boards() {
  return <RecentlyBoards />;
}

Boards.getLayout = function getLayout(page: ReactElement) {
  return <NavLayout>{page}</NavLayout>;
};

export default Boards;
