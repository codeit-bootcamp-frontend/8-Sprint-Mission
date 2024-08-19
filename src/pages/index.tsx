import GlobalNavBar from "@/components/@shared/GlobalNavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <GlobalNavBar />
      <div className="text-4xl">
        <Link href="/boards">자유게시판</Link>
        <br />
        <Link href="/boards/add">게시글작성</Link>
        <br />
        <Link href="/boards/1">게시글세부사항</Link>
      </div>
    </>
  );
}
