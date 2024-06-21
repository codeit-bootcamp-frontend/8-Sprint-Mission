import { ReactNode } from 'react';
import styled from 'styled-components';

interface MemberCheckProps {
  children: ReactNode;
}

function MemberCheck({ children }: MemberCheckProps) {
  return <_MemberCheckSection>{children}</_MemberCheckSection>;
}

export default MemberCheck;

const _MemberCheckSection = styled.section`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.79rem;
  text-align: center;

  & a {
    color: var(--hyper-blue);
    text-decoration: underline;
    margin-left: 0.4rem;
  }
`;
