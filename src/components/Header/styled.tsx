import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 9px 24px;
  border: 0px 0px 1px 0px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 10px auto;
`;

export const Logo = styled.img`
  width: 103px;
  height: 51px;
`;
