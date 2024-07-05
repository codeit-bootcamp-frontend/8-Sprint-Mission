import styled from "styled-components";

import { Button, Container } from "./CommonStyled";

export const DetailContainer = styled(Container)`
  padding-top: 24px;
  color: var(--gray-800);
  flex-direction: column;
`;

export const BackButton = styled(Button)`
  width: 240px;
  margin: 0 auto;
  background-color: var(--blue);
  border-radius: 40px;
  img {
    padding-left: 10px;
  }
`;
export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => (theme.size === "small" ? "column" : "row")};
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--gray-200);
  .images {
    width: ${({ theme }) =>
      theme.size === "large"
        ? "486px"
        : theme.size === "medium"
        ? "343px"
        : "100%"};
    height: auto;
    border-radius: 16px;
    object-fit: contain;
  }
`;

export const RightContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const RightHeaderContainer = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray-200);
  .name {
    padding-bottom: 16px;
    font-size: 24px;
    font-weight: 600;
  }
  .price {
    font-size: 40px;
    font-weight: 600;
  }
`;

export const RightMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding-top: 16px;
  .info-titles {
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--gray-600);
  }
  .description {
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 24px;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const RightFooterWrapper = styled.div`
  button {
    height: 40px;
    border: 1px solid var(--gray-200);
    border-radius: 35px;
    display: flex;
    gap: 6px;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 0;
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-500);
    img {
      width: 23px;
      height: 27px;
    }
  }
`;

export const TagButton = styled.button`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  background-color: var(--gray-100);
  border-radius: 26px;
`;

export const CommentsContainer = styled.div`
  margin-top: 24px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.normalFont.medium};
  label {
    width: 100%;
    font-weight: 600;
  }
  textarea {
    width: 100%;
    padding: 16px 24px;
    background-color: var(--gray-100);
    margin: 16px 0;
    min-height: 104px;
    resize: none;
    border: none;
    border-radius: 12px;
    outline: none;
    &::placeholder {
      color: var(--gray-400);
    }
  }
`;
export const CommentButton = styled(Button)`
  width: 80px;
  background-color: ${({ $active }) =>
    $active ? "var(--blue)" : "var(--gray-400)"};
`;

export const CommentsItem = styled.div`
  padding-top: 24px;
  font-weight: 400;
  border-bottom: 1px solid var(--gray-200);
  .content {
    font-size: ${({ theme }) => theme.normalFont.medium};
  }
  &:last-child {
    margin-bottom: 40px;
  }
`;

export const WriterContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 24px 0;
  .image {
    width: 40px;
    height: 40px;
  }
`;
export const WriterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  .nickname {
    font-size: ${({ theme }) => theme.normalFont.small};
    color: var(--gray-600);
  }
  .time {
    font-size: ${({ theme }) => theme.normalFont.small - 2};
    color: var(--gray-400);
  }
`;

export const EmptyCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 24px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    color: var(--gray-400);
    font-size: ${({ theme }) => theme.normalFont.medium};
  }
`;
