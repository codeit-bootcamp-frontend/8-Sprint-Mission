import emptyReplyImg from "assets/images/img_reply_empty.png";

interface NoSearchResultProps {
  category: string;
}

const NoSearchResult = ({ category }: NoSearchResultProps) => {
  return (
    <>
      <img
        src={emptyReplyImg}
        alt="검색 결과 없음"
        className="w-[196px] h-[196px]"
      />
      <p className="text-gray-400">검색된 {category}이 없어요.</p>
    </>
  );
};

export default NoSearchResult;
