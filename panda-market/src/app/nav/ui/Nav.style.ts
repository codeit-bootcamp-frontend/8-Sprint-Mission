import { colors, sizeTheme } from '@/f_shared/config/styles';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: 4.375rem;
  padding: 0 12.5rem;
  border-bottom: 1px solid #dfdfdf;
  background: white;

  z-index: 2;

  @media ${sizeTheme.tablet} {
    padding: 0 1.5rem;
  }
  @media ${sizeTheme.mobile} {
    padding: 0 1rem;
  }
`;

export const Categories = styled.div`
  width: 100%;
  display: flex;
  padding: 0 2rem;
  justify-content: start;
  align-items: center;
  flex-shrink: 2;
`;

interface CategoryItemProps {
  $isSelected: boolean;
}

export const CategoryItem = styled.p<CategoryItemProps>`
  color: ${({ $isSelected }) =>
    $isSelected ? colors.primary[100] : colors.secondary[600]};
  /* pretendard/2lg-18px-bold */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  /* line-height: 1.625rem; 144.444% */
  text-align: center;

  display: flex;
  padding: 1.3125rem 0.9375rem;
  gap: 0.625rem;

  &:hover {
    color: ${colors.primary[100]};
  }
`;
