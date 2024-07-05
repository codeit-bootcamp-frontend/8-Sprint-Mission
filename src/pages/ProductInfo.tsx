import ProductDetail from 'components/productInfo/ProductDetail';
import { Suspense } from 'react';

function ProductInfo() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetail />
      </Suspense>
    </div>
  );
}
export default ProductInfo;
