import instance from "@/apis/instance";

interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  writer: { id: number; nickname: string };
  createdAt: Date;
  updatedAt: Date;
}

export async function getServerSideProps() {
  const res = await instance.get("/articles?page=1&pageSize=10&orderBy=like");
  const articles = res.data.results ?? [];

  return {
    props: {
      articles,
    },
  };
}

interface BoardsProps {
  articles: Article[];
}

export default function Boards({ articles }: BoardsProps) {
  console.log(articles);
  return (
    <>
      <div>자유게시판!</div>
    </>
  );
}
