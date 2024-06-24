function SelectionList(click) {
  return (
    <div className="sort-method">
      <button onMouseDown={() => click("최신순")} type="button">
        최신순
      </button>
      <button onMouseDown={() => click("좋아요순")} type="button">
        좋아요순
      </button>
    </div>
  );
}

export default SelectionList;
