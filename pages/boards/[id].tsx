import { useRouter } from "next/router";

export default function Board() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Board 페이지 {id}</div>;
}
