import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface MemberCheckProps {
  memberCheckText: string;
  linkTo: string;
  linkText: string;
}

function MemberCheck({ memberCheckText, linkTo, linkText }: MemberCheckProps) {
  return (
    <StyledMemberCheckSection>
      <span>{memberCheckText}</span>
      <Link to={linkTo}>{linkText}</Link>
    </StyledMemberCheckSection>
  );
}

export default MemberCheck;

const StyledMemberCheckSection = styled.section`
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
