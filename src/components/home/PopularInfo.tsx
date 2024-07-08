import {
  Container,
  ContainerCategory,
  ContainerContent,
  ContainerDescription,
  ContainerTitle,
} from "core/styles/Container";

import PopularImg from "core/assets/images/main/popular/popularImage.png";
import { MainSection } from "./MainSection";

const PopularInfo = () => {
  return (
    <MainSection>
      <Container>
        <img src={PopularImg} alt="Hot Item" />
        <ContainerContent>
          <ContainerCategory>Hot item</ContainerCategory>
          <ContainerTitle>인기 상품을 확인해 보세요</ContainerTitle>
          <ContainerDescription>
            가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요
          </ContainerDescription>
        </ContainerContent>
      </Container>
    </MainSection>
  );
};

export default PopularInfo;
