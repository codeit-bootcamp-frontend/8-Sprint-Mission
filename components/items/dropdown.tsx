import Image from "next/image";

export default function DropDown({ orderBy }: { orderBy: "recent" | "favorite" }) {
  return (
    <>
      <p className='flex'>
        {orderBy === "recent" ? "최신순" : "좋아요순"}
        <Image priority src='ic_drop_arrow.svg' alt='▼' width={24} height={24} />
      </p>
      <ul>
        <li>최신순</li>
        <li>좋아요순</li>
      </ul>
    </>
  );
}
