import logoImg from 'assets/images/home/logoAndTypo.png';
import useNavigateTo from 'hooks/useNavigateTo';
import styled from 'styled-components';
import Button from './Button';

function Header() {
  const { navigateTo } = useNavigateTo();

  return (
    <StyledHeader>
      <img src={logoImg} alt={'앱 로고와 이름 이미지'} onClick={() => navigateTo('/')} />
      <Button width={'12.8rem'} height={'4.8rem'} onClick={() => navigateTo('/login')}>
        로그인
      </Button>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  /* 다른 요소에 의해 가려지지 않도록 z-index 부여 */
  z-index: 9999;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: var(--header-heigt);
  padding: var(--padding-001);

  background-color: var(--white);

  & img {
    width: 15.3rem;
    height: 5.1rem;
    &:hover {
      cursor: pointer;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0 2.4rem;
  }
  @media all and (max-width: 767px) {
    padding: 0 1.6rem;
  }
`;
