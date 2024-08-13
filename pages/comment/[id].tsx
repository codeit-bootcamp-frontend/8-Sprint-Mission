import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { Comment } from "@/api/types/comment";

export default function Comment() {
  const [comment, setComment] = useState<Comment[] | null>(null);
  const router = useRouter();
  const { id } = router.query;

  async function getComment(postId: string | string[] | undefined) {
    if (!postId) return;
    const res = await axios.get(`/comments/${postId}`);
    const nextComment: Comment[] = res.data;
    setComment(nextComment);
  }

  useEffect(() => {
    if (!id) return;

    getComment(id);
  }, [id]);

  if (!comment) return null;

  return (
    <div>
      {comment.map((c) => (
        <div key={c.id}>
          <p>{c.content}</p>
        </div>
      ))}
    </div>
  );
}
