import GlobalNavBar from "@/components/@shared/GlobalNavBar";
import BestPosts from "@/components/boards/BestPosts";
import PostList from "@/components/boards/PostList";

export default function Boards() {
  return (
    <>
      <GlobalNavBar isMain={false} isLogin />
      <main className="flex flex-col gap-[24px] mt-[16px] md:mt-[24px] mx-[16px] md:mx-[24px] xl:mx-auto xl:w-[1200px]">
        <BestPosts />
        <PostList />
      </main>
    </>
  );
}
