'use client';

import BestBoards from '@/components/BestBoards';
import MainBoards from '@/components/MainBoards';
import DeviceProvider from '@/contexts/DeviceContext';
import NavLayout from '@/layouts/NavLayout';
import React, { ReactElement } from 'react';

function Boards() {
  return (
    <DeviceProvider>
      <BestBoards />
      <MainBoards />
    </DeviceProvider>
  );
}

Boards.getLayout = function getLayout(page: ReactElement) {
  return <NavLayout>{page}</NavLayout>;
};

export default Boards;
