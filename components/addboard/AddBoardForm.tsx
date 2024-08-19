import Button from "@/components/ui/Button";
import FileInput from "@/components/ui/FileInput";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import useAddBoard from "@/hooks/useAddBoard";

export default function AddBoardForm() {
  const {
    inputValues,
    onChangeInput,
    onSubmitForm,
    onChangeFileInput,
    isInputValid,
  } = useAddBoard();
  return (
    <form className="m-container mt-[70px] pt-4">
      <div className="flex justify-between">
        <span className="font-bold text-xl">게시글 쓰기</span>
        <Button
          className="btn w-[74px] h-[42px]"
          onClick={onSubmitForm}
          activeBtn={isInputValid}
        >
          등록
        </Button>
      </div>
      <Input
        name="title"
        placeholder="제목을 입력해주세요"
        type="input"
        label="*제목"
        value={inputValues.title}
        onChange={onChangeInput}
      />
      <TextArea
        name="content"
        placeholder="내용을 입력해 주세요"
        label="*내용"
        value={inputValues.content}
        onChange={onChangeInput}
      />
      <FileInput
        value=""
        onChange={onChangeFileInput}
        name="image"
        label="이미지"
        image={inputValues.image}
      />
    </form>
  );
}
