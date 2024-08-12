import BestBoards from "@/components/BestBoards";
import NormalBoards from "@/components/NormalBoards";
import S from "@/styles/boards.module.css";

function Boards() {
  return (
    <div className={S.container}>
      <div className={S.mainBox}>
        <BestBoards />
      </div>
      <div className={S.footerBox}>
        <NormalBoards />
      </div>
    </div>
  );
}

export default Boards;
