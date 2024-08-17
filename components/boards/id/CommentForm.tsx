import Button from "@/components/ui/Button";
import TextArea from "@/components/ui/TextArea";
import useCommentForm from "@/hooks/useCommentForm";

export default function CommentForm() {
  const { value, onChangeTextArea, isValid, onClickAddComment } =
    useCommentForm();
  return (
    <form className="relative">
      <TextArea
        label="댓글달기"
        name="commentInput"
        placeholder="댓글을 입력해주세요."
        onChange={onChangeTextArea}
        className="h-[104px]"
        value={value}
      />
      <Button
        onClick={onClickAddComment}
        activeBtn={isValid}
        className="w-[74px] h-[42px] absolute right-0"
      >
        등록
      </Button>
    </form>
  );
}
