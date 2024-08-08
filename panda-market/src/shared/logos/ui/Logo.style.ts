import { sizeTheme } from '@/shared/styles';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  display: flex;
  width: 9.5625rem;
  height: 3.1875rem;
  padding: 0.31356rem 0rem 0.3655rem 0rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  :hover {
    transform: rotate(360deg);
    transition: transform 1.5s ease-in-out;
  }

  @media ${sizeTheme.mobile} {
    width: 5.0625rem;
    height: 2.5rem;
    padding: 0.39406rem 0rem 0.41844rem 0rem;
  }
`;
