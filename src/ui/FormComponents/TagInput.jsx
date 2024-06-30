import { useState } from 'react';
import styles from './TagInput.module.css';

export default function TagInput({
  label,
  id,
  name,
  className,
  tags,
  handleChange,
  changeValue,
  ...props
}) {
  const [tagValue, setTagValue] = useState('');

  const handleChangeInput = e => {
    let { value } = e.target;
    setTagValue(value);
  };

  const handleAddTags = e => {
    let { value } = e.target;
    if (e.key === 'Enter' && tagValue !== '') {
      const existingTag =
        tags && tags.some(tag => tag.name === tagValue.trim());
      if (!existingTag) {
        const newTag = {
          id: `${value}-${Math.random().toString(36).substring(2, 9)}`,
          name: tagValue.trim(),
        };
        const newTags = [...tags, newTag];
        changeValue(name, newTags);
      }
      setTagValue('');
    }
  };

  const handleRemoveTag = list => {
    const updateTag = tags.filter(item => item.id !== list.id);
    changeValue(name, updateTag);
  };

  return (
    <div className={styles.inputBox}>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${className ? className : ''}`}
        id={id}
        {...props}
        value={tagValue}
        onChange={handleChangeInput}
        onKeyDown={handleAddTags}
      />
      <div className={styles.tagContainer}>
        <ul className={styles.tagList}>
          {tags &&
            tags.map(tag => (
              <li key={tag.id} id={tag.id}>
                <span className={styles.tagTitle}>{tag.name}</span>
                <i
                  onClick={() => handleRemoveTag(tag)}
                  className={styles.tagRemoveBtn}
                ></i>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
