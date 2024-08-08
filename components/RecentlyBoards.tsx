import getArticles, { Article } from '@/pages/api/client';
import React, { useEffect, useState } from 'react';

function RecentlyBoards() {
  const [boards, setBoards] = useState<Article[]>([]);

  useEffect(() => {
    const handleLoad = async () => {
      const { list } = await getArticles({
        page: 1,
        pageSize: 10,
        orderBy: 'recent',
      });
      setBoards(prev => [...prev, ...list]);
    };
    handleLoad();
  }, []);

  return (
    <main className="m-[16px] mt-[86px] w-full">
      <h1 className="font-2lg-18px-bold">베스트 게시글</h1>
      {boards[0].content}
    </main>
  );
}

export default RecentlyBoards;
