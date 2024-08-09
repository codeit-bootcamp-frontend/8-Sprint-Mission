import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/boards">자유게시판</Link>
      <br />
      <Link href="/boards/add">게시글작성</Link>
      <br />
      <Link href="/boards/1">게시글세부사항</Link>
    </div>
  );
}
