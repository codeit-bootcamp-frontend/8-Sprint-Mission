import React, { useState, useEffect, useCallback } from 'react';

const TagInput = ({ label, onTagListChange }) => {
  const [tagInputValue, setTagInputValue] = useState('');
  const [tagList, setTagList] = useState([]);

  const handleKeyPress = useCallback(
    e => {
      if (e.key === 'Enter' && tagInputValue.trim()) {
        e.preventDefault();
        const newTagName = tagInputValue.trim();
        const newTag = {
          id: Date.now(),
          name: newTagName,
        };
        const newTagList = [...tagList, newTag];
        setTagList(newTagList);
        onTagListChange(newTagList);
        setTagInputValue('');
      }
    },
    [tagInputValue, tagList, onTagListChange],
  );

  const handleTagRemove = useCallback(
    tagIdToRemove => {
      setTagList(prevTagList => {
        const updatedList = prevTagList.filter(tag => tag.id !== tagIdToRemove);
        onTagListChange(updatedList);
        return updatedList;
      });
    },
    [onTagListChange],
  );

  return (
    <div className="input-group">
      <label>{label}</label>
      <div className="tag-input-container">
        <input
          type="text"
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
    </div>
  );
};

export default TagInput;
