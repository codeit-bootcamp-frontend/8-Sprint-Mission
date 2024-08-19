import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import S from "@/styles/addBoard.module.css";
import Image from "next/image";

interface FormValues {
  images: File[];
  tags: string[];
  price: string;
  description: string;
  name: string;
}

type HandleChangeFunction = (name: string, value: string | File | null) => void;

function AddItem() {
  const [values, setValues] = useState<FormValues>({
    images: [],
    tags: [],
    price: "",
    description: "",
    name: "",
  });
  const [preview, setPreview] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [pass, setPass] = useState(false);

  // 이미지 삭제
  const onClickImageDelete = () => {
    setValues((prevValues) => ({
      ...prevValues,
      images: [],
    }));
  };

  // 태그 삭제
  const onClickTagDelete = (deleteTag: string) => {
    const restTag = values.tags.filter((tag) => tag !== deleteTag);
    setValues((prevValues) => ({
      ...prevValues,
      tags: restTag,
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
  // 태그 인풋의 입력값 파악
  const handleTagInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  // TODO: 스프린트 미션에 API POST 관련 기능 요구 시 추가 예정, 현재는 테스트를 위한 코드
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  // 태그 인풋 엔터키 감지 후 입력값 state에 저장 및 태그 인풋 초기화
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      const tag = tagInput.trim();
      if (tag && !values.tags.includes(tag)) {
        setValues((prevValues) => ({
          ...prevValues,
          tags: [...prevValues.tags, tag],
        }));
        setTagInput("");
      } else {
        alert("비어있거나 중복된 태그입니다.");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [tagInput, values.tags]);

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
      const { tags, price, description, name } = values;
      const target = Boolean(price) && Boolean(description) && name !== "";
      const tagCheck = tags.length > 0;

      return target && tagCheck;
    }
    const isValid = validation();
    setPass(isValid);
  }, [values, tagInput, values.tags]);
  return (
    <div>
      <main className={S.main}>
        <form onSubmit={handleSubmit} className={`${S.addItemBody} ${S.verticalAlign}`}>
          <article className={S.productRegister}>
            <h2 className={S.productRegisterTitle}>상품 등록하기</h2>
            <button className={pass ? S.validButton : S.productRegisterBtn}>등록</button>
          </article>
          <article>
            <span className={S.productImageTitle}>상품 이미지</span>
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
          <article className={S.verticalAlign}>
            <label className={S.labelTitle}>상품명</label>
            <input
              onChange={handleInputChange}
              className={S.productInput}
              placeholder="상품명을 입력해주세요"
              name="name"
              value={values.name}
              type="text"
            />
          </article>
          <article className={S.verticalAlign}>
            <label className={S.labelTitle}>상품 소개</label>
            <textarea
              onChange={handleInputChange}
              className={S.productDescriptionText}
              value={values.description}
              name="description"
              placeholder="상품 소개를 입력해주세요"
            />
          </article>
          <article className={S.verticalAlign}>
            <label className={S.labelTitle}>판매 가격</label>
            <input
              onChange={handleInputChange}
              className={S.productInput}
              placeholder="판매 가격을 입력해주세요"
              value={values.price}
              name="price"
              type="number"
            />
          </article>
          <article className={S.verticalAlign}>
            <label className={S.labelTitle}>태그</label>
            <input
              onChange={handleTagInputChange}
              className={S.productInput}
              placeholder="태그를 입력해주세요"
              value={tagInput}
              name="tags"
              type="text"
            />
          </article>
          {values.tags.length > 0 ? (
            <ul className={S.tagsContainer}>
              {values.tags.map((tag, index) => (
                <li className={S.tags} key={tag + index}>
                  <div className={S.tagValue}>{tag}</div>
                  <Image
                    onClick={() => onClickTagDelete(tag)}
                    src="/images/icon/btn_icon/ic_delete_btn_gray.png"
                    alt="등록된 태그 삭제 버튼"
                    width={22}
                    height={24}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </form>
      </main>
    </div>
  );
}

export default AddItem;
