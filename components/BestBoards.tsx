import getArticles, { Article } from '@/pages/api/client';
import { useContext, useEffect, useState } from 'react';
import { DeviceContext } from '@/contexts/DeviceContext';
import BestMedal from './boards/BestMedal';
import BestContent from './boards/BestContent';
import BestInfo from './boards/BestInfo';

const pageSizeMap = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
};

function BestBoards() {
  const device = useContext(DeviceContext);
  const [boards, setBoards] = useState<Article[]>([]);

  useEffect(() => {
    const handleLoad = async () => {
      const { list } = await getArticles({
        page: 1,
        pageSize: pageSizeMap[device],
        orderBy: 'like',
      });
      setBoards(list);
    };
    handleLoad();
  }, [device]);

  return (
    <div className="mx-auto mt-[70px] max-w-[343px] pt-4 tablet:max-w-[696px] desktop:max-w-[1200px]">
      <h1 className="font-xl-20px-bold">베스트 게시글</h1>
      <div className="mb-[10px] mt-4 flex gap-4">
        {boards.map(board => (
          <div key={board.id} className="w-full rounded-[8px] bg-secondary-50">
            <div className="px-6 pb-4">
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
