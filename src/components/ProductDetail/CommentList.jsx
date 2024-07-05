import { useMemo, useState } from "react";
import "./CommentList.css";

function CommentList() {
  const placeholder =
    "개인정보를 공유 및 요청하거나 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, " +
    "이에 대한 민형사상 책임은 게시자에게 있습니다.";

  const [isInputFill, setIsInputFill] = useState(false);

  const handleValueChange = (e) => {
    setIsInputFill(e.target.value !== "");
  };

  const buttonClassName = isInputFill
    ? "add-ask-button active"
    : "add-ask-button";

  return (
    <div className="ask-wrapper">
      <label className="ask-label" htmlFor="ask">
        문의하기
      </label>
      <textarea
        className="ask-content"
        id="ask"
        placeholder={placeholder}
        onChange={handleValueChange}
      ></textarea>
      <button className={buttonClassName} disabled={!isInputFill}>
        등록
      </button>
    </div>
  );
}

export default CommentList;
