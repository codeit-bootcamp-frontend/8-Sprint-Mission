import { ChangeEvent, useState } from "react";

import "./CommentList.css";
import inquiryEmptyImage from "../../assets/images/Img_inquiry_empty.png";

import Comment from "./Comment";

const placeholder =
  "개인정보를 공유 및 요청하거나 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, " +
  "이에 대한 민형사상 책임은 게시자에게 있습니다.";

function CommentList({ comments }: any) {
  const [isInputFill, setIsInputFill] = useState(false);

  const handleValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIsInputFill(e.target.value !== "");
  };

  const buttonClassName = isInputFill
    ? "add-inquiry-button active"
    : "add-inquiry-button";

  return (
    <>
      <div className="add-inquiry-wrapper">
        <label className="inquiry-label" htmlFor="inquiry">
          문의하기
        </label>
        <textarea
          className="inquiry-content"
          id="inquiry"
          placeholder={placeholder}
          onChange={handleValueChange}
        ></textarea>
        <button className={buttonClassName} disabled={!isInputFill}>
          등록
        </button>
      </div>

      <div className="inquiry-wrapper">
        {!!comments.length ? (
          <ul className="comment-lists">
            {comments.map((comment: any) => {
              return (
                <li key={comment.id}>
                  <Comment comment={comment} />
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="no-inquiry-wrapper">
            <img
              src={inquiryEmptyImage}
              alt="아직 문의가 없습니다."
              width="200px"
              height="200px"
            />
            <div className="no-inquiry-text">아직 문의가 없습니다.</div>
          </div>
        )}
      </div>
    </>
  );
}

export default CommentList;
