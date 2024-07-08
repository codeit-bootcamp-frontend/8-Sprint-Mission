import styled from "styled-components";

export const Container = styled.div`
  margin: 70px auto 250px;
  max-width: 1200px;
  height: auto;
  display: flex;

  @media (max-width: 1199px) {
    justify-content: center;
    width: 100%;
    padding: 0 24px 0;
  }
  @media (max-width: 1199px) {
    padding: 0 16px 0;
  }
`;

export const Button = styled.button`
  background-color: var(--gray-400);
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  padding: 12px 23px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
