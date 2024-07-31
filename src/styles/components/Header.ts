import styled from "styled-components";

export const Logo = styled.img`
  width: 153px;
  height: 51px;
  @media (max-width: 767px) {
    width: 103px;
    height: 35px;
  }
`;

export const Nav = styled.nav`
  margin-left: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  flex-grow: 1;
  & > * {
    font-size: 18px;
    font-weight: 700;
    line-height: 21.48px;
    border: 0;
    background-color: transparent;
    height: 100%;
  }
  & > *.active {
    color: ${({ theme }) => theme.colors.brandBlue};
  }
`;
