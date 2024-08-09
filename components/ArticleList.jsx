import Link from 'next/link';

export default function ArticleList({ articles = [] }) {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link href={`/articles/${article.id}`}>
            <h2>{article.title}</h2>
            <img src={article.image} width="72" height="72" alt="상품 이미지" />
          </Link>
          <div>
            <img
              src="icons/ic_basic_profile.svg"
              width="24"
              height="24"
              alt="사용자 프로필"
            />
            <span>{article.writer.nickname}</span>
            {article.createAt}
          </div>
          <div>
            <img
              src="icons/ic_heart_inactive.svg"
              width="24"
              height="24"
              alt="좋아요"
            />
            <span>{article.likeCount}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
