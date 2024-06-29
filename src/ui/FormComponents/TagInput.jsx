import { useState, useRef } from 'react';
import styles from './TagInput.module.css';

export default function TagInput({
  label,
  id,
  className,
  insertTags,
  changeValue,
  ...props
}) {
  const [tags, setTags] = useState([]);
  const InputRef = useRef(null);

  const handleChangeInput = e => {
    const tagsValue = InputRef.current.value;
    changeValue(tagsValue);
  };

  const handleClearBtn = list => {
    setTags(prevItem => {
      const updateTag = prevItem.filter(item => item.id !== list.id);
      insertTags('tag', updateTag);
      return updateTag;
    });
  };

  const handleAddTags = e => {
    const tagsValue = InputRef.current;
    if (e.key === 'Enter' && tagsValue.value !== '') {
      setTags(prevTags => {
        if (!prevTags.some(tag => tag === tagsValue.value)) {
          const newTag = [...prevTags, tagsValue.value];
          insertTags('tag', newTag);
          return newTag;
        }
        return prevTags;
      });
      changeValue('');
    }
  };

  return (
    <div className={styles.inputBox}>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${className ? className : ''}`}
        id={id}
        {...props}
        ref={InputRef}
        onChange={handleChangeInput}
        onKeyDown={handleAddTags}
      />
      <div className={styles.tagContainer}>
        <ul className={styles.tagList}>
          {tags &&
            tags.map((list, index) => (
              <li key={`tag-${list}-${index}`} id={`tags-id-${list}-${index}`}>
                <span className={styles.tagTitle}>{list}</span>
                <i
                  onClick={() => handleClearBtn(list)}
                  className={styles.tagRemoveBtn}
                ></i>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
