import { useState } from 'react';
import './TagInput.css';

interface TagInputProps {
  className: string;
  name: string;
  tags: string[];
  onAdd: (text: string) => void;
  onRemove: (text: string) => void;
}

function TagInput({
  className = '',
  name,
  tags = [],
  onAdd,
  onRemove,
}: TagInputProps) {
  const [targetText, setTargetText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value.trim()) return;
    setTargetText(value);
  };

  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && targetText) {
      e.preventDefault();
      onAdd(targetText.trim());
      setTargetText('');
    }
  };

  const handleDeleteTag = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onRemove((e.currentTarget.parentNode as HTMLElement).dataset.tagName || '');
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
            {tags.map((tag: string, i: number) => (
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
