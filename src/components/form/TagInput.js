import React, { useState, useEffect, useCallback } from 'react';

const TagInput = ({ onTagListChange, reset }) => {
  const [tagInputValue, setTagInputValue] = useState('');
  const [tagList, setTagList] = useState([]);

  const handleKeyPress = useCallback(
    e => {
      if (e.key === 'Enter' && tagInputValue.trim()) {
        e.preventDefault();

        const newTag = {
          id: Date.now(), // 고유 ID 생성 (현재 시간 기반)
          name: tagInputValue.trim(),
        };

        const newTagList = [...tagList, newTag];
        setTagList(newTagList);
        setTagInputValue('');
        onTagListChange(newTagList);
      }
    },
    [tagInputValue, tagList, onTagListChange],
  );
  const handleTagRemove = useCallback(
    tagIdToRemove => {
      const updatedList = tagList.filter(tag => tag.id !== tagIdToRemove);
      setTagList(updatedList);
      onTagListChange(updatedList);
    },
    [tagList, onTagListChange],
  );

  useEffect(() => {
    if (reset) {
      setTagList([]);
      onTagListChange([]);
    }
  }, [reset, onTagListChange]);

  return (
    <div className="tag-input-container">
      <input
        type="text"
        name="tag"
        placeholder="태그를 입력 후 Enter를 눌러 추가하세요"
        value={tagInputValue}
        onChange={e => setTagInputValue(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      {tagList.length > 0 && (
        <div className="tag-list-input">
          {tagList.map(tag => (
            <span key={tag.id}>
              {tag.name} <i className="icon ic_remove" onClick={() => handleTagRemove(tag.id)}></i>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagInput;
