import styled from "styled-components";

import AddItemFileInput from "./AddItemFileInput";
import AddItemInputs from "./AddItemInputs";
import Tagbox from "./Tagbox";

function AddItemForm({
  values,
  tagValue,
  handleChange,
  handleDeleteImg,
  handleKeydownTag,
  handleDeleteTag,
}) {
  return (
    <StyledForm id="add-submit">
      <AddItemFileInput
        onChange={handleChange}
        onDelete={handleDeleteImg}
        images={values.images}
      />
      <AddItemInputs
        label="상품명"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <AddItemInputs
        label="상품 소개"
        name="description"
        value={values.description}
        onChange={handleChange}
      />
      <AddItemInputs
        label="판매가격"
        name="price"
        value={values.price}
        onChange={handleChange}
      />
      <AddItemInputs
        label="태그"
        name="tags"
        value={tagValue}
        onChange={handleChange}
        onKeyDown={handleKeydownTag}
      />
      <Tagbox tags={values.tags} onClick={handleDeleteTag} />
    </StyledForm>
  );
}
export default AddItemForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`;
