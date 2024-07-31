import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  margin-top: 70px;
  flex: 1;
  width: 100%;
`;

export const BannerTop = styled.div<{ image: string }>`
  display: flex;
  width: 100%;
  height: 540px;
  background: ${({ theme }) => theme.bgColors.blue};
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: 996px 447px;
  background-position: bottom 0 right 20%;
  @media (max-width: 1199px) {
    align-items: start;
    height: 771px;
    padding-top: 84px;
    background-position: bottom 0 center;
  }
  @media (max-width: 767px) {
    height: 540px;
    background-size: auto 281px;
    padding-top: 48px;
  }
`;

export const BannerBottom = styled(BannerTop)`
  background-size: 996px 540px;
  @media (max-width: 1199px) {
    height: 927px;
    padding-top: 201px;
  }
  @media (max-width: 767px) {
    height: 540px;
    background-size: auto 269px;
    padding-top: 121px;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 32px;
  margin: 0 auto;
  width: 1200px;
  @media (max-width: 1199px) {
    align-items: center;
    gap: 24px;
    width: 100%;
  }
`;

export const BannerTopTitle = styled.h1`
  color: var(--gray-700);
  text-align: left;
  span {
    display: block;
  }
  @media (max-width: 1199px) {
    span {
      display: inline;
    }
  }
  @media (max-width: 767px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 44.8px;
    text-align: center;
    span {
      display: block;
    }
  }
`;

export const BannerBottomTitle = styled(BannerTopTitle)`
  @media (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 16px 125px;
  background: var(--brand-blue);
  border-radius: 9999px;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  white-space: nowrap;
  @media (max-width: 767px) {
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.09px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 1199px) {
    gap: 64px;
    width: 696px;
    padding: 24px 0 80px;
  }
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 51px 0 64px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  height: 720px;
  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
    height: 100%;
  }
`;

export const ContentRight = styled(Content)`
  justify-content: end;
  img {
    order: 1;
  }
  @media (max-width: 1199px) {
    img {
      order: 0;
    }
  }
`;

export const ContentImg = styled.img<{ order?: number }>`
  width: 588px;
  height: 444px;
  order: ${({ order = 0 }) => order};
  @media (max-width: 1199px) {
    width: 696px;
    height: 524px;
    order: 0;
  }
  @media (max-width: 767px) {
    width: 344px;
    height: 259px;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
