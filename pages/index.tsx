import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-[100px]">
        <Link href="/boards">게시판가기</Link>
      </div>
      <div className="mt-[100px]">
        <Link href="/addboard">게시판글쓰기</Link>
      </div>
    </>
  );
}
