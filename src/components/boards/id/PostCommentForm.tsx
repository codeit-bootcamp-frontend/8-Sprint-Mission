import BlueButton from "@/components/@shared/BlueButton";
import GrayTextarea from "@/components/@shared/inputs/GrayTextarea";
import React from "react";

export default function PostCommentForm() {
  const [currentContent, setCurrentContent] = React.useState("");

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const contentValue = e.target.value;

    setCurrentContent(contentValue);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
