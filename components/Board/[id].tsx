import { useRouter } from "next/router";

export default function Articles() {
  const router = useRouter();
  const { articles } = router.query;

  return <div>article {articles}</div>;
}
