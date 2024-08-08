import React from "react";
import { useNavigate } from "react-router-dom";
import { getProductComments } from "../../../core/api";
import { INITIAL_COMMENTS } from "../../../constants";
import useFetch from "../../../lib/hooks/useFetch";
import { countTime } from "../../../lib/utils/countTime";
import { CommentResponse } from "DTO/comment";
import backIcon from "../../../assets/images/ic_back.png";

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

  const navigate = useNavigate();

  return (
    <section className="flex flex-col content-center gap-[40px] ">
      <ul className="w-full flex flex-col content-start flex-grow gap-6">
        {commentsData.map((comment: CommentResponse) => (
          <li
            className="w-full flex flex-col text-gray-800 gap-[30px]"
            key={comment.id}
          >
            <p>{comment.content}</p>
            <div className="grid gap-1 content-center grid-rows-2 grid-cols-2">
              <img className="grid w-10 h-10 mr-2" src={comment.writer.image} />
              <span className="grid text-sm text-gray-600">
                {comment.writer.nickname}
              </span>
              <p className="grid text-xs text-gray-400">{countTime(comment)}</p>
            </div>
            <div className="border-2 border-gray-100" />
          </li>
        ))}
      </ul>
      <button
        className="w-[248px] bg-brand rounded-[40px] mx-auto flex content-center justify-center p-3 text-gray-100 text-lg gap-3"
        onClick={() => navigate(-1)}
      >
        목록으로 돌아가기
        <img src={backIcon} className="h-6" />
      </button>
    </section>
  );
}
export default InquiryComments;
