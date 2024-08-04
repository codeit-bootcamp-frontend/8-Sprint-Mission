import React, {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
} from "react";

// Tag 타입 정의
interface Tag {
  id: number;
  name: string;
}

interface TagInputProps {
  label: string;
  name: string;
  value: Tag[]; // Ensure this matches the expected type
  onTagListChange: (tags: Tag[]) => void; // Ensure this matches the expected type
  reset?: boolean;
  placeholder?: string;
}

const TagInput: React.FC<TagInputProps> = ({
  label,
  onTagListChange,
  reset,
}) => {
  const [tagInputValue, setTagInputValue] = useState<string>("");
  const [tagList, setTagList] = useState<Tag[]>([]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && tagInputValue.trim()) {
        e.preventDefault();
        const newTagName = tagInputValue.trim();
        const newTag: Tag = {
          id: Date.now(),
          name: newTagName,
        };
        const newTagList = [...tagList, newTag];
        setTagList(newTagList);
        onTagListChange(newTagList);
        setTagInputValue("");
      }
    },
    [tagInputValue, tagList, onTagListChange]
  );

  const handleTagRemove = useCallback(
    (tagIdToRemove: number) => {
      setTagList((prevTagList) => {
        const updatedList = prevTagList.filter(
          (tag) => tag.id !== tagIdToRemove
        );
        onTagListChange(updatedList);
        return updatedList;
      });
    },
    [onTagListChange]
  );

  useEffect(() => {
    if (reset) {
      setTagList([]);
      onTagListChange([]);
    }
  }, [reset, onTagListChange]);

  return (
    <div className="input-group">
      <label>{label}</label>
      <div className="tag-input-container">
        <input
          type="text"
          placeholder="태그를 입력 후 Enter를 눌러 추가하세요"
          value={tagInputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTagInputValue(e.target.value)
          }
          onKeyUp={handleKeyPress}
        />
        {tagList.length > 0 && (
          <div className="tag-list-input">
            {tagList.map((tag) => (
              <span key={tag.id}>
                {tag.name}{" "}
                <i
                  className="icon ic_remove"
                  onClick={(e: MouseEvent<HTMLElement>) =>
                    handleTagRemove(tag.id)
                  }
                  role="button"
                  aria-label="태그 제거 버튼"
                ></i>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TagInput;
