import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface comment {
  images: string;
  nickname: string;
  id: number;
  name: string;
  content: string;
  createdAt: string;
}

export default function Comment() {
  const [comment, setComment] = useState<comment[] | null>(null);
  const router = useRouter();
  const { id } = router.query;

  async function getComment(postId: string | string[] | undefined) {
    if (!postId) return;
    const res = await axios.get(`/comments/${postId}`);
    const nextComment = res.data;
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
