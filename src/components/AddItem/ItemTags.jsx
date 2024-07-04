import React, { useState } from "react";

function ItemTags({ initialTags }) {
  const [tags, setTags] = useState(initialTags);
  const [tagInput, setTagInput] = useState("");

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((element, i) => i !== index));
  };

  return (
    <div className="item-detail-container">
      <label className="section-title">태그</label>
      <input
        className="item-detail-input"
        type="text"
        placeholder="태그를 입력해주세요"
        value={tagInput}
        onChange={handleInputChange}
        onKeyDown={handleAddTag}
      />
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag-item">
            {tag}
            <button
              className="ic-delete-gray"
              onClick={() => handleRemoveTag(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemTags;
