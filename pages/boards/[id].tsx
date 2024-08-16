import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Comment } from "@/api/types/comment";

const Article = () => {
  const [article, setArticle] = useState<Comment>();
  const router = useRouter();
  const { id } = router.query;

  async function getArticle(targetId: string | string[]) {
    const res = await axios.get(`/article/${targetId}`);
    const nextArticle = res.data;
    setArticle(nextArticle);
  }

  useEffect(() => {
    if (!id) return;

    getArticle(id);
  }, [id]);

  if (!article) return null;

  return (
    <div>
      <div>Article {id} page</div>

      <h1>{article.title}d</h1>
      <p>프로파일들어가야함</p>
      <p>닉네임</p>
      <p>작성날짜</p>
      <p> 하트 이모티콘 + 하트 수</p>
      <h2>title 들어가야함</h2>

      <form>
        <label htmlFor="comment">댓글달기</label>
        <input id="comment" type="texteara" />
        <button>등록</button>

        {/* 댓글 api 연동해야함 */}
        <div>
          <p>댓글</p>
          <p>더보기 아이콘</p>
          <p>프로필사진</p>
          <p>닉네임</p>
          <p>작성시간</p>
        </div>
      </form>
    </div>
  );
};

export default Article;
