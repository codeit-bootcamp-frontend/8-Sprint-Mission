'use client';

import BestBoards from '@/components/BestBoards';
import MainBoards from '@/components/MainBoards';
import NavLayout from '@/layouts/NavLayout';
import React, { ReactElement } from 'react';

function Boards() {
  return (
    <>
      <BestBoards />
      <MainBoards />
    </>
  );
}

Boards.getLayout = function getLayout(page: ReactElement) {
  return <NavLayout>{page}</NavLayout>;
};

export default Boards;
