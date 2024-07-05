import useProductDetailQuery from 'queries/useProductDetailQuery';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const { data: detail } = useProductDetailQuery(id);

  console.log(detail);

  return <div></div>;
}
export default ProductDetail;
