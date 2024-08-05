import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './unused.css';

function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - Privacy</title>
      </Helmet>

      <Link to='/' className='go-back' />
    </>
  );
}

export default PrivacyPage;
