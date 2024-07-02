import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemInfo } from "../../apis";
import styled from "styled-components";

function DetailItem() {
  const [itemInfo, setItemInfo] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getItem = async () => {
      try {
        const item = await getItemInfo(itemId);
        setItemInfo(item);
      } catch (err) {
        console.log(err);
      }
    };
    getItem();
  }, []);

  return (
    <DetailContainer>{itemInfo && <div>{itemInfo.name}</div>}</DetailContainer>
  );
}

export default DetailItem;

const DetailContainer = styled.div`
  margin: 70px 0 0 0;
  font-size: 100px;
`;
