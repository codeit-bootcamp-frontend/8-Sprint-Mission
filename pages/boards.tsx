import Navbar from "@/components/Navbar";
import AllArticles from "@/components/AllArticles";
import BestArticles from "@/components/BestArticles";

export default function Boards() {
  return (
    <>
      <Navbar />
      <BestArticles />
      <AllArticles />
    </>
  );
}
