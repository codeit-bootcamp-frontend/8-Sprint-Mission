import {
  Container,
  ContainerCategory,
  ContainerContent,
  ContainerDescription,
  ContainerTitle,
} from "core/styles/Container";
import { Section } from "core/styles/Section";

import { styled } from "styled-components";
import SearchImg from "core/assets/images/main/search/searchImage.png";

const SearchSection = styled(Section)`
  align-items: end;
`;

const SearchContainer = styled(Container)`
  flex-direction: row-reverse;
`;

const SearchContent = styled(ContainerContent)`
  max-width: 32rem;
  align-items: end;
  text-align: right;
`;

const SearchCategory = styled(ContainerCategory)`
  justify-content: end;
`;

const SearchTitle = styled(ContainerTitle)``;

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
