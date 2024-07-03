import {
  Container,
  ContainerCategory,
  ContainerContent,
  ContainerDescription,
  ContainerTitle,
} from "core/styles/Container";
import { Section } from "core/styles/Section";
import PopularImg from "core/assets/images/main/popular/popularImage.png";

const Popular = () => {
  return (
    <Section>
      <Container>
        <img src={PopularImg} alt="Hot Item Image" />
        <ContainerContent>
          <ContainerCategory>Hot item</ContainerCategory>
          <ContainerTitle>인기 상품을 확인해 보세요</ContainerTitle>
          <ContainerDescription>
            가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요
          </ContainerDescription>
        </ContainerContent>
      </Container>
    </Section>
  );
};

export default Popular;
