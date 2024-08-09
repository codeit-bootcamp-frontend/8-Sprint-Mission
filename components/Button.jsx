import styled from 'styled-components';

export default function Button() {
  return <ButtonBox>글쓰기</ButtonBox>;
}

const ButtonBox = styled.div`
  width: 88px;
  height: 42px;
  border-radius: 8px;
  padding: 12px 23px;
  background-color: var(--primary-blue);
  color: var(--white);
  font-weight: 600;
  font-size: 16px;
`;
