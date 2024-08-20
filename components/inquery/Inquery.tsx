import { ChangeEvent, useState, useEffect } from "react";
import axios from "@/lib/axios";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";
import TextArea from "@/components/form/TextArea";
import timeAgo from "@/lib/utils/timeAgo";
import styles from "./Inquery.module.scss";

interface ArticleProps {
  id: number;
}

interface Comment {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: Date;
  createdAt: Date;
  content: string;
  id: number;
}

interface CommentListResponse {
  nextCursor?: number;
  list: Comment[];
}

function Inquery({ id }: ArticleProps) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handlePostComment = async () => {
    const inputValue = { content: comment };

    try {
      const response = await axios.post(`/articles/${id}/comments`, inputValue);

      const newComment = response.data;
      console.log("post succeed: ", newComment);
      setComments((prevComments) => [newComment, ...prevComments]);
      setComment("");
    } catch (error) {
      console.error("댓글 등록 중 오류가 발생했습니다: ", error);
      setError("댓글 등록 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    if (!id) return;

    const fetchComments = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get<CommentListResponse>(
          `/articles/${id}/comments?limit=10`
        );

        setComments(response.data.list);
        setError(null);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("게시글의 댓글을 불러오지 못했어요.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [id]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePostComment();
        }}
      >
        <TextArea
          label="댓글달기"
          name="new-comment"
          placeholder="댓글을 입력해주세요"
          rows={3}
          onChange={handleInputChange}
          value={comment}
        />
        <Button
          href="#"
          size="sm"
          color="primary"
          type="submit"
          className="ml-auto"
          disabled={!comment.trim()}
        >
          등록
        </Button>
      </form>

      {error && <div className={styles.error}>{error}</div>}

      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles["inquiry-list"]}>
          <ul>
            {comments.map((item) => (
              <li key={`comment-${item.id}`}>
                <div className={styles["comment"]}>{item.content}</div>
                <div className={styles["profile-info"]}>
                  <div className={styles["profile-wrap"]}>
                    {item.writer.image ? (
                      <Image
                        src={item.writer.image}
                        alt={`${item.writer.nickname}님의 프로필 사진`}
                        className={styles["profile-image"]}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <Image
                        src="/img/profile.png"
                        alt="프로필 이미지"
                        width={40}
                        height={40}
                      />
                    )}
                  </div>
                  <div>
                    <div className={styles["profile-id"]}>
                      {item.writer.nickname}
                    </div>
                    <div className={styles["time-log"]}>
                      {timeAgo(item.updatedAt)}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <LinkButton
            href="/boards"
            size="lg"
            color="primary"
            style={{
              fontSize: "18px",
              width: "240px",
              margin: "40px auto 150px",
            }}
          >
            목록으로 돌아가기&nbsp;&nbsp;
            <Icon type="back" size="md" />
          </LinkButton>
        </div>
      )}
    </>
  );
}

export default Inquery;
