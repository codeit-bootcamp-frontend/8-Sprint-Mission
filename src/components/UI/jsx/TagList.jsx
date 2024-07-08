import React from "react";
import "@components/UI/scss/TagList.scss";

/**
 * 태그 리스트
 *
 * @param {Array} tags - 태그 배열
 * @param {function} onDelete - 태그가 지워질 때 실행할 함수
 * @param {boolean} canDelete - 태그를 지울 수 있으면 X 아이콘 표시
 * @returns {JSX.Element} - 태그 리스트 컴포넌트
 */
export default function TagList({ tags, onDelete, canDelete }) {
  return (
    <div className="TagList TagList__tagsList">
      {tags.map((tag, index) => (
        <>
          <span key={`tag-${index}`} className="TagList__tag">
            {"# " + tag}
            {canDelete && (
              <i
                className="TagList__icX TagList__icX--tag"
                key={`xBtn-${index}`}
                role="button"
                aria-label="태그 삭제 버튼"
                onClick={() => onDelete(tag)}
              />
            )}
          </span>
        </>
      ))}
    </div>
  );
}
