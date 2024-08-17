import { getArticleComment } from "@/apis/article";
import { ArticleComment } from "@/types/article";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Cursor {
  cursorArr: any[];
  cursorIndex: number;
}

const INIT_CURSOR: Cursor = {
  cursorArr: [0],
  cursorIndex: 0,
};
export default function useArticleComment() {
  const [commentList, setCommentList] = useState<ArticleComment[]>([]);
  const [visibleCommentList, setVisibleCommentList] = useState<
    ArticleComment[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cursor, setCursor] = useState(INIT_CURSOR);
  const router = useRouter();
  const { id } = router.query;

  const loadComment = async () => {
    setIsLoading(true);
    try {
      if (typeof id !== "string") {
        return;
      }
      const data = await getArticleComment({
        articleId: parseInt(id),
        limit: 5,
        cursor: cursor.cursorArr[cursor.cursorIndex],
      });
      if (cursor.cursorArr[cursor.cursorArr.length - 1]) {
        const { nextCursor } = data;
        const nextCursorArr = [...cursor.cursorArr, nextCursor];
        setCursor((prev) => ({ ...prev, cursorArr: nextCursorArr }));
      }

      const { list } = data;
      setCommentList((prev) => [...prev, ...list]);
    } catch (err) {
      setIsError(true);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    loadComment();
  }, [id]);
  return { commentList, isLoading, isError };
}
