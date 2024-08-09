import BestBoards from "@/components/BestBoards";
import S from "@/styles/boards.module.css";
function Boards() {
  return (
    <>
      <div className={S.mainBox}>
        <BestBoards />
      </div>
      <div className={S.footerBox}>
        <></>
      </div>
    </>
  );
}

export default Boards;
