export default function SearchForm() {
  return (
    <form>
      <input placeholder="검색할 상품을 입력해주세요" />
      <select>
        <option>최신순</option>
        <option>좋아요순</option>
      </select>
    </form>
  );
}
