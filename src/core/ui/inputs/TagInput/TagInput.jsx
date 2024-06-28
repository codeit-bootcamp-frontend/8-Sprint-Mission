import { useState } from 'react';
import './TagInput.css';

function TagInput({ className = '', name, tags = [], onAdd, onRemove }) {
  const [targetText, setTargetText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    if (!value.trim()) return;
    setTargetText(value);
  };

  const handlePress = (e) => {
    if (e.key === 'Enter' && targetText) {
      e.preventDefault();
      onAdd(targetText.trim());
      setTargetText('');
    }
  };

  const handleDeleteTag = (e) => {
    onRemove(e.currentTarget.parentNode.dataset.tagName);
  };

  return (
    <>
      <div className={`wrapper-input-tags ${className}`}>
        <input
          className="input-form-add-item"
          type="text"
          id={name}
          name={name}
          value={targetText || ''}
          onChange={handleChange}
          onKeyDown={handlePress}
          placeholder="태그를 입력해주세요"
        />
        {tags.length > 0 && (
          <div className="wrapper-list-tag-input-tag">
            {tags.map((tag, i) => (
              <div
                className="tag-input-tag"
                key={`tag-item-${i}`}
                data-tag-name={tag}
              >
                {tag}
                <button className="btn-delete-tag" onClick={handleDeleteTag}>
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TagInput;
