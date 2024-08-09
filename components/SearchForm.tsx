import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import DropDown from "./DropDown";
import style from "@/components/SearchForm.module.css";
import { useRouter } from "next/router";

const SearchForm = ({ initalValue = "" }) => {
  const router = useRouter();
  const [value, setValue] = useState<string>(initalValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      router.push("/");
      return;
    }
    router.push(`/search?q=${value}`);
  };

  return (
    <>
      <div className={style.commentcontiner}>
        <h1>게시글</h1>
        <button>글쓰기</button>
        <form onSubmit={handleSubmit}>
          <input
            name="keyword"
            value={value}
            placeholder="검색할 상품을 입력해주세요"
            onChange={handleChange}
          />
        </form>
        <DropDown />
      </div>
    </>
  );
};

export default SearchForm;
