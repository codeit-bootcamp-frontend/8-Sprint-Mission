import XIcon from "core/assets/icons/xIcon/x.svg";
import { styled } from "styled-components";
import { DefaultTag } from "./TagDefault";

const BtnTag = styled(DefaultTag)`
  & img {
    width: 2.2rem;
    height: 2.4rem;
    cursor: pointer;
  }
`;

interface TagButtonProps {
  children: string;
}

const TagButton = ({ children }: TagButtonProps) => {
  return (
    <BtnTag>
      {children}
      <img src={XIcon} alt="태그 삭제 버튼" />
    </BtnTag>
  );
};

export default TagButton;
