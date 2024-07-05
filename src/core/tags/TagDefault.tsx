import { styled } from "styled-components";

export const DefaultTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2.6rem;
  padding: 0.6rem 1.2rem 0.6rem 1.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  background-color: var(--gray-100);
  gap: 1rem;
`;

interface TagButtonProps {
  children: string;
}

const TagDefault = ({ children }: TagButtonProps) => {
  return <DefaultTag>{children}</DefaultTag>;
};

export default TagDefault;
