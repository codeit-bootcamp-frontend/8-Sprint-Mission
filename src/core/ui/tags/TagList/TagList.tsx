import styles from './TagList.module.scss';

function TagList({ tags = [], isSharpVisible }) {
  return (
    <>
      {tags.length > 0 && (
        <div className={styles['tag-list']}>
          {tags.map((tag, i) => (
            <div
              className={styles['tag-list__tag']}
              key={`tag-item-${i}`}
              data-tag-name={tag}
            >
              {`${isSharpVisible ? '#' : ''}${tag}`}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default TagList;
