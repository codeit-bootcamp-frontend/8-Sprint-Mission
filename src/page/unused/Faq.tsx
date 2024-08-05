import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './unused.css';

function FaqPage() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - FAQ</title>
      </Helmet>

      <Link to='/' className='go-back' />
    </>
  );
}

export default FaqPage;
