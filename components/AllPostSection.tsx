import { useEffect, useState } from 'react';
import s from './AllPost.module.scss';
import SearchBar from '@/components/layout/SearchBar';
import DropdownMenu from '@/components/layout/DropdownMenu';
import EmptyState from '@/components/layout/EmptyState';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Post({ post }: { post: Article }) {
  return (
    <>
      <Link href={`/board/${post.id}`}>
        <div className={s.wrap}>
          <div className={s.content}>
            <h3>{post.title}</h3>

            {post.image && (
              <div className={s.thumbnail}>
                <div className={s.img}>
                  <Image fill src={post.image} alt={`${post.id}번 게시글 이미지`} style={{ objectFit: 'contain' }} />
                </div>
              </div>
            )}
          </div>

          <div className={s.info}>
            <div>{post.writer.nickname}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

function AllPostSection({ initialArticles }: { initialArticles: Article[] }) {
  const [orderBy, setOrderBy] = useState<ArticleSortOption>('recent');
  const [articles, setArticles] = useState(initialArticles);

  const router = useRouter();
  const keyword = (router.query.q as string) || '';

  const handleSortSelection = (sortOption: ArticleSortOption) => {
    setOrderBy(sortOption);
  };

  const handleSearch = (searchKeyword: string) => {
    const query = { ...router.query };

    if (searchKeyword.trim()) {
      query.q = searchKeyword;
    } else {
      delete query.q;
    }

    router.replace({
      pathname: router.pathname,
      query,
    });
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
        <Link href='/addboard' className={`button ${s.dummy}`}>
          글쓰기
        </Link>
      </div>

      <div className={s.section}>
        <SearchBar onSearch={handleSearch} />

        <DropdownMenu
          onSortSelection={handleSortSelection}
          sortOptions={[
            { key: 'recent', label: '최신순' },
            { key: 'like', label: '인기순' },
          ]}
        />
      </div>

      <div className={s.posts}>
        {articles.length
          ? articles.map((post) => <Post key={`post-${post.id}`} post={post} />)
          : keyword && <EmptyState text={`'${keyword}'로 검색된 결과가 없어요.`} />}
      </div>
    </div>
  );
}

export default AllPostSection;
