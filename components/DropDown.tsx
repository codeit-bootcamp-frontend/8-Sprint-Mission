import styled from "styled-components";

const StyledBox = styled.select`
  width: 130px;
  height: 42px;
  padding: 12px 20px;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--gray-200);
`;

function DropDown() {
  return (
    <>
      <label htmlFor="order"></label>
      <StyledBox id="order" name="order">
        <option value="recent">최신순</option>
        <option value="like">좋아요순</option>
      </StyledBox>
    </>
  );
}

export default DropDown;
