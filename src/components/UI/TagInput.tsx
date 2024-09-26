import { KeyboardEvent, useState } from "react";
import DeleteIcon from "../../assets/deleteIcon.png";

interface TagInputProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

const TagInput = ({ tags, onAddTag, onRemoveTag }: TagInputProps) => {
  const [input, setInput] = useState<string>("");

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    const inputString = input.trim();
    if (e.key === "Enter" && inputString) {
      e.preventDefault();
      onAddTag(inputString);
      setInput("");
    }
  };

  return (
    <>
      <label htmlFor="input-tag" className="input-label">
        태그
      </label>
      <input
        className="input input-tag"
        name="tag"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onPressEnter}
        placeholder="태그를 입력해주세요"
      />
      {tags.length > 0 && (
        <ul id="taginput-tags">
          {tags.map((tag, index) => (
            <li key={index} className="taginput-tag">
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
