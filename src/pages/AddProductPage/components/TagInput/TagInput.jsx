import React, { useEffect, useState } from "react";
import "./TagInput.css";
import { FaPlus } from "react-icons/fa6";

function TagInput({ handleTagInputChange, productValues }) {
  const [tagValue, setTagValue] = useState("");
  const [tagValueList, setTagValueList] = useState([]);
  const addTagOnClick = () => {
    const addTagList = [...tagValueList, tagValue];
    setTagValueList(addTagList);
    handleTagInputChange(addTagList);
    setTagValue("");
  };

  const onChange = (e) => {
    setTagValue(e.target.value);
  };
  useEffect(() => {
    productValues.tag.length === 0 && setTagValueList([]);
  }, [productValues]);
  return (
    <div className="add-product-section">
      <label htmlFor="product-tag">태그</label>
      <div className="product-tag-input-box">
        <input
          id="product-tag"
          type="text"
          name="tag"
          placeholder="태그를 입력해주세요"
          value={tagValue}
          onChange={onChange}
        />
        <button onClick={addTagOnClick} type="button" className="add-tag-Btn">
          <FaPlus />
        </button>
      </div>
      <div className="tag-List">
        {tagValueList?.map((tag, idx) => {
          return <span key={tag + idx}>{tag}</span>;
        })}
      </div>
    </div>
  );
}

export default TagInput;
