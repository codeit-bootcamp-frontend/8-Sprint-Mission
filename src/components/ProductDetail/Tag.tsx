import "./Tag.css";

interface Props {
  tag: string;
}

function Tag({ tag }: Props) {
  return <div className="product-tag">#{tag}</div>;
}

export default Tag;
