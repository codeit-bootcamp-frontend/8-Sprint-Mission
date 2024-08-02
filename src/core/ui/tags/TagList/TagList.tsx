import styles from './TagList.module.scss';

interface TagListProps {
  tags: any;
  isSharpVisible: any;
}

function TagList({ tags = [], isSharpVisible }: TagListProps) {
  return (
    <>
      {tags.length > 0 && (
        <div className={styles['tag-list']}>
          {tags.map((tag: any, i: any) => (
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
