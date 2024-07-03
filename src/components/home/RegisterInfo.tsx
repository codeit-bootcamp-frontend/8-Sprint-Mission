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

const RegisterContent = styled(ContainerContent)`
  max-width: 32rem;
`;

const RegisterInfo = () => {
  return (
    <MainSection>
      <Container>
        <img src={registerImg} alt="Register Image" />
        <RegisterContent>
          <ContainerCategory>Register</ContainerCategory>
          <ContainerTitle>판매를 원하는 상품을 등록하세요</ContainerTitle>
          <ContainerDescription>
            어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요
          </ContainerDescription>
        </RegisterContent>
      </Container>
    </MainSection>
  );
};

export default RegisterInfo;
