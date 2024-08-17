import ArticleDetail from "@/components/boards/id/ArticleDetail";
import CommentForm from "@/components/boards/id/CommentForm";
import CommentList from "@/components/boards/id/CommentList";
import BackToListButton from "@/components/ui/BackToListButton";
export default function ArticleDetailPage() {
  return (
    <div className="m-container mt-[70px] pt-6">
      <ArticleDetail />
      <CommentForm />
      <CommentList />
      <div className="flex-center">
        <BackToListButton />
      </div>
    </div>
  );
}
