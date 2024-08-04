// src/components/InqueryForm/InqueryForm.tsx

import React from "react";
import { InqueryFormProps } from "../../../types/formTypes";

const InqueryForm: React.FC<InqueryFormProps> = ({
  newComment,
  setNewComment,
  handleSubmit,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const isFormValid = newComment.trim() !== "";

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>문의하기</label>
        <textarea
          rows={3}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={newComment}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn-sm btn-primary submit"
          disabled={!isFormValid}
        >
          등록
        </button>
      </div>
    </form>
  );
};

export default InqueryForm;
