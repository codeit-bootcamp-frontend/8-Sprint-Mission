interface TagListProps {
  tags: string[];
  isSharpVisible: boolean;
}

function TagList({ tags = [], isSharpVisible }: TagListProps) {
  return (
    <>
      {tags.length > 0 && (
        <div className="flex flex-wrap items-start w-full gap-3">
          {tags.map((tag: string, i: number) => (
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full text-gray-600 bg-gray-100 text-sm font-medium"
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
