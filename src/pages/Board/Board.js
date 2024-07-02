import { Helmet } from 'react-helmet';
import Header from '../../layout/Header';
import './Board.scss';

function Board() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 자유게시판</title>
      </Helmet>
      <Header />;
    </>
  );
}

export default Board;
