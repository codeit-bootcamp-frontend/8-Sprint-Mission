import React, { ChangeEvent, useState } from "react";
import TextareaInput from "components/@shared/UI/form/TextareaInput";
import { Tag } from "pages/AddItem";
import grayXIc from "assets/icons/ic_X_gray.png";

const AddItemTags: React.FC<{ initialTags: Tag[] }> = ({ initialTags }) => {
  const [tags, setTags] = useState<Tag[]>(initialTags);
  const [tagInput, setTagInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, { id: Date.now(), name: tagInput.trim() }]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <>
      <TextareaInput
        title="태그"
        htmlFor="itemTag"
        value={tagInput}
        onChange={handleInputChange}
        onKeyDown={handleAddTag}
        placeholder="태그를 입력해주세요"
        className="h-[56px]"
      />
      <ul className="flex felx-row gap-3">
        {tags.map((tag) => (
          <li
            key={tag.id}
            className="bg-gray-100 flex gap-2 rounded-[26px] px-3 py-[6px] mt-[14px] text-gray-900"
          >
            #{tag.name}
            <button onClick={() => handleRemoveTag(tag.id)}>
              <img src={grayXIc} alt="삭제 아이콘" width={22} height={24} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AddItemTags;
