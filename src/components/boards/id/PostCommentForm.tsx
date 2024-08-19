import BlueButton from "@/components/@shared/BlueButton";
import GrayTextarea from "@/components/@shared/inputs/GrayTextarea";
import { useRouter } from "next/router";
import React from "react";
import { Comment, postArticleComment } from "@/axios/comments";

interface PostCommentFormProps {
  onChangeComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export default function PostCommentForm({ onChangeComments }: PostCommentFormProps) {
  const { query } = useRouter();
  const [currentContent, setCurrentContent] = React.useState("");

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const contentValue = e.target.value;

    setCurrentContent(contentValue);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const postedComment = await postArticleComment({
        articleId: Number(query.id),
        content: currentContent,
      });

      onChangeComments((prevComments) => [postedComment, ...prevComments]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="my-[32px] md:my-[40px]">
      <label className="block font-semibold text-[16px] text-gray-900 mb-[9px]">댓글달기</label>
      <div className="h-[104px]">
        <GrayTextarea onChange={handleTextAreaChange} placeholder="댓글을 입력해주세요." />
      </div>
      <div className="ml-auto mt-[16px] w-[74px] h-[42px]">
        <BlueButton type="submit" disabled={!currentContent}>
          등록
        </BlueButton>
      </div>
    </form>
  );
}
