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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchArticles = useCallback(async () => {
    const query = {
      page: 1,
      pageSize: 6,
      orderBy,
      keyword,
    };
    if (isLoading === false) {
      setIsLoading(true);
      const { list } = await getArticles(query);
      setIsLoading(false);
      setBoards(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, orderBy]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <div className="mx-auto mt-[70px] max-w-[343px] pt-4 tablet:max-w-[696px] desktop:max-w-[1200px]">
      <BoardTitle
        keyword={keyword}
        orderBy={orderBy}
        onChangeKeyword={setKeyword}
        onChangeOrderBy={setOrderBy}
      />
      <div className="mb-[10px] mt-4">
        {boards.map((board, i) => {
          const isLastArticle = i !== boards.length - 1;
          return (
            <>
              <div key={board.id} className="w-full rounded-[8px] bg-[#FCFCFC]">
                <div className="mt-[24px] pb-[24px]">
                  <RecentContent board={board} />
                  <RecentInfo board={board} />
                </div>
              </div>
              {isLastArticle && <VerticalDivider />}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default MainBoards;
