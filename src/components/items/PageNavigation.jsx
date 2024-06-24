import styled from "styled-components";

import ArrowLeft from "../../assets/images/arrow_left.svg";
import ArrowRight from "../../assets/images/arrow_right.svg";

import PageArrowButton from "./PageArrowButton";
import PageButton from "./PageButton";

function PageNavigation(props) {
  return (
    <PageNavs>
      <PageArrowButton direction={ArrowLeft} />
      <PageButton />
      <PageArrowButton direction={ArrowRight} />
    </PageNavs>
  );
}

export default PageNavigation;

const PageNavs = styled.div`
  margin-bottom: 100px;
  display: flex;
  gap: 4px;
  button {
    width: 40px;
    height: 40px;
    border: 1px solid var(--gray-200);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: var(--gray-500);
  }
`;
