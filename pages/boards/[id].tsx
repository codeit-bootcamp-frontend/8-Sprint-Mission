import axios from "@/lib/axios";
import { useRouter } from "next/router";
import { Comment } from "@/api/types/comment";
import Heart from "@/image/icons/ic_heart.svg";
import Profile from "@/image/icons/ic_profile.svg";
import { useQuery } from "@tanstack/react-query";

interface Writer {
  id: string;
  nickname: string;
}

interface Article extends Comment {
  writer: Writer;
}

const getArticle = async (targetId: string | string[]) => {
  const res = await axios.get(`/articles/${targetId}`);
  return res.data;
};

const Article = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: articles,
    isLoading,
    error,
  } = useQuery<Article>({
    queryKey: ["articles", id],
    queryFn: () => getArticle(id as string),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading comments</div>;
  if (!articles) return <div>데이터 전송 안됨</div>;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div>
      <h1>{articles.title}</h1>
      <Profile />
      <p>{articles.writer.nickname}</p>
      <p>{formatDate(articles.createdAt)}</p>
      <div>
        <Heart />
        {articles.likeCount}
      </div>
      <h2>{articles.title}</h2>

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
