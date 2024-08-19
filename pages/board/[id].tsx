import { useEffect, useState } from 'react';
import s from '@/styles/Board_id.module.scss';
import { getArticleDetail } from '@/api/articleApi';
import { useRouter } from 'next/router';
import ContentSection from '@/components/Board_id/ContentSection';
import CommentSection from '@/components/Board_id/CommentSection';
import BackIcon from '@/public/svg/ic_back.svg';
import Link from 'next/link';

function Board_id() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  const articleId = Number(id);

  useEffect(() => {
    if (!router.isReady) return;

    async function fetchArticle() {
      if (!articleId) {
        setError('게시글 아이디가 제공되지 않았어요.');
        return;
      }

      try {
        const data: Article = await getArticleDetail(articleId);
        if (!data) {
          throw new Error('해당 게시글의 데이터를 찾을 수 없습니다.');
        }
        setArticle(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('알 수 없는 오류가 발생했습니다.');
        }
      }
    }

    fetchArticle();
  }, [articleId, router.isReady]);

  if (error) {
    alert(`오류: ${error}`);
  }

  if (!id || !article) return null;

  return (
    <div className={s.contain}>
      <ContentSection article={article} />

      <CommentSection articleId={articleId} />

      <Link className={s.backPage} href='/boards'>
        목록으로 돌아가기
        <BackIcon />
      </Link>
    </div>
  );
}

export default Board_id;
