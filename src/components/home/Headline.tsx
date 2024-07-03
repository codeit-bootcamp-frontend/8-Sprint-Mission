import {
  HeadFootLine,
  HeadFootLineContent,
  HeadFootLineTitle,
} from "./HeadFootLine";
import HeadlineBtn from "./HeadlineBtn";
import headlineImg from "core/assets/images/headline/headlineImage.png";
import { styled } from "styled-components";

const HeadlineSection = styled(HeadFootLine)`
  margin: 7rem auto 0;
  padding: 0 10rem;
`;

const Headline = () => {
  return (
    <HeadlineSection>
      <HeadFootLineContent>
        <HeadFootLineTitle>
          <h3>일상의 모든 물건을 거래해 보세요</h3>
          <HeadlineBtn />
        </HeadFootLineTitle>
        <img src={headlineImg} alt="headline image" />
      </HeadFootLineContent>
    </HeadlineSection>
  );
};

export default Headline;
