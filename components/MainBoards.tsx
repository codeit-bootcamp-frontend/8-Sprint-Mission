import getArticles, { Article } from '@/pages/api/client';
import React, { useEffect, useState } from 'react';
import RecentContent from './boards/MainContent';
import RecentInfo from './boards/MainInfo';
import VerticalDivider from './elements/VerticalDivider';
import BoardTitle from './boards/BoardTitle';

function MainBoards() {
  const [boards, setBoards] = useState<Article[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = async () => {
      const { list } = await getArticles({
        page: 1,
        pageSize: 10,
        orderBy: 'recent',
        keyword,
      });
      setBoards(() => list);
    };
    if (isLoading === true) {
      handleLoad();
      setIsLoading(() => false);
    }
  }, [isLoading, keyword]);

  if (!boards) return null;

  return (
    <div className="mx-auto mt-[70px] w-auto max-w-[343px] pt-[16px]">
      <BoardTitle
        value={keyword}
        onChange={setKeyword}
        setIsLoading={setIsLoading}
      />
      <div className="mb-[10px] mt-[16px] gap-[10px]">
        {boards &&
          boards.map((board, i) => (
            <>
              <div key={board.id} className="w-full rounded-[8px]">
                <div className="pb-[24px]">
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
