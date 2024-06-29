import React, { useState, useEffect } from 'react';

function TagInput({ onTagListChange, reset }) {
  const [tagInput, setTagInput] = useState('');
  const [tagList, setTagList] = useState([]);
  const [showTagList, setShowTagList] = useState(false);

  const handleKeyPress = e => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      e.preventDefault();
      const newTagList = [...tagList, tagInput.trim()];
      setTagList(newTagList);
      setTagInput('');
      setShowTagList(true);
      onTagListChange(newTagList);
    }
  };

  const handleTagRemove = tagToRemove => {
    const updatedList = tagList.filter(tag => tag !== tagToRemove);
    setTagList(updatedList);
    onTagListChange(updatedList);
  };

  useEffect(() => {
    if (reset) {
      setTagList([]);
      setShowTagList(false);
      onTagListChange([]); // 부모 컴포넌트에 빈 태그 목록 전달
    }
  }, [reset]);
  return (
    <div className="tag-input-container">
      <input
        type="text"
        name="tag"
        placeholder="태그를 입력 후 Enter를 눌러 추가하세요"
        value={tagInput}
        onChange={e => setTagInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {showTagList && (
        <div className="tag-list-input">
          {tagList.map((tag, index) => (
            <span key={index}>
              {tag} <i className="icon ic_remove" onClick={() => handleTagRemove(tag)}></i>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default TagInput;
