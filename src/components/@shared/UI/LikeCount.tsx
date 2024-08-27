import heartIc from "assets/icons/ic_heart.png";

interface LikeCountProps {
  count: number | undefined;
  divClassName?: string;
}

const LikeCount = ({ count, divClassName }: LikeCountProps) => {
  return (
    <div
      className={`${divClassName} flex items-center text-xs font-medium gap-1 text-gray-500`}
    >
      <button className="w-4 h-4 p-0 border-none">
        <img src={heartIc} alt="하트 아이콘" width={16} height={16} />
      </button>
      <div>{count}</div>
    </div>
  );
};

export default LikeCount;
