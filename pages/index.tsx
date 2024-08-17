import { Token, TokenContext } from "@/context/TokenProvider";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { requestToken } = useContext(TokenContext) as Token;

  return (
    <div>
      <button onClick={requestToken}>토큰 발급받기</button>
      <Link href={`/boards`}>게시판가기</Link>
    </div>
  );
}
