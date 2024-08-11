import heartIc from "assets/icons/ic_heart.png";

interface LikeCountProps {
  count: number | undefined;
}

const LikeCount = ({ count }: LikeCountProps) => {
  return (
    <div className="flex items-center text-xs font-medium gap-1 text-gray-500">
      <button
        className="w-4 h-4 bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${heartIc})` }}
      />
      <div>{count}</div>
    </div>
  );
};

export default LikeCount;
