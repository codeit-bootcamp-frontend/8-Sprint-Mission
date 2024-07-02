import { Helmet } from 'react-helmet';
import Header from '../../layout/Header';
import './AddBoard.scss';

function AddBoard() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 자유게시판 등록</title>
      </Helmet>
      <Header />;
    </>
  );
}

export default AddBoard;
