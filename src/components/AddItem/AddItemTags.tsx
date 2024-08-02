import React, { ChangeEvent, useState } from "react";
import { Tag } from "../../pages/AddItem";

const AddItemTags: React.FC<{ initialTags: Tag[] }> = ({ initialTags }) => {
  const [tags, setTags] = useState<Tag[]>(initialTags);
  const [tagInput, setTagInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    <div className="item-detail-container">
      <label className="font-bold text-gray-800 text-lg">태그</label>
      <input
        className="item-detail-input"
        type="text"
        placeholder="태그를 입력해주세요"
        value={tagInput}
        onChange={handleInputChange}
        onKeyDown={handleAddTag}
      />
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag.id} className="tag-item">
            {tag.name}
            <button
              className="ic-delete-gray"
              onClick={() => handleRemoveTag(tag.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddItemTags;
