import DetailBoard from "@/components/DetailBoard";
import DetailBoardComments from "@/components/DetailBoardComments";
import S from "@/styles/board.module.css";
function Board() {
  return (
    <div className={S.Container}>
      <DetailBoard />
      <DetailBoardComments />
    </div>
  );
}

export default Board;
