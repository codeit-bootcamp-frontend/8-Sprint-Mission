import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as S from "../assets/styledComponents/DetailItemStyled";

import { getItemInfo, getItemComments } from "../components/apis";

import DetailItemInfo from "../components/items/detailItem/DetailItemInfo";
import DetailItemComments from "../components/items/detailItem/DetailItemComments";
import backImage from "../assets/images/ic_back.svg";

function DetailItem() {
  const [itemInfo, setItemInfo] = useState();
  const [itemComments, setItemComments] = useState();
  const { itemId } = useParams();

  const loadComments = async () => {
    try {
      const comments = await getItemComments(itemId);
      setItemComments(comments);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const loadInfo = async () => {
      try {
        const info = await getItemInfo(itemId);
        setItemInfo(info);
      } catch (err) {
        console.log(err);
      }
    };

    loadInfo();
    loadComments();
  }, []);
  return (
    <S.DetailContainer>
      <DetailItemInfo info={itemInfo} />
      <DetailItemComments comments={itemComments} />
      <Link to="/items">
        <S.BackButton>
          목록으로 돌아가기
          <img src={backImage} />
        </S.BackButton>
      </Link>
    </S.DetailContainer>
  );
}

export default DetailItem;
