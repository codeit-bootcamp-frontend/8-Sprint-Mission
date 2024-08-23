import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/components/Boards/BestArticleSection.module.css";
import Image from "next/image";
import axios from "@/lib/axios";

type Article = {
  updatedAt: Date;
  createdAt: Date;
  likeCount: number;
  writer: { nickname: string; id: number };
  image: string;
  content: string;
  title: string;
  id: number;
};

type ArticleListResponse = {
  totalCount: number;
  list: Article[];
};

const getPageSize = (width: number): number => {
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 3;
  }
};

// const BestArticleCard = ({ article }: { article: Article }) => {
//   const dateString = format(new Date(article.createdAt), "yyyy. MM. dd");

//   return (
//     <Link href={`/boards/${article.id}`} className={styles.cardContainer}>
//       <div className={styles.bestSticker}>
//         <Image
//           src="/images/icons/ic_medal.svg"
//           alt="베스트 게시글"
//           width={20}
//           height={20}
//         />
//         Best
//       </div>

//       <div className={styles.contentWrapper}>
//         <div className={styles.mainContent}>
//           <h3 className={styles.articleTitle}>{article.title}</h3>
//           {article.image && (
//             <div className={styles.articleThumbnail}>
//               <div className={styles.imageWrapper}>
//                 <Image
//                   fill
//                   src={article.image}
//                   alt={`${article.id}번 게시글 이미지`}
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
//             </div>
//           )}
//         </div>

//         <div className={styles.articleInfo}>
//           <div className={styles.articleInfoDiv}>
//             {article.writer.nickname}
//             <LikeCountDisplay count={article.likeCount} fontSize={14} />
//           </div>
//           <div className={styles.timestamp}>{dateString}</div>
//         </div>
//       </div>
//     </Link>
//   );
// };

export default function BestArticleSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState<number | null>(null);
  const router = useRouter();
  const { id } = router.query;

  // async function getProduct(articleId: number) {
  //   const res = await axios.get(`articles/${articleId}`);
  //   const nextProducts = res.data.list;
  //   setArticles(nextProducts);

  const useViewport = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width;
  };

  const viewportWidth = useViewport();

  useEffect(() => {
    if (viewportWidth === 0) return;

    const newPageSize = getPageSize(viewportWidth);

    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);

      const axiosBestArticles = async (size: number) => {
        try {
          const response = await axios.get<ArticleListResponse>(
            `https://panda-market-api.vercel.app/articles?orderBy=like&pageSize=${size}`
          );
          setArticles(response.data.list);
        } catch (error) {
          console.error("Failed to fetch best articles:", error);
        }
      };

      axiosBestArticles(newPageSize);
    }
  }, [viewportWidth, pageSize]);

  return (
    <div>
      <div className={styles.bestArticleHeader}>
        <span className={styles.bestArticleTitle}>베스트 게시글</span>
      </div>

      <div className={styles.bestArticleCardContainer}>
        {articles.map((article) => (
          <div key={article.id}>
            <div>
              <Image
                unoptimized={true}
                src="/assets/images/bestBadge.svg"
                width={102}
                height={30}
                alt="베스트 뱃지"
              />
            </div>
            <div className={styles.bestArticleCard}>
              <span>{article.title}</span>
              {/* <span>{article.content}</span> */}
              <Image
                src={article.image}
                width={72}
                height={72}
                alt={`${article.title} 이미지`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
