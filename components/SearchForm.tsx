import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import DropDown from "./DropDown";
import style from "@/components/SearchForm.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

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
        <Link href={"/addboards"}>
          <button>글쓰기</button>
        </Link>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search" className={style.sronly}>
            게시글 검색
          </label>
          <input
            id="search"
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
