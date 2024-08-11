import React from "react";
import { getProductComments } from "../../../core/api";
import { INITIAL_COMMENTS } from "../../../constants";
import useFetch from "../../../lib/hooks/useFetch";
import { countTime } from "../../../lib/utils/countTime";
import { CommentResponse } from "DTO/comment";
import ReturnButton from "components/common/UI/ReturnButton";
import emptyInquiryImg from "assets/images/img_inquiry_empty.png";

interface InquiryCommentsProps {
  productId: number | undefined;
  limit?: number;
}

function InquiryComments({ productId, limit }: InquiryCommentsProps) {
  const { data: commentsData } = useFetch<CommentResponse[]>(
    getProductComments,
    { productId, limit },
    INITIAL_COMMENTS
  );

  const comments: CommentResponse[] = Array.isArray(commentsData)
    ? commentsData
    : [];

  return (
    <section className="flex flex-col content-center gap-[40px] ">
      <ul className="w-full flex flex-col content-start flex-grow gap-6">
        {comments.length === 0 ? (
          <li className="flex flex-col items-center gap-2">
            <img
              src={emptyInquiryImg}
              alt="빈 문의 내용"
              className="w-[196px] h-[196px]"
            />
            <p className="text-gray-400">아직 문의가 없어요.</p>
          </li>
        ) : (
          comments.map((comment: CommentResponse) => (
            <li
              className="w-full flex flex-col text-gray-800 gap-[30px]"
              key={comment.id}
            >
              <p>{comment.content}</p>
              <div className="grid gap-1 content-center grid-rows-2 grid-cols-2">
                <img
                  className="grid w-10 h-10 mr-2"
                  src={comment.writer.image}
                  alt="작성자"
                />
                <span className="grid text-sm text-gray-600">
                  {comment.writer.nickname}
                </span>
                <p className="grid text-xs text-gray-400">
                  {countTime(comment)}
                </p>
              </div>
              <div className="border-2 border-gray-100" />
            </li>
          ))
        )}
      </ul>
      <ReturnButton buttonText="목록으로 돌아가기" />
    </section>
  );
}
export default InquiryComments;
