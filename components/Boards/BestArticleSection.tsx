import { useEffect, useState } from "react";
import styles from "@/components/Boards/BestArticleSection.module.css";
import axios from "@/lib/axios";

export default function BestArticleSection() {
  // const [articles, setArticles] = useState<Product[]>([]);

  // async function getProducts(){
  //   const res = await axios.get("/products");
  //   const nextProducts = res.data.results;
  //   setArticles(nextProducts);
  // }

  return (
    <div>
      <div className={styles.bestArticleHeader}>
        <span className={styles.bestArticleTitle}>베스트 게시글</span>
      </div>
    </div>
  );
}
