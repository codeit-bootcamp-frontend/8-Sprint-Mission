import { ChangeEvent, useState } from "react";
import FileInput from "@/components/FileInput";
import styles from "./addboard.module.css";
// import { useRouter } from "next/router";

interface AddBoardState {
  title: string;
  description: string;
  imgFile: File | null;
}

export default function AddBoard() {
  const [values, setValues] = useState<AddBoardState>({
    title: "",
    description: "",
    imgFile: null,
  });
  // const router = useRouter();

  const handleFormValuesChange = (name: keyof AddBoardState, value: any) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleFormValuesChange(name as keyof AddBoardState, value);
  };

  const isSubmitDisabled = !values.title || !values.description;

  // const handleButtonClick = () => {
  //   if (!isSubmitDisabled) router.push(`/${id}`);
  // };

  return (
    <>
      <div className={styles.writingWrapper}>
        <div className={styles.writing}>게시글 쓰기</div>
        <button
          type="submit"
          className={`${styles.button} ${
            !isSubmitDisabled ? styles.active : ""
          }`}
          disabled={isSubmitDisabled}
          // onClick={handleButtonClick}
        >
          등록
        </button>
      </div>

      <form className={styles.boardForm}>
        <label htmlFor="input-title" className={styles.label}>
          *제목
        </label>
        <input
          className={styles.title}
          name="title"
          value={values.title}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
        <label htmlFor="input-description" className={styles.label}>
          *내용
        </label>
        <textarea
          className={styles.description}
          name="description"
          value={values.description}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />
      </form>
      <div className={styles.imgForm}>
        <label htmlFor="input-img" className={styles.label}>
          이미지
        </label>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={(name, file) =>
            handleFormValuesChange(name as keyof AddBoardState, file)
          }
        />
      </div>
    </>
  );
}
