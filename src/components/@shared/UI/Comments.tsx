import React from "react";
import { getProductComments, getArticleComments } from "core/api/commentApi";
import { INITIAL_COMMENTS } from "core/constants/initialValues";
import { DEFAULT_PROFILE_ICON } from "core/constants/defaultImages";
import useApiGet from "lib/hooks/useApiGet";
import { countTime } from "lib/utils/countTime";
import { CommentResponse, Comment } from "core/dtos/commentDTO";
import ReturnButton from "components/@shared/UI/ReturnButton";
import emptyInquiryImg from "assets/images/img_inquiry_empty.png";
import { hasFinalConsonant } from "lib/utils/hasFinalConsonant";
import kebabIc from "assets/icons/ic_kebab.png";

interface CommentsProps {
  id: number;
  type: "product" | "article";
  limit?: number;
  category: string;
}

function Comments({ id, type, limit = 5, category }: CommentsProps) {
  const { data: commentsData } = useApiGet<CommentResponse>(
    type === "product" ? getProductComments : getArticleComments,
    { id, limit },
    INITIAL_COMMENTS
  );

  return (
    <section className="flex flex-col content-center gap-[40px] ">
      <ul className="w-full flex flex-col content-start flex-grow gap-6">
        {commentsData.list.length === 0 ? (
          <li className="flex flex-col items-center gap-2">
            <img
              src={emptyInquiryImg}
              alt="빈 {category} 내용"
              width={196}
              height={196}
            />
            <p className="text-gray-400">
              아직 {category}
              {hasFinalConsonant(category) ? "이" : "가"} 없어요.
            </p>
          </li>
        ) : (
          commentsData.list.map((comment: Comment) => (
            <li
              className="w-full flex flex-col pt-1 text-gray-800 bg-lightGray"
              key={comment.id}
            >
              <div className="flex justify-between pb-[30px]">
                <p className="text-sm text-gray-900">{comment.content}</p>
                <button>
                  <img src={kebabIc} width={24} height={24} alt="케밥 버튼" />
                </button>
              </div>
              <div className="flex gap-2 items-center pb-3">
                <img
                  src={comment.writer.image || DEFAULT_PROFILE_ICON}
                  alt="작성자 프로필 이미지"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-600">
                    {comment.writer.nickname}
                  </span>
                  <span className="text-xs text-gray-400">
                    {countTime(comment)}
                  </span>
                </div>
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
export default Comments;
