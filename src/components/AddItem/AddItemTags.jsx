import React, { useState } from "react";

function AddItemTags({ initialTags }) {
  const [tags, setTags] = useState(initialTags);
  const [tagInput, setTagInput] = useState("");

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, { id: Date.now(), value: tagInput.trim() }]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
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
        {tags.map((tag) => (
          <li key={tag.id} className="tag-item">
            {tag.value}
            <button
              className="ic-delete-gray"
              onClick={() => handleRemoveTag(tag.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddItemTags;
