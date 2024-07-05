import styled from 'styled-components';

interface SpacerProps {
  topHeight: string;
  bottomHeight: string;
  needLine: boolean;
}

function Spacer({ topHeight = '0rem', bottomHeight = '0rem', needLine = false }: SpacerProps) {
  return (
    <StyledSpacer topHeight={topHeight} bottomHeight={bottomHeight} needLine={needLine}>
      <div className={'spacer-top'} />
      <div className={'spacer-line'} />
      <div className={'spacer-bottom'} />
    </StyledSpacer>
  );
}

export default Spacer;

const StyledSpacer = styled.div<SpacerProps>`
  & .spacer-top {
    height: ${({ topHeight }) => topHeight};
  }
  & .spacer-line {
    // border로 하면 네모 테두리를 그리게 되므로 1px로 설정해도 2px가 되어버림
    border-bottom: ${({ needLine }) => needLine && 'var(--border-200)'};
  }
  & .spacer-bottom {
    height: ${({ bottomHeight }) => bottomHeight};
  }
`;
