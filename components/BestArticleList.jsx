import Link from 'next/link';

export default function BestArticleList({ bestArticles = [] }) {
  return (
    <ul>
      {bestArticles.map((bestArticle) => (
        <li key={bestArticle.id}>
          <Link href={`/articles/${bestArticle.id}`}>
            <img
              src="images/img_badge.png"
              width="102"
              height="30"
              alt="베스트"
            />
            <h2>{bestArticle.title}</h2>
            <img
              src={bestArticle.image}
              width="72"
              height="72"
              alt="상품 이미지"
            />
            <div>
              <img
                src="icons/ic_basic_profile.svg"
                width="24"
                height="24"
                alt="사용자 프로필"
              />
              <span>{bestArticle.writer.nickname}</span>
              {bestArticle.createAt}
            </div>
            <div>
              <img
                src="icons/ic_heart_inactive.svg"
                width="24"
                height="24"
                alt="좋아요"
              />
              <span>{bestArticle.likeCount}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
