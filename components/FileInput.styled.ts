import styled from "styled-components";

const StyledLabel = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
const StyledPreviewImg = styled.img`
  width: 282px;
  height: 282px;
  border-radius: 12px;
  &:hover {
    outline: 2px solid var(--blue-100);
  }
`;
const StyledFileInputBox = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: var(--gray-100);
  position: relative;
  background-image: url("/image/ic_plus.png");
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 40%;
  &:hover {
    outline: 2px solid var(--blue-100);
  }
`;
const StyledFileInputPlaceholder = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 55%;
  color: var(--gray-400);
  font-size: 16px;
  font-weight: 400;
`;
const StyledFileInput = styled.input`
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: var(--gray-100);
  opacity: 0;
  position: absolute;
  cursor: pointer;
`;
const StyledCancelButton = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--gray-400);
  color: var(--gray-50);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: var(--blue-100);
  }
`;
const StyledFileArea = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;
const StyledImgArea = styled.div`
  position: relative;
  display: inline-block;
`;

export {
  StyledLabel,
  StyledPreviewImg,
  StyledFileInputBox,
  StyledFileInputPlaceholder,
  StyledFileInput,
  StyledCancelButton,
  StyledFileArea,
  StyledImgArea,
};
