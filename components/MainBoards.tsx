import getArticles, { Article, ArticlesQuery } from '@/pages/api/client';
import React, { useCallback, useEffect, useState } from 'react';
import RecentContent from './boards/MainContent';
import RecentInfo from './boards/MainInfo';
import VerticalDivider from './elements/VerticalDivider';
import BoardTitle from './boards/BoardTitle';

function MainBoards() {
  const [boards, setBoards] = useState<Article[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [orderBy, setOrderBy] = useState<ArticlesQuery['orderBy']>('recent');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoad = useCallback(async () => {
    const { list } = await getArticles({
      page: 1,
      pageSize: 6,
      orderBy,
      keyword,
    });
    setBoards(() => list);
  }, [keyword, orderBy]);

  useEffect(() => {
    if (isLoading === true) {
      handleLoad();
      setIsLoading(() => false);
    }
  }, [isLoading, keyword, orderBy, handleLoad]);

  if (!boards) return null;

  return (
    <div className="mx-auto mt-[70px] max-w-[343px] pt-[16px] tablet:max-w-[696px] desktop:max-w-[1200px]">
      <BoardTitle
        keyword={keyword}
        orderBy={orderBy}
        onChangeKeyword={setKeyword}
        onChangeOrderBy={setOrderBy}
        setIsLoading={setIsLoading}
      />
      <div className="mb-[10px] mt-[16px]">
        {boards &&
          boards.map((board, i) => (
            <>
              <div key={board.id} className="w-full rounded-[8px] bg-[#FCFCFC]">
                <div className="mt-[24px] pb-[24px]">
                  <RecentContent board={board} />
                  <RecentInfo board={board} />
                </div>
              </div>
              {i !== boards.length - 1 && <VerticalDivider />}
            </>
          ))}
      </div>
    </div>
  );
}

export default MainBoards;
