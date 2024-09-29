import styled from "styled-components";
import { useState } from "react";
import { AllBoardProps } from "../../components/boards/AllBoard";

type SearchOrderProp = Pick<AllBoardProps, "setSortOrder">;

export default function BoardOrder({ setSortOrder }: SearchOrderProp) {
  const ORDER_NEW = "최신순";
  const ORDER_LIKE = "좋아요순";
  const [dropText, setDropText] = useState<string>(ORDER_NEW);
  const [dropDisplay, setDropDisplay] = useState<boolean>(false);

  const handleClick = (order: string) => {
    setDropText(order);
    setDropDisplay(false);
    setSortOrder(order === ORDER_NEW ? "recent" : "like");
  };

  return (
    <DropDownWrap>
      <p
        onClick={() => {
          setDropDisplay(!dropDisplay);
        }}
      >
        {dropText}
      </p>
      <ul style={{ display: dropDisplay ? "block" : "none" }}>
        <li onClick={() => handleClick(ORDER_NEW)}>{ORDER_NEW}</li>
        <li onClick={() => handleClick(ORDER_LIKE)}>{ORDER_LIKE}</li>
      </ul>
    </DropDownWrap>
  );
}

const DropDownWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 130px;
  height: 42px;
  border: 1px solid var(--gray200-color);
  border-radius: 12px;

  p {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 3px 20px 0;
    font-size: 1.6rem;
    font-weight: 400;
    width: 100%;
    cursor: pointer;

    &::before {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-55%);
      content: "▾";
      font-size: 2rem;
    }
  }

  ul {
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    border: 1px solid var(--gray200-color);
    border-radius: 12px;
    background-color: #ffffff;
    overflow: hidden;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 42px;
      font-size: 1.6rem;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        background-color: var(--gray100-color);
      }

      &:first-child {
        border-bottom: 1px solid var(--gray200-color);
      }
    }
  }
`;
