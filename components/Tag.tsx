interface TagProps {
  tag: string;
}

function Tag({ tag }: TagProps) {
  return <div className="product-tag">#{tag}</div>;
}

export default Tag;
