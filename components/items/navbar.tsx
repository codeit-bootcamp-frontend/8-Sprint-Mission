import { ChangeEvent } from "react";
import { debounce } from "lodash";
import DropDown from "./dropdown";

export default function NavBar({
  keyword,
  orderBy,
}: {
  keyword: string;
  orderBy: "recent" | "favorite";
}) {
  const debouncedHandleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target;
  }, 1000);

  return (
    <nav>
      <h1>전체 상품</h1>
      <ul>
        <li>
          <input
            type='text'
            placeholder='검색할 상품을 입력해주세요'
            onChange={debouncedHandleChange}
            defaultValue={keyword}
          />
        </li>
        <li>상품 등록하기</li>
        <li>
          <DropDown orderBy={orderBy} />
        </li>
      </ul>
    </nav>
  );
}
