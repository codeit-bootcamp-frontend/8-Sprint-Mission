import ReactDOM from 'react-dom/client';
import './index.css'
import Main from './Main';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
      />
    </Helmet>
    <Main />
  </>
);