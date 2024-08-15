import { Context, TokenContext } from "@/context/TokenProvider";
import axios from "@/lib/axios";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { accessToken, refreshToken, onClickSignIn } = useContext(
    TokenContext
  ) as Context;
  console.log(accessToken);
  console.log(refreshToken);
  return (
    <div>
      <button onClick={onClickSignIn}>토큰 발급받기</button>
      <Link href={`/boards`}>게시판가기</Link>
    </div>
  );
}
