import React from "react";

export default function MarketDetailComment({ comments }) {
  return (
    <div>
      <div className="question-container">
        <div>
          <hr className="line2" />
          <p>문의하기</p>

          <div className="question-box">
            개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보
            유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은
            게시자에게 있습니다.
          </div>
        </div>

        <button className="register">등록</button>

        <div className="question-list">
          {comments.length > 0 &&
            comments.map((q, i) => {
              return (
                <div key={i}>
                  <p>{q.content}</p>
                  <p>{q.createdAt}</p>
                  <p>{q.writer.nickname}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
