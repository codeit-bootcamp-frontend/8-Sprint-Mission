import { KeyboardEvent, useState } from 'react';
import './TagInput.css';
import InputItem from '@/components/InputItem';
import RemoveIcon from './RemoveIcon';

interface TagInputProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

function TagInput({ tags, onAddTag, onRemoveTag }: TagInputProps) {
  const [input, setInput] = useState('');

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    const inputString = input.trim();
    if (e.key === 'Enter' && inputString) {
      e.preventDefault();
      onAddTag(inputString);
      setInput('');
    }
  };

  return (
    <div>
      <InputItem
        id='tags'
        label='태그'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onPressEnter}
        placeholder='태그를 입력해 주세요'
      />

      {tags.length > 0 && (
        <div className='tagSection'>
          {tags.map((tag) => (
            <div key={tag} className='tag'>
              <span className='tagText'>{tag}</span>

              <RemoveIcon onClick={() => onRemoveTag(tag)} label={`${tag} 태그`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TagInput;
