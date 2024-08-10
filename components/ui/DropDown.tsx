interface Props {
  onClick: (orderBy: "recent" | "like") => void;
}

export default function DropDown({ onClick }: Props) {
  return (
    <div className="absolute w-[130px] h-auto flex flex-col right-0 -bottom-[95px] bg-white border  rounded-xl">
      <button
        onClick={() => {
          onClick("recent");
        }}
        className="h-[42px] w-full flex-center  border-b"
      >
        최신순
      </button>
      <button
        onClick={() => {
          onClick("like");
        }}
        className="h-[42px] w-full"
      >
        좋아요순
      </button>
    </div>
  );
}
