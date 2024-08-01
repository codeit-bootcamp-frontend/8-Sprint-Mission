import React, { useState, ChangeEvent, FormEvent } from "react";
import InquiryComments from "./InquiryComments";

interface InquiryInputProps {
  productId: number | undefined;
}

function InquiryInput({ productId }: InquiryInputProps) {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [inquiryInput, setInquiryInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInquiryInput(value);
    setIsFormValid(value.trim().length > 0);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="inquiry">
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="line" />
          <label htmlFor="inquiry-input" className="section-title">
            문의하기
          </label>
          <textarea
            className="item-detail-input inquiry-input"
            id="inquiry-input"
            value={inquiryInput}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className={`inquiry-submit-btn ${isFormValid ? "active-btn" : ""}`}
            disabled={!isFormValid}
          >
            등록
          </button>
        </form>
      </section>
      <InquiryComments productId={productId} />
    </>
  );
}

export default InquiryInput;
