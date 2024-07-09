import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './ItemsPage.scss';

import Header from '../../layout/Header';
import Loadingbar from '../../components/ui/Loadingbar';

import useProductId from '../../hooks/useProductId';
import useInquery from '../../hooks/useInquery';

import ProductInfo from './components/ProductInfo';
import InqueryForm from './components/InqueryForm';
import InqueryList from './components/InqueryList';

function ItemsPage() {
  const { productId } = useParams();
  const { product, isLoading: productLoading, error: productError } = useProductId(productId);
  const { inquiries, isLoading: inquiriesLoading, error: inquiriesError } = useInquery(productId);

  const [newComment, setNewComment] = useState('');

  const handleSubmit = () => {
    alert('문의하기가 등록되었습니다.');
    setNewComment('');
  };

  if (productLoading || inquiriesLoading) {
    return (
      <div className="bg-dark">
        <Loadingbar />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>판다마켓</title>
      </Helmet>
      <Header />
      <main className="main-top">
        <ProductInfo product={product} />
        <section className="inquiry-wrap">
          <InqueryForm newComment={newComment} setNewComment={setNewComment} handleSubmit={handleSubmit} />
          <InqueryList inquiries={inquiries} />
        </section>
      </main>
    </>
  );
}

export default ItemsPage;
