import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

export default function Article() {
  const [article, setArticle] = useState();
  const router = useRouter();
  const { id } = router.query;

  async function getArticle(targetId) {
    const response = await axios.get(`/articles/${targetId}`);
    const articleData = response.data;
    setArticle(articleData);
  }

  useEffect(() => {
    if (!id) return;

    getArticle(id);
  }, [id]);

  // 맨 처음에는 article의 값이 없으니까 아무것도 랜더링 해주지 않음
  if (!article) return null;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image} alt="상품" />
      <p>{article.content}</p>
      <div>
        <h3>{article.writer.nickname}</h3>
        <div>{article.likeCount}</div>
      </div>
    </div>
  );
}
