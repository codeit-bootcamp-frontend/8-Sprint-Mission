import getArticles, { Article } from '@/pages/api/client';
import { useEffect, useState } from 'react';
import BestMedal from './boards/BestMedal';
import BestContent from './boards/BestContent';
import BestInfo from './boards/BestInfo';

function BestBoards() {
  const [boards, setBoards] = useState<Article[]>([]);

  useEffect(() => {
    const handleLoad = async () => {
      const { list } = await getArticles({
        page: 1,
        pageSize: 2,
        orderBy: 'like',
      });
      setBoards(() => list);
    };
    handleLoad();
  }, []);

  if (!boards) return null;

  return (
    <div className="mx-auto mt-[70px] w-auto max-w-[343px] pt-[16px]">
      <h1 className="font-bold">베스트 게시글</h1>
      <div className="mb-[10px] mt-[16px] flex gap-[10px]">
        {boards &&
          boards.slice(0, 1).map(board => (
            <div
              key={board.id}
              className="w-full rounded-[8px] bg-secondary-50"
            >
              <div className="px-[24px] pb-[16px]">
                <BestMedal />
                <BestContent board={board} />
                <BestInfo board={board} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BestBoards;
