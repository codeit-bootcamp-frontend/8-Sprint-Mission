import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import S from "@/styles/addboard.module.css";
import Image from "next/image";

interface FormValues {
  images: File[];
  description: string;
  name: string;
}

type HandleChangeFunction = (name: string, value: string | File | null) => void;

function AddBoard() {
  const [values, setValues] = useState<FormValues>({
    images: [],
    description: "",
    name: "",
  });
  const [preview, setPreview] = useState("");
  const [pass, setPass] = useState(false);

  // 이미지 삭제
  const onClickImageDelete = () => {
    setValues((prevValues) => ({
      ...prevValues,
      images: [],
    }));
  };

  // 입력된 값을 state에 저장
  const handleChange: HandleChangeFunction = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 입력된 값을 파악하여 함수에 전달
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (files && files.length > 0) {
        const file = files[0];
        handleChange(name, file);
      } else {
        handleChange(name, null);
      }
    } else {
      handleChange(name, value);
    }
  };

  // TODO: 스프린트 미션에 API POST 관련 기능 요구 시 추가 예정, 현재는 테스트를 위한 코드
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  // 이미지 미리 보기 주소 생성, 삭제
  useEffect(() => {
    if (!values.images || values.images.length === 0) {
      return;
    }
    const image = values.images;

    if (!(image instanceof File)) {
      console.error("Expected a File object but got:", image);
      return;
    }

    const nextPreview = URL.createObjectURL(image);
    setPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
      setPreview("");
    };
  }, [values.images]);

  // 입력값 감지 후 조건 충족 시 등록 버튼 활성화
  useEffect(() => {
    function validation() {
      const { description, name } = values;
      const target = Boolean(description) && name !== "";

      return target;
    }
    const isValid = validation();
    setPass(isValid);
  }, [values]);

  return (
    <div>
      <main className={S.main}>
        <form onSubmit={handleSubmit} className={`${S.addItemBody} ${S.verticalAlign}`}>
          <article className={S.productRegister}>
            <h2 className={S.productRegisterTitle}>게시글 쓰기</h2>
            <button className={pass ? S.validButton : S.productRegisterBtn}>등록</button>
          </article>
          <article className={S.verticalAlign}>
            <label className={S.labelTitle}>*제목</label>
            <input
              onChange={handleInputChange}
              className={S.productInput}
              placeholder="제목을 입력해주세요"
              name="name"
              value={values.name}
              type="text"
            />
          </article>
          <article className={S.verticalAlign}>
            <label className={S.labelTitle}>*내용</label>
            <textarea
              onChange={handleInputChange}
              className={S.productDescriptionText}
              value={values.description}
              name="description"
              placeholder="내용을 입력해주세요"
            />
          </article>
          <article className={S.productImageContainer}>
            <span className={S.productImageTitle}>이미지</span>
            <div className={S.imageUploadBox}>
              <label className={S.verticalAlign} htmlFor="file-upload">
                <div className={S.imageUpload}>
                  <Image
                    src="/images/icon/btn_icon/ic_plus.png"
                    alt="이미지 추가 버튼"
                    width={48}
                    height={48}
                  />
                  <span className={S.imageUploadText}>이미지 등록</span>
                </div>
              </label>
              {preview ? (
                <div className={S.imageUploadSelect}>
                  <div className={S.imageBox}>
                    <Image fill className={S.imageUpload} alt="등록된 이미지" src={preview} />
                  </div>
                  <div className={S.imageUploadDelete} onClick={onClickImageDelete}>
                    <Image
                      src="/images/icon/btn_icon/ic_delete_btn.png"
                      alt="등록된 이미지 삭제 버튼"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <input
              onChange={handleInputChange}
              type="file"
              name="images"
              id="file-upload"
              className={S.imageUploadInput}
            />
          </article>
        </form>
      </main>
    </div>
  );
}

export default AddBoard;
