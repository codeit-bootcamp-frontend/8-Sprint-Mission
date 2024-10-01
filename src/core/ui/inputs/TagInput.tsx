import { useState } from 'react';

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
    <div className={`flex flex-col items-start w-full ${className}`}>
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
        <div className="flex flex-row flex-wrap items-start w-full m-0">
          {tags.map((tag: string, i: number) => (
            <div
              className="flex items-center m-3 first:ml-0 last:mr-0 py-3 px-4 rounded-full bg-gray-100"
              key={`tag-item-${i}`}
              data-tag-name={tag}
            >
              {tag}
              <button
                className="text-white w-5 h-5 ml-1.5 bg-gray-500 rounded-full text-sm font-normal"
                onClick={handleDeleteTag}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TagInput;
