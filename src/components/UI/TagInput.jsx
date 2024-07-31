import { useState } from "react";
import DeleteIcon from "../../assets/deleteIcon.png";

const TagInput = ({ tags, onAddTag, onRemoveTag }) => {
  const [input, setInput] = useState("");

  const onPressEnter = (event) => {
    if (event.nativeEvent.isComposing) return;

    const inputString = input.trim();
    if (event.key === "Enter" && inputString) {
      event.preventDefault();
      onAddTag(inputString);
      setInput("");
    }
  };

  return (
    <>
      <label htmlfor="input-tag" className="input-label">
        태그
      </label>
      <input
        className="input-tag"
        name="tag"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onPressEnter}
        placeholder="태그를 입력해주세요"
      />
      {tags.length > 0 && (
        <ul id="input-tags">
          {tags.map((tag, index) => (
            <li key={index} className="input-tag">
              <span className="input-tag-title">{tag}</span>
              <img
                src={DeleteIcon}
                className="tag-close-icon"
                onClick={() => onRemoveTag(tag)}
                alt="삭제 아이콘"
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TagInput;
