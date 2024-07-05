import React, { useContext } from "react";

import icHeart from "../../../assets/images/ic_heart.svg";
import * as S from "../../../assets/styledComponents/DetailItemStyled";

import InfoTags from "./InfoTags";

function DetailItemInfo({ info }) {
  const price = info?.price.toLocaleString();
  return (
    <S.ItemInfoContainer>
      <img className="images" src={info?.images} />
      <S.RightContainer>
        <S.RightHeaderContainer>
          <h2 className="name">{info?.name}</h2>
          <p className="price">{`${price}원`}</p>
        </S.RightHeaderContainer>
        <S.RightMainContainer>
          <span className="info-titles">상품 소개</span>
          <p className="description">{info?.description}</p>
          <span className="info-titles">상품 태그</span>
          <S.TagsContainer>
            <InfoTags tags={info?.tags} />
          </S.TagsContainer>
        </S.RightMainContainer>
        <S.RightFooterWrapper>
          <button>
            <img src={icHeart} />
            {info?.favoriteCount}
          </button>
        </S.RightFooterWrapper>
      </S.RightContainer>
    </S.ItemInfoContainer>
  );
}

export default DetailItemInfo;
