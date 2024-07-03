import {
  Container,
  ContainerCategory,
  ContainerContent,
  ContainerDescription,
  ContainerTitle,
} from "core/styles/Container";
import { MainSection } from "./MainSection";

import { styled } from "styled-components";
import SearchImg from "core/assets/images/main/search/searchImage.png";

const SearchSection = styled(MainSection)`
  align-items: end;
`;

const SearchContainer = styled(Container)`
  flex-direction: row-reverse;

  @media (width < 1200px) {
    flex-direction: column;
    align-items: end;
  }
`;

const SearchContent = styled(ContainerContent)`
  max-width: 32rem;
  align-items: end;
  text-align: right;

  @media (width < 1200px) {
    max-width: 100%;
  }
`;

const SearchCategory = styled(ContainerCategory)`
  justify-content: end;
  @media (width < 768px) {
    font-size: 1.6rem;
    line-height: 2.24rem;
  }
`;

const SearchTitle = styled(ContainerTitle)`
  @media (width < 1200px) {
    max-width: 100%;
    font-size: 3.2rem;
    line-height: 4.48rem;
    letter-spacing: 2%;
  }
  @media (width < 768px) {
    font-size: 2.4rem;
    line-height: 3.36rem;
  }
`;

const SearchInfo = () => {
  return (
    <SearchSection>
      <SearchContainer>
        <img src={SearchImg} alt="Search Image" />
        <SearchContent>
          <SearchCategory>Search</SearchCategory>
          <SearchTitle>구매를 원하는 상품을 검색하세요</SearchTitle>
          <ContainerDescription>
            구매하고 싶은 물품은 검색해서 쉽게 찾아보세요
          </ContainerDescription>
        </SearchContent>
      </SearchContainer>
    </SearchSection>
  );
};

export default SearchInfo;
