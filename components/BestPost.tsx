import { useEffect, useState } from 'react';
import s from './BestPost.module.scss';
import badge from '@/public/image/badge.png';
import useViewport from '@/hooks/useViewport';
import Image from 'next/image';
import Link from 'next/link';

function BestPostCard({ article }: { article: Article }) {
  return (
    <Link className={s.card} href={`/boards/${article.id}`}>
      <div className={s.badge}>
        <Image src={badge} alt='베스트 게시글' />
      </div>

      <div className={s.wrap}>
        <div className={s.content}>
          <h3>{article.title}</h3>

          {article.image && (
            <div className={s.thumbnail}>
              <div className={s.img}>
                <Image
                  fill
                  src={article.image}
                  alt={`${article.id}번 게시글 이미지`}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          )}
        </div>

        <div className={s.info}>
          <div>{article.writer.nickname}</div>
        </div>
      </div>
    </Link>
  );
}

function getPageSize(width: number) {
  const TABLET = 768;
  const PC = 1280;

  return width < TABLET ? 1 : width < PC ? 2 : 3;
}

function BestPost() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState<number | null>(null);

  const viewportWidth = useViewport();

  useEffect(() => {
    if (viewportWidth === 0) return;

    const newPageSize = getPageSize(viewportWidth);

    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);

      const fetchBestArticles = async (size: number) => {
        try {
          const response = await fetch(`https://panda-market-api.vercel.app/articles?orderBy=like&pageSize=${size}`);
          const data: ArticleListResponse = await response.json();

          setArticles(data.list);
        } catch (error) {
          console.error('Failed to fetch best articles:', error);
        }
      };

      fetchBestArticles(newPageSize);
    }
  }, [viewportWidth, pageSize]);

  return (
    <div>
      <div className={s.title}>
        <h2>베스트 게시글</h2>
      </div>

      <div className={s.best_posts}>
        {articles.map((article) => (
          <BestPostCard key={`best-article-${article.id}`} article={article} />
        ))}
      </div>
    </div>
  );
}

export default BestPost;
