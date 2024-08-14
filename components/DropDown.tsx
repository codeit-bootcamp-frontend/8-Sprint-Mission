import styled from "styled-components";

const StyledBox = styled.select`
  width: 130px;
  height: 42px;
  padding: 12px 20px;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--gray-200);
`;

interface DropDownProps {
  onOrderChange: (orderBy: string) => void;
}

function DropDown({ onOrderChange }: DropDownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onOrderChange(event.target.value);
  };

  return (
    <>
      <label htmlFor="order"></label>
      <StyledBox onChange={handleChange}>
        <option value="recent">최신순</option>
        <option value="like">좋아요순</option>
      </StyledBox>
    </>
  );
}

export default DropDown;
