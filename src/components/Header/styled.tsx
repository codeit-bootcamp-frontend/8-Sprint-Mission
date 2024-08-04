import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 10px 24px 9px;
  background-color: white;
  border: 0 0 1px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDivider};
  @media (min-width: 1200px) {
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  font-size: 16px;
  font-weight: 700;
  line-height: 21.48px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
  flex-grow: 1;
  @media (min-width: 768px) {
    font-size: 18px;
    gap: 20px;
    margin-left: 40px;
  }
  @media (min-width: 1200px) {
    gap: 40px;
    margin-left: 60px;
  }
`;

export const NavItem = styled(NavLink)`
  background-color: transparent;
  height: 100%;
  &.active {
    color: ${({ theme }) => theme.colors.brandBlueActive};
  }
`;
