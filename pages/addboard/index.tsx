import React, { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
import FileInput from "@/components/form/FileInput";
import TextArea from "@/components/form/TextArea";
import TextInput from "@/components/form/TextInput";
import Button from "@/components/ui/Button";

function AddBoard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");

  const router = useRouter();

  const isSubmitDisabled = !title.trim() || !content.trim();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  const handleImageDelete = () => {
    setImagePreviewUrl("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log("등록"); // 디버깅을 위한 콘솔 로그
      router.push("/boards");
    } catch (error) {
      console.error("폼 제출 중 오류 발생:", error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="section-header">
          <h2 className="title">게시글 쓰기</h2>
          <Button
            size="sm"
            color="primary"
            type="submit"
            disabled={isSubmitDisabled}
          >
            등록
          </Button>
        </div>
        <TextInput
          id="title"
          label="*제목"
          name="article-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
        />
        <TextArea
          id="content"
          label="*내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력해주세요"
          rows={10}
        />
        <FileInput
          id="fileImage"
          label="이미지"
          imagePreviewUrl={imagePreviewUrl}
          onImageChange={handleImageChange}
          onImageDelete={handleImageDelete}
        />
      </form>
    </section>
  );
}

export default AddBoard;
