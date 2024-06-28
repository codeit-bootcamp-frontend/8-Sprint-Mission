import XIcon from "core/assets/icons/xIcon/x.svg";
import { styled } from "styled-components";

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 26px;
  padding: 6px 12px 6px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  background-color: #f9fafb;
  & img {
    width: 22px;
    height: 24px;
  }
`;

interface TagButtonProps {
  children: string;
}

const TagButton = ({ children }: TagButtonProps) => {
  return (
    <Tag>
      {children}
      <img src={XIcon} alt="태그 삭제 버튼" />
    </Tag>
  );
};

export default TagButton;
