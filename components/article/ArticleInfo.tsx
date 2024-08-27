import getArticleById from '@/lib/api/getArticleById';
import { Article } from '@/types/Article';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import HorizentalBar from '../elements/HorizentalBar';
import VerticalDivider from '../elements/VerticalDivider';

type Props = {
  articleId: string;
};

function ArticleInfo({ articleId }: Props) {
  const [article, setArticle] = useState<Article | null>(null);

  const fetchGetArticle = useCallback(async () => {
    if (articleId) {
      const { data } = await getArticleById(articleId as string);
      setArticle(data);
    }
  }, [articleId]);

  useEffect(() => {
    fetchGetArticle();
  }, [fetchGetArticle]);

  if (!article) return null;

  const { title, writer, image, content, likeCount, updatedAt } = article;

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-xl-20px-bold">{title}</h1>
        <Image
          className="self-start"
          width={24}
          height={24}
          src="/icon/kebab.png"
          alt="options"
        />
      </div>
      <div className="flex h-10 items-center gap-4">
        <Image
          className="h-full rounded-full"
          width={40}
          height={40}
          src={image ?? '/initial_profile.png'}
          alt="profile"
        />
        <div className="flex items-center gap-[2px]">
          <span className="font-md-14px-medium">{writer.nickname}</span>
          <span className="text-secondary-400 font-md-14px-regular">
            {dayjs(updatedAt).format('YYYY. MM. DD')}
          </span>
        </div>
        <HorizentalBar className="h-[80%]" />
        <button
          type="button"
          className="item-center flex items-center justify-center gap-[4px] rounded-full border-[1px] border-secondary-200 px-3 py-1 text-secondary-500"
        >
          <Image width={16} height={16} src="/heart_empty.png" alt="like" />
          <span>{likeCount > 9999 ? '9999+' : likeCount}</span>
        </button>
      </div>
      <VerticalDivider />
      <div>
        <p className="font-lg-16px-regular">{content}</p>
      </div>
    </>
  );
}

export default ArticleInfo;
