import styled from "styled-components";

interface CardProps {
  image: string;
  topText: React.ReactNode;
  middleText: React.ReactNode;
  bottomText: React.ReactNode;
  align: string;
}

type AlignType = Pick<CardProps, "align">;

export default function Card({
  image,
  topText,
  middleText,
  bottomText,
  align,
}: CardProps) {
  return (
    <CardSection align={align}>
      <CardWrap>
        <CardImage align={align}>
          <img src={image} alt="카드 이미지" />
        </CardImage>
        <CardText align={align}>
          <span>{topText}</span>
          <h2>{middleText}</h2>
          <p>{bottomText}</p>
        </CardText>
      </CardWrap>
    </CardSection>
  );
}

const CardSection = styled.section<AlignType>`
  display: flex;
  justify-content: ${(props) =>
    props.align === "left" ? "flex-start" : "flex-end"};
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 138px 20px;
`;

const CardWrap = styled.div`
  display: flex;
`;

const CardImage = styled.div<AlignType>`
  order: ${(props) => (props.align === "left" ? 1 : 2)};
  img {
    width: 100%;
    max-width: 588px;
  }
`;

const CardText = styled.div<AlignType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-left: ${(props) => (props.align === "left" ? "54px" : "24px")};
  padding-right: ${(props) => (props.align === "left" ? "24px" : "54px")};
  order: ${(props) => (props.align === "left" ? 2 : 1)};
  background-color: #fcfcfc;
  span {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--blue-color);
  }

  h2 {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 24px;
    color: var(--gray700-color);
  }

  p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.3;
    color: var(--gray700-color);
  }
`;
