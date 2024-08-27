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
  const activeColor = isInputValid ? "bg-my-blue" : "bg-gray-400";
  return (
    <form className="m-container mt-[70px] pt-4">
      <div className="flex justify-between">
        <span className="font-bold text-xl">게시글 쓰기</span>
        <button
          onClick={onSubmitForm}
          className={`flex-center text-white btn w-[74px] h-[42px]${activeColor}`}
        >
          등록
        </button>
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
