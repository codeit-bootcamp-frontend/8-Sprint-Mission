import {
  Container,
  ContainerCategory,
  ContainerContent,
  ContainerDescription,
  ContainerTitle,
} from "core/styles/Container";

import registerImg from "core/assets/images/main/register/registerImage.png";
import { styled } from "styled-components";
import { MainSection } from "./MainSection";

const RegisterDescription = styled(ContainerDescription)`
  max-width: 32rem;
  @media (width < 1200px) {
    max-width: 26rem;
    font-size: 1.8rem;
  }
  @media (width < 768px) {
    max-width: 24rem;
    font-size: 1.6rem;
    line-height: 1.92rem;
  }
`;

const RegisterInfo = () => {
  return (
    <MainSection>
      <Container>
        <img src={registerImg} alt="Register Image" />
        <ContainerContent>
          <ContainerCategory>Register</ContainerCategory>
          <ContainerTitle>판매를 원하는 상품을 등록하세요</ContainerTitle>
          <RegisterDescription>
            어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요
          </RegisterDescription>
        </ContainerContent>
      </Container>
    </MainSection>
  );
};

export default RegisterInfo;
