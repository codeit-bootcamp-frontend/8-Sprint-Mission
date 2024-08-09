import getArticles, { Article } from '@/pages/api/client';
import { useCallback, useContext, useEffect, useState } from 'react';
import { DeviceContext } from '@/contexts/DeviceContext';
import BestMedal from './boards/BestMedal';
import BestContent from './boards/BestContent';
import BestInfo from './boards/BestInfo';

function BestBoards() {
  const device = useContext(DeviceContext);
  const [boards, setBoards] = useState<Article[]>([]);

  const pageSizeByDevice = useCallback(() => {
    if (device === 'mobile') return 1;
    if (device === 'tablet') return 2;
    return 3;
  }, [device]);

  useEffect(() => {
    const handleLoad = async () => {
      const { list } = await getArticles({
        page: 1,
        pageSize: pageSizeByDevice(),
        orderBy: 'like',
      });
      setBoards(() => list);
    };
    handleLoad();
  }, [pageSizeByDevice]);

  if (!boards) return null;

  return (
    <div className="mx-auto mt-[70px] max-w-[343px] pt-[16px] tablet:max-w-[696px] desktop:max-w-[1200px]">
      <h1 className="font-xl-20px-bold">베스트 게시글</h1>
      <div className="mb-[10px] mt-[16px] flex gap-[16px]">
        {boards &&
          boards.map(board => (
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
