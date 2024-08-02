import React, { ChangeEvent, useState } from "react";

function Inquiry() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      문의하기
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <button disabled={!inputValue.trim()}>등록</button>
    </div>
  );
}

export default Inquiry;
