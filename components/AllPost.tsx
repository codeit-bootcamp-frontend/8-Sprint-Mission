import { useEffect, useState } from 'react';
import s from './AllPost.module.scss';
import SearchBar from '@/layout/SearchBar';
import DropdownMenu from '@/layout/DropdownMenu';
import EmptyState from '@/layout/EmptyState';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ArticleItem({ article }: { article: Article }) {
  return (
    <>
      <Link href={`/boards/${article.id}`}>
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
      </Link>

      <hr className={s.hr} />
    </>
  );
}

function AllPost({ initialArticles }: { initialArticles: Article[] }) {
  const [orderBy, setOrderBy] = useState<ArticleSortOption>('recent');
  const [articles, setArticles] = useState(initialArticles);

  const router = useRouter();
  const keyword = (router.query.q as string) || '';

  const handleSortSelection = (sortOption: ArticleSortOption) => {
    setOrderBy(sortOption);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      let url = `https://panda-market-api.vercel.app/articles?orderBy=${orderBy}`;
      if (keyword.trim()) {
        url += `&keyword=${encodeURIComponent(keyword)}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.list);
    };

    fetchArticles();
  }, [orderBy, keyword]);

  return (
    <div>
      <div className={s.section}>
        <h2>게시글</h2>
        <Link href='/' className={`button ${s.dummy}`}>
          글쓰기
        </Link>
      </div>

      <div className={s.section}>
        <SearchBar />

        <DropdownMenu
          onSortSelection={handleSortSelection}
          sortOptions={[
            { key: 'recent', label: '최신순' },
            { key: 'like', label: '인기순' },
          ]}
        />
      </div>

      {articles.length
        ? articles.map((article) => <ArticleItem key={`article-${article.id}`} article={article} />)
        : keyword && <EmptyState text={`'${keyword}'로 검색된 결과가 없어요.`} />}
    </div>
  );
}

export default AllPost;
